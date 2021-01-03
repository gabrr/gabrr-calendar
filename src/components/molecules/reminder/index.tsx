// libraries
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { ICitiesResponse } from '../../../types/cities'

// components
import { Clock, Location, NoForecast } from '../../atoms'
import { getForecast } from '../../../services/weather';
import { formatWeatherRequest } from '../../../utils/parsers';


interface Props {
    selected?: string
    date: string
    city: string
    color: string
    reminderId: string
    title: string
    onClick: (prop: any) => any
}


export const Reminder: React.FC<Props> = ({ title, reminderId, date, city, color, onClick }) => {

    const cities: ICitiesResponse[] = useSelector((state: any) => state?.cities ?? [])
    const reminderCity: ICitiesResponse = cities
        .filter(cityF => city.match(new RegExp(`${cityF.Primary_city}, ${cityF.State}`, 'gi')))[0]

    const [icon, seticon] = useState('')
    const [description, setdescription] = useState('')
    
    const lat = reminderCity?.Latitude
    const lon = reminderCity?.Longitude

    useEffect(() => {
        (async () => {
            try {
                if (!lat || !lon ) throw Error('Lat and Lon is falsy')
                const data = await getForecast(lat, lon)
                const iconAndDescription = formatWeatherRequest(data?.data, new Date(date))
                seticon(iconAndDescription.iconId)
                setdescription(iconAndDescription.forecastDescription)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [cities, lat, lon, date])
    

    return (
        <Div
            desciption={description}
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
                        {!icon ? <NoForecast /> : <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />} 
                    </div>
                </div>
            </div>
        </Div>
    )
}

interface Styles {
    desciption: string
}

const Div = styled.div<Styles>`
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
            background-color: var(--forecast-background);
            justify-content: center;
            align-items: center;
            position: relative;
            pointer-events: all;

            :hover::after {
                position: absolute;
                content: '${({ desciption }) => desciption}';
                width: max-content;
                height: max-content;
                padding: 5px 10px;
                bottom: -26px;
                transition: 200ms ease-in-out;
                border-radius: 4px;
                font-size: 10px;
                left: 50%;
                transform: translateX(-50%);
                color: var(--text-on-light);
                background-color: var(--background);
            }
        }

        img {
            width: 45px;
            transition: 300ms ease-in-out;
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