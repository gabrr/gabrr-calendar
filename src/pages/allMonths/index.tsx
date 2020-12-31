import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Calendar } from '../../components/organisms/calendar';
import { CURRENT_DATE } from '../../utils/Constants';

interface RouteParams {
    
}

export const AllMonths: React.FC<any> = (props) => {

    return (
        <Div>
            <Calendar className="calendar" />
            <Calendar className="calendar" />
            <Calendar className="calendar" />
            <Calendar className="calendar" />
            <Calendar className="calendar" />
            <Calendar className="calendar" />
        </Div>
    )
}

const Div = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 2%;
    width: 96%;

    .calendar {
        width: 100%;

        .weekday, .spots {
            padding: 6px;
        }
        .weekday_text, .spot_text {
            padding: 3px;
        }
        .spots {
            padding: 10px;
        }
        .spot_text {
            padding: 5px;
        }
    } 
`