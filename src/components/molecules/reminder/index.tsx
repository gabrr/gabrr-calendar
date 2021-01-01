import React from 'react'
import styled from 'styled-components'
import { Clock, Location, NoForecast } from '../../atoms'


interface Props {
    selected?: string
    time: string
    city: string
    color: string
}


export const Reminder: React.FC<Props> = ({ selected, time, city, color }) => {


    return (
        <Div className={color}>
            <h4 className="reminder_text">Meeting with Company ABC CEO</h4>
            <div className="location">
                <Location fill="white" />
                <p> {city} </p>
            </div>
            <div className="time">
                <Clock />
                <p>{time}</p>
            </div>
            <div className="forecast">
                <div className="circle_background">
                    <NoForecast />
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
    width: 92%;
    padding: 15px 25px;
    border-radius: 15px;
    display: grid;
    color: var(--text-on-dark);
    grid-template-areas:
        'text text text forecast'
        'loca loca loca forecast'
        'time time time forecast'
    ;

    &.orange {
        background-color: var(--orange);
    }
    &.red {
        background-color: var(--red);
    }
    &.blue {
        background-color: var(--blue);
    }
    &.green {
        background-color: var(--green);
    }
    
    .reminder_text {
        grid-area: text;
        margin-bottom: 7px;
    }

    .location {
        grid-area: loca;

        svg {
            transform: scale(0.6);
        }
    }

    .time {
        grid-area: time;

        img {
            width: 25px;
            transform: scale(0.6);
        }
    }

    .forecast {
        grid-area: forecast;
        justify-self: right;
        align-self: center;

        .circle_background {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            background-color: var(--background);
            justify-content: center;
            align-items: center;
        }

        img {
            width: 45px
        }   
    }

    .time, .location {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 2px 0;

        p {
            font-size: 13px;
        }
    }

    

`