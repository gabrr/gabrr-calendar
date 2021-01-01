// libraries
import React from 'react'
import styled from 'styled-components'

interface Props {
    label: string
    colorSelected: string
    setColor: any
    calllback?: (prop: any) => any
}

export const ColorsSelect: React.FC<Props> = ({ label, colorSelected = 'red', setColor, calllback }) => {

    const COLORS = ['orange', 'red', 'green', 'blue']

    const onClick = (e: React.MouseEvent<HTMLDivElement>, color: string) => {
        setColor(color)
        calllback && calllback(e)
    }


    return (
        <Div>
            <p className="label"> {label} </p>
            <div className="colors_list">
                {
                    COLORS.map((color, index) =>
                        <div
                            key={index + 'color'}
                            className={`circle cursor ${color} ${color === colorSelected ? 'selected' : ''}`}
                            onClick={(e) => onClick(e, color)}
                        ></div>
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
`