import React from 'react'
import styled from 'styled-components'
import { ReminderHeader, Reminder } from '../../molecules'


interface Props {
    selected?: string
}


export const RemindersList: React.FC<Props> = ({ selected }) => {
    return (
        <Div>
            <ReminderHeader />
            <Reminder city="Los Angeles, CA" time="10:20 AM" color="red" />
        </Div>
    )
}

const Div = styled.div`
    margin-right: 2%;
    width: 55%;
    
`