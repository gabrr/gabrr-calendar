import React, { ReactHTMLElement } from 'react'
import styled from 'styled-components'

interface Props {
    label: string
    colorSelected: string
}

export const ColorsSelect: React.FC<Props> = ({ label, colorSelected = 'red' }) => {

    const COLORS = ['orange', 'red', 'green', 'blue']

    return (
        <Div>
            <p className="label"> {label} </p>
            <div className="colors_list">
                {
                    COLORS.map((color, index) =>
                        <div key={index + 'color'} className={`circle ${color} ${color === colorSelected ? 'selected' : ''}`}></div>
                    )
                }
            </div>
        </Div>
    )
}

const Div = styled.div`
    .label {
        font-size: 13px;
    }

    .colors_list {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .circle {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            margin: 5px 12px 0 0;
        }

        .circle.selected {
            border: 2px solid #fff;
        }
    }

    .orange {
        background-color: var(--orange);
    }
    .red {
        background-color: var(--red);
    }
    .green {
        background-color: var(--green);
    }
    .blue {
        background-color: var(--blue);
    }


`