import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Arrow } from '../../components/atoms'
import { Calendar } from '../../components/organisms/calendar'
import { CURRENT_DATE } from '../../utils/Constants'
import { getDaysInMonth, getStartWeekDay } from '../../utils/Time'


const CALENDAR = {
    december2020: {
        start: getStartWeekDay(new Date('12-01-2020')),
        days: getDaysInMonth(new Date('12-01-2020'))
    },
    january2021: {
        start: getStartWeekDay(new Date('01-01-2021')),
        days: getDaysInMonth(new Date('01-01-2021'))
    },
    february2021: {
        start: getStartWeekDay(new Date('02-01-2021')),
        days: getDaysInMonth(new Date('02-01-2021'))
    },
}


export const Home: React.FC<any> = (props) => {
    const [date, setdate] = useState(CURRENT_DATE)
    const history = useHistory()

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
            <Calendar className="calendar" nextMonthsIndicator={true} />
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
    }
`