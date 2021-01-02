// libraries
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'

// components
import { Arrow } from '../../components/atoms'
import { Calendar, RemindersList, ReminderForm } from '../../components/organisms'

// functions
import { getListOfDays } from '../allMonths/helpers'

interface RouteParams {
    id: string
}

export const Home: React.FC<any> = (props) => {
    const history = useHistory()
    const { id: date } = useParams<RouteParams>()
    const reminders = useSelector((state: any) => state?.reminders[date] ?? null)

    const days = getListOfDays(date)

    const goBack = () => {
        history.push('/all-months')
    }

    return (
        <Div>
            <div className="header">
                <button className="back_button cursor" onClick={goBack}>
                    <Arrow className="arrow" />
                </button>
                <div className="year">
                   <h1>{new Date(date).getFullYear()}</h1>
                </div>
            </div>
            <div className="row">
                <Calendar className="calendar" nextMonthsIndicator={true} month={date} days={days} selected={date} />
                <RemindersList selected={date} reminders={reminders} />
            </div>
            <ReminderForm />
        </Div>
    )
}

const Div = styled.div`
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 20px 2%;
    }

    .year {
        margin-left: 40px;
    }
    .back_button {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        background-color: var(--hoverable-background);
        outline: none;
        transition: 200ms ease-in-out;

        &:hover {
            background-color: var(--hovered-background);
        }

        .arrow path {
            stroke: var(--hoverable-icon)
        }
    }
    .calendar {
        width: 35%;
        margin-left: 2%;

        .month_indicator {
            width: 95%;
            margin: 20px auto;
        }
    }

`