// libraries
import React, { useEffect } from 'react'
import styled from 'styled-components'

// compoents and functions
import { Calendar } from '../../components/organisms/calendar';
import { allMonthsConstructor } from './helpers';

export const AllMonths: React.FC<any> = (props) => {

    useEffect(() => {
        const targetScroll: any = window[new Date().getFullYear()]
        window.scrollTo(0, targetScroll.offsetTop)
    }, [])

    console.log(allMonthsConstructor())

    return (
        <Div>
            {Object.entries(allMonthsConstructor()).map(([year, months]) => {
                return (
                    <div key={year+'year'}>
                        <h1 className="year_header" id={year} > {year} </h1>
                        <div className="grid">
                            {
                                Object.entries(months).map(([month, days]) => {
                                    return <Calendar days={days} key={month+'month'} month={`${month}-1-${year}`} />
                                })
                            }
                        </div>
                    </div>
                )
            })}
        </Div>
    )
}

const Div = styled.div`
    margin: 10px auto;
    width: 85%;

    h1.year_header {
        margin: 50px 0 -30px;
        top: 0;
        position: sticky;
        z-index: 3;
        padding: 10px 0 50px;
        width: 100%;
        background-image: linear-gradient(var(--background) 60%, transparent);
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        width: 100%;
    }

    .calendar {
        width: 100%;
    }

    .month_indicator {
        width: 95%;
        margin: auto;
    }
`