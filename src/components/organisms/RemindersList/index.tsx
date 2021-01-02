import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { hideForm, showForm } from '../../../redux/form/actions'
import { getToRouteFormat } from '../../../utils/Time'
import { ReminderHeader, Reminder } from '../../molecules'
import { IReminder } from '../../molecules/reminderHeader/helpers'


interface Props {
    selected?: string
    reminders: {
        [id: string]: IReminder
    } | null
}


export const RemindersList: React.FC<Props> = ({ reminders }) => {
    const [remindersToDelete, setremindersToDelete] = useState<string[]>([''])
    const dispatch = useDispatch()
    
    const handleClick = ({ color, date, reminderId }: any) => {
        const dateKey = getToRouteFormat(date)
        setremindersToDelete([...remindersToDelete, reminderId])

        dispatch(showForm({ dateKey, reminderId, color }))
    }

    return (
        <Div>
            <ReminderHeader />
            <div className="reminder_list">
                { reminders ? Object.entries(reminders).map(([key, data]) => {
                    return <Reminder key={key} reminderId={key} {...data} onClick={handleClick} />
                }) : <h4 className="no_reminders">No Reminders for this day, start creating one by clicking on the + icon.</h4>
            }
            </div>
            
        </Div>
    )
}

const Div = styled.div`
    margin-right: 2%;
    width: 55%;
    height: 82vh;
    overflow-y: scroll;

    .reminder_card {
        margin: 6px 0;
    }
    
`