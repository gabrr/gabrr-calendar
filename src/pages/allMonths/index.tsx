import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Calendar } from '../../components/organisms/calendar';
import { CURRENT_DATE } from '../../utils/Constants';
import { allMonthsConstructor } from './helpers';

interface RouteParams {
    
}

export const AllMonths: React.FC<any> = (props) => {

    allMonthsConstructor('12-1-2020')

    return (
        <Div>
            <Calendar className="calendar" month="01-01.2021" />
            <Calendar className="calendar" month="02-01.2021" />
            <Calendar className="calendar" month="03-01.2021" />
            <Calendar className="calendar" month="04-01.2021" />
            <Calendar className="calendar" month="05-01.2021" />
            <Calendar className="calendar" />
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 5%;
    width: 90%;

    .calendar {
        width: 100%;

        .weekday, .spots {
            padding: 6px;
        }
        .weekday_text, .spot_text {
            padding: 3px;
            font-size: 14px;
        }
        .spots {
            padding: 10px;
        }
        .spot_text {
            padding: 5px;
            font-size: 12px;
        }
    } 
`