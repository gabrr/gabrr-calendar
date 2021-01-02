// libraries
import React from 'react'
import styled from 'styled-components'

// types
import { ICitiesResponse } from '../../../types/cities'

interface Props extends React.AllHTMLAttributes<HTMLInputElement> {
    listName: string
    options: ICitiesResponse[]
    label: string
    ownRef: any
}

export const Select: React.FC<Props> = ({ listName, options, label, ownRef, ...rest }) => {
    return (
        <Div>
            <label>
                {label} <br />
                <input type="select" list={listName} ref={ownRef} {...rest} />
                <datalist id={listName}>
                    {options.map((option, index) => <option key={index+'option'} value={`${option.Primary_city}, ${option.State}`} />)}
                </datalist>
            </label>
        </Div>
    )
}

const Div = styled.div`
    label {
        font-size: 13px;
    }

    datalist {
        max-height: 400px;
    }

    input {
        height: 30px;
        padding: 0 10px;
        border-radius: 5px;
        margin: 5px 0;
        color: var(--text-on-light);
    }

`