import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Arrow } from '../../components/atoms'
import { Calendar } from '../../components/organisms/calendar'
import { getListOfDays } from '../allMonths/helpers'

interface RouteParams {
    id: string
}

export const Home: React.FC<any> = (props) => {
    const history = useHistory()
    const { id: date } = useParams<RouteParams>()
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
            <Calendar className="calendar" nextMonthsIndicator={true} month={date} days={days} selected={date} />
        </Div>
    )
}

const Div = styled.div`
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