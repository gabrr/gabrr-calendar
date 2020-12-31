import React, { useState } from 'react'
import styled from 'styled-components'
import { dates } from '../../../MOCK'
import { CURRENT_DATE } from '../../../utils/Constants'
import { getMonthName } from '../../../utils/Time'
import { getClassIfOffset, getClassIfSelected, indicatorClass, monthIndicatorConstructor } from './helper'
import moment from 'moment'

interface Props {
    className?: string
    nextMonthsIndicator?: boolean
    selected?: string
    month?: string
}




export const Calendar: React.FC<Props> = ({ className, nextMonthsIndicator = false, selected = '12-31-2020', month = '12-31-2020' }) => {
    return (
        <Div className={className}>
            <div className="month_indicator">
                {monthIndicatorConstructor(month).map((month_i, index) => {
                    return (
                        <div className={`month cursor ${indicatorClass(nextMonthsIndicator, index)}`}>
                            {month_i}
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
                {dates.map((date, index) => {
                    return (
                        <div
                            key={index}
                            className={`spots cursor ${getClassIfOffset(date, selected)} ${getClassIfSelected(date, selected)}`}
                        >
                            <p className="spot_text"> {new Date(date).getDate()} </p>
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
            padding: 10px;
            font-weight: 500;
        }
        .weekday_text {
            padding: 5px;
        }
    }
    .calendar_body {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        width: 100%;
        align-items: center;
        justify-items: center;

        .offset {
            color: var(--offset-color);
        }

        .spots {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            transition: 200ms ease-in-out;
        }

        .spots:hover .spot_text {
            background-color: var(--hovered-background);
            color: var(--text-on-light);
        }

        .spot_text {
            width: max-content;
            padding: 5px;
            border-radius: 30px;
            font-weight: 300;
        }

        .selected .spot_text {
            background-color: var(--primary-color);
            color: var(--text-on-dark);
        }
    }

    .month_indicator {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .month {
            position: relative;
            text-align: center;
            margin: 15px;
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