// libraries
import React from 'react'
import styled from 'styled-components'

// components
import { Plus } from '../../atoms'
import TrashIcon from '../../atoms/Icons/trashCan'

export const ReminderHeader = () => {

    const toggleReminderForm = () => {
        document.getElementById('form_reminder')?.classList.remove('hidden')
        console.log(document.getElementById('form_reminder'))
    }

    return (
        <Div className="reminders_header">
                <div className="row">
                    <h1 className="reminder_title">
                        Reminders
                    </h1>
                    <div className="reminders_tools">
                        <button className="circle_hoverable trash">
                            <TrashIcon fill="red" />
                        </button>
                        <button className="circle_hoverable plus" onClick={toggleReminderForm}>
                            <Plus fill="black" />
                        </button>
                    </div>
                </div>
        </Div>
    )
}

const Div = styled.div`
    position: fixed;
    top: 35px;
    width: 55%;
    
    .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .reminder_title {
        
    }

    .reminders_tools {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            transform: scale(0.7);
        }

        .circle_hoverable {
            outline: none;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            margin: 0 6px;

            &.trash {
                background-color: var(--negative-background)
            }
        }
    }
`