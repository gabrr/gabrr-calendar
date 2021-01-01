// libraries
import React from 'react'
import styled from 'styled-components'

interface Props extends React.AllHTMLAttributes<HTMLInputElement> {
    label?: string
    ownRef?: any
    type: string
}

export const Input: React.FC<Props> = ({ label = '', className, ownRef, type, ...rest }) => {
    return (
        <Div className={className}>
            <label>
                {label}<br/>
                <input maxLength={30} type={type} {...rest} ref={ownRef} />
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