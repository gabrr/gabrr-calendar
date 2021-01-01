// libraries
import React, { useRef, useState } from 'react'
import styled from 'styled-components'

// components and functions
import { Input, Select } from '../../atoms'
import { ColorsSelect } from '../../molecules'
import { createReminder } from '../../molecules/reminderHeader/helpers'
import { hideReminderForm } from './helpers'


interface Props {
    title?: string
}


export const ReminderForm: React.FC<Props> = ({ title = 'Editing Reminder',  }) => {

    const [color, setcolor] = useState('red')
    const [hidden, sethidden] = useState('hidden')
    
    const reminderTextInput = useRef<HTMLInputElement>()
    const date = useRef<HTMLInputElement>()
    const city = useRef<HTMLInputElement>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        createReminder({
            title: reminderTextInput.current?.value || '',
            city: city.current?.value || '',
            date: date.current?.value || '',
            color
        })

        // showMessage('Sucess');
    }

    return (
        <Form id="form_reminder" className={`${hidden} ${color}`} onSubmit={handleSubmit}>
            <h1 className="title">
                {title}
            </h1>
            <Input
                ownRef={reminderTextInput}
                className="reminder_text_input"
                type="input"
                label="What do you want to be reminded?"
                title="Your reminder title."
                placeholder="Meeting with company ABC"
                required
            />
            <Select
                listName="cities"
                ownRef={city}
                label="What's the location?"
                placeholder={'Los Angeles, CA'}
                options={['Los Angeles, CA', 'San Francisco, CA', 'Washington, DC', 'New York, NY']}
                required
            />
            <Input
                ownRef={date}
                type="datetime-local"
                label="When to be reminded?"
                defaultValue={new Date().toISOString().slice(0, 16)}
                required
            />
            <ColorsSelect
                calllback={() => sethidden('')}
                colorSelected={color}
                setColor={setcolor}
                label="Colors"
            />
            <div className="buttons_row">
                <button className="save_button" type="submit">Save</button>
                <button className="cancel_button" onClick={hideReminderForm}>
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
        }

        .cancel_button {
            background-color: var(--negative-background);
            color: var(--text-on-dark);
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