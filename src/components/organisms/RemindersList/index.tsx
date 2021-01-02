//  libraries
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import _ from 'lodash'

// components and functions
import { ReminderHeader, Reminder } from '../../molecules'
import { showForm } from '../../../redux/form/actions'
import { deleteReminders } from '../../../redux/reminders/actions'
import { getToRouteFormat } from '../../../utils/Time'
import { IReminder } from '../../molecules/reminderHeader/helpers'
import { sortReminders } from './helpers'


interface Props {
    selected: string
    reminders: any
}


export const RemindersList: React.FC<Props> = ({ reminders, selected }) => {
    const [deleteMode, setdeleteMode] = useState(false)
    const [remindersToDelete, setremindersToDelete] = useState<string[]>([''])
    const dispatch = useDispatch()
    
    const handleClick = ({ color, date, reminderId }: any) => {
        const dateKey = getToRouteFormat(date)
        if(!deleteMode) return dispatch(showForm({ dateKey, reminderId, color }))
        setremindersToDelete([...remindersToDelete, reminderId])
        fadeReminderCard(reminderId)
    }

    const fadeReminderCard = (reminderId: string) => {
        if(!reminderId) return document.querySelectorAll('.reminder_card')
            .forEach(reminderCard => reminderCard.classList.remove('fade'))
            
        const reminder = document.getElementById(reminderId)
        reminder?.classList.add('fade')
    }


    const setJunggleAnimation = () => {        
        const allReminders = document.querySelectorAll('.reminder_card')
        if (deleteMode) {
            allReminders.forEach(reminderCard => reminderCard.classList.remove('junggleMode'))
            setdeleteMode(false)
            return fadeReminderCard('')
        }

        allReminders.forEach(reminderCard => reminderCard.classList.add('junggleMode'))
        setremindersToDelete([''])
        setdeleteMode(true)
    }

    const deleteAllReminders = () => {
        const allReminders: string[] = [''] 
        reminders && Object.entries(reminders).forEach(([key, data]) => allReminders.push(key) )
        setremindersToDelete(allReminders)
        deleteReminder()
        setdeleteMode(false)
    }

    const deleteReminder = () => {
        setdeleteMode(false)
        dispatch(deleteReminders(getToRouteFormat(selected), remindersToDelete))
    }

    return (
        <Div>
            <ReminderHeader
                remindersToDelete={remindersToDelete}
                isDeleteMode={deleteMode}
                deleteMode={setJunggleAnimation}
                deleteReminders={deleteReminder}
                deleteAllReminders={deleteAllReminders}
            />
            <div className="reminder_list">
                { !_.isEmpty(reminders) ? Object.entries(sortReminders(reminders)).map(([key, data]: any) => {
                    return <Reminder
                                key={key}
                                reminderId={key}
                                city={data.city}
                                color={data.color}
                                title={data.title}
                                date={data.date}
                                onClick={handleClick}
                            />
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
        margin: 6px 0 0 5px;
    }

    .no_reminders {
        margin-top: 100px;
    }
    
`