import React from 'react'
import styled from 'styled-components'
import { Clock, Location, NoForecast } from '../../atoms'


interface Props {
    selected?: string
    date: string
    city: string
    color: string
    reminderId: string
    title: string
    onClick: (prop: any) => any
}


export const Reminder: React.FC<Props> = ({ selected, title, reminderId, date, city, color, onClick }) => {

    return (
        <Div
            onClick={() => onClick({ color, date, reminderId })}
            id={reminderId}
            className={`${color} reminder_card cursor`}
            key={reminderId}
        >
            <div className="inner_content">
                <h4 className="reminder_text">{title}</h4>
                <div className="location">
                    <Location fill="white" />
                    <p> {city} </p>
                </div>
                <div className="time">
                    <Clock />
                    <p>{date}</p>
                </div>
                <div className="forecast">
                    <div className="circle_background">
                        <NoForecast />
                    </div>
                </div>
            </div>
        </Div>
    )
}

const Div = styled.div`
    border-radius: 15px;
    width: 92%;
    transition: 300ms ease-in-out;
    
    .inner_content {
        pointer-events: none;
        padding: 15px 25px;
        display: grid;
        color: var(--text-on-dark);
        grid-template-areas:
            'text text text forecast'
            'loca loca loca forecast'
            'time time time forecast'
        ;
    }

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