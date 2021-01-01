import React, { AllHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends React.AllHTMLAttributes<HTMLInputElement> {
    listName: string
    options: string[]
    label: string
    ownRef: any
}

export const Select: React.FC<Props> = ({ listName, options, label, ownRef, ...rest }) => {
    return (
        <Div>
            <label>
                {label} <br />
                <input list={listName} ref={ownRef} {...rest} />
                <datalist id={listName}>
                    {options.map((option, index) => <option key={index+'option'} value={option} />)}
                </datalist>
            </label>
        </Div>
    )
}

const Div = styled.div`
    label {
        font-size: 13px;
    }

    input {
        height: 30px;
        padding: 0 10px;
        border-radius: 5px;
        margin: 5px 0;
        color: var(--text-on-light);
    }

`