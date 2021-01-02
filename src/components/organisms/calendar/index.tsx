import React from 'react'
import styled from 'styled-components'
import { CURRENT_DATE } from '../../../utils/Constants'
import { getMonthName } from '../../../utils/Time'
import { getClassIfOffset, getClassIfSelected, indicatorClass, monthIndicatorConstructor } from './helper'
import { IMonth } from '../../../types/months'
import { useHistory } from 'react-router-dom'

interface Props {
    className?: string
    nextMonthsIndicator?: boolean
    selected?: string
    month?: string
    days: IMonth | any
}


export const Calendar: React.FC<Props> = ({
    className,
    nextMonthsIndicator = false,
    selected = CURRENT_DATE,
    month = CURRENT_DATE,
    days
}) => {

    const history = useHistory()

    const navigate = (day: string) => {
        history.push('/date/'+day)
    }

    const changeMonth = (date: any) => {
        navigate(date)
    }

    return (
        <Div className={className}>
            <div className="month_indicator">
                {monthIndicatorConstructor(month).map((month_i, index) => {
                    return (
                        <div
                            key={index+'indicator'}
                            className={`month cursor ${indicatorClass(nextMonthsIndicator, index)}`}
                            onClick={() => changeMonth(month_i)}
                        >
                            {getMonthName(month_i)}
                        </div>
                    ) 
                })}
            </div>
            <div className="calendar_header">
                <div className="weekday">
                    <p className="weekday_text">Sun</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Mon</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Tue</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Wed</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Thu</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Fri</p>
                </div>
                <div className="weekday">
                    <p className="weekday_text">Sat</p>
                </div>
            </div>
            <div className="calendar_body">
                {days.map((day: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className={`spots cursor ${getClassIfOffset(day, month)} ${getClassIfSelected(day, selected)}`}
                            onClick={() => navigate(day)}
                        >
                            <p className="spot_text"> {new Date(day).getDate()} </p>
                        </div>
                    ) 
                })}
            </div>
        </Div>
    )
}

const Div = styled.div`
    color: var(--text-on-light);
    user-select: none;

    .hidden {
        display: none;
    }

    .calendar_header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        margin-bottom: 10px;
        align-items: center;
        justify-items: center;

        .weekday {
            padding: 2% 1%;
            font-weight: 500;
        }
        .weekday_text {
            padding: 1%;
        }
    }
    .calendar_body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        min-height: 300px;
        align-items: center;
        justify-items: center;

        .offset {
            color: var(--offset-color);
        }

        .spots {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10% 3%;
            transition: 200ms ease-in-out;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                left: 50%;
                top: 50%;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                z-index: -1;
                transform: translate(-50%, -50%);
                
            }

            &.selected {
                color: var(--text-on-dark);
            }

            &.selected::after {
                background-color: var(--primary-color);
            }

            &:hover::after {
                background-color: var(--hovered-background);
            }

            &:hover {
                color: var(--text-on-light);
            }
        }

        .spot_text {
            width: max-content;
            padding: 3%;
            border-radius: 30px;
            font-weight: 300;
        }
    }

    .month_indicator {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .month {
            position: relative;
            text-align: center;
            margin: 20px 2%;
            font-weight: 700;
            color: var(--offset-color);
        }
        .month::after {
            position: absolute;
            content: '';
            width: 20px;
            height: 5px;
            border-radius: 3px;
            bottom: -7px;
            left: 50%;
            transform: translateX(-50%);
            transition: 200ms ease-in-out;
        }
        .month.selected {
            color: var(--text-on-light);
        }
        .month.selected::after {
            background-color: var(--primary-color);
        }
        .month:hover::after {
            background-color: var(--hovered-background);
        }
    }
`