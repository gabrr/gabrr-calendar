// libraries
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getCities } from '../../../redux/cities/actions'
import { hideForm, showForm } from '../../../redux/form/actions'
import { addReminder, updateOneReminder } from '../../../redux/reminders/actions'
import { ICitiesResponse } from '../../../types/cities'
import moment from 'moment'

// components and functions
import { Input, Select } from '../../atoms'
import { ColorsSelect } from '../../molecules'
import { IReminder } from '../../molecules/reminderHeader/helpers'
import { getLocalTime } from './helpers'

interface Props {
    title?: string
}


export const ReminderForm: React.FC<Props> = () => {
    const formProps = useSelector((state: any) => state?.formProps )
    const reminders: any = useSelector((state: any) => state?.reminders ?? null)
    const cities: ICitiesResponse[] = useSelector((state: any) => state?.cities ?? [])

    const { dateKey,  reminderId } = formProps

    const reminder: IReminder = dateKey && reminderId ? reminders[dateKey][reminderId] : {}
    
    const reminderTextInput = useRef<HTMLInputElement>()
    const date = useRef<HTMLInputElement>()
    const city = useRef<HTMLInputElement>()
    
    const disptach = useDispatch()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        closeForm()

        const newReminder = {
            title: reminderTextInput.current?.value || '',
            city: city.current?.value || '',
            date: new Date(date.current?.value || '').toLocaleString(),
            color: formProps?.color
        }

        if (dateKey && reminderId) return disptach(updateOneReminder(dateKey, reminderId, newReminder))

        disptach(addReminder(newReminder))
        
        // showMessage('Sucess');
    }

    const changeColor = (color: string) => {
        disptach(showForm({ dateKey, reminderId, color }))
    }

    const closeForm = () => {
        disptach(hideForm())
    }

    useEffect(() => {
        getCities(disptach)
    }, [disptach])

    window.moment = moment

    return (
        <Form id="form_reminder" className={`${formProps.hidden} ${formProps?.color || 'red'}`} onSubmit={handleSubmit}>
            <h1 className="title">
                {dateKey && reminderId ? 'Editing Reminder' : 'Creating Reminder'}
            </h1>
            <Input
                ownRef={reminderTextInput}
                className="reminder_text_input"
                type="input"
                defaultValue={reminder?.title}
                label="What do you want to be reminded?"
                title="Your reminder title."
                placeholder="Meeting with company ABC"
                required
            />
            <Select
                listName="cities"
                ownRef={city}
                defaultValue={reminder?.city}
                label="What's the location?"
                placeholder={'Los Angeles, CA'}
                options={cities}
                required
            />
            <Input
                ownRef={date}
                type="datetime-local"
                label="When to be reminded?"
                defaultValue={getLocalTime(new Date(reminder?.date || new Date())).slice(0, 16)}
                required
            />
            <ColorsSelect
                colorSelected={formProps?.color}
                setColor={changeColor}
                label="Colors"
            />
            <div className="buttons_row">
                <button className="save_button cursor" type="submit">Save</button>
                <button className="cancel_button cursor" type="reset" onClick={closeForm}>
                    Close
                </button>
            </div>
        </Form>
    )
}

const Form = styled.form`
    position: fixed;
    color: var(--text-on-dark);
    width: 60%;
    padding: 30px 60px;
    top: 30px;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    margin-right: 2%;
    width: 55%;
    transition: 300ms cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 15px;
    box-shadow: 10px 10px 500px 900px rgba(0, 0, 0, 0.4);

    &.hidden {
        pointer-events: none;
        transform: translateX(-50%) translateY(-110vh);
        box-shadow: none;
    }

    .title {
        margin-bottom: 40px;
        text-align: center;
    }

    .buttons_row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        max-width: 300px;
        margin: 50px auto 10px;

        button {
            padding: 15px 55px;
            border-radius: 8px;
            outline: none;
        }

        .save_button {
            background-color: rgba(255, 255, 255, 0.2);
            color: var(--text-on-dark);

            &:hover {
                background-color: rgba(255, 255, 255, 0.5);
            }
        }

        .cancel_button {
            background-color: var(--negative-background);
            color: var(--text-on-dark);

            &:hover {
                background-color: rgba(255, 0, 0, 0.3);
            }
        }
    }

    input, datalist {
        margin-bottom: 30px !important;
        outline: none;
    }

    .reminder_text_input input {
        min-width: 250px;
        width: 100%;
        max-width: 300px;
    }
    
`