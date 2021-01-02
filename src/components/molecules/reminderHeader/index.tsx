// libraries
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { showForm } from '../../../redux/form/actions'

// components
import { Plus } from '../../atoms'
import TrashIcon from '../../atoms/Icons/trashCan'

interface Props {
    deleteMode: () => void
    isDeleteMode: boolean
    deleteReminders: () => void
    remindersToDelete: string[]
    deleteAllReminders: () => void
}


export const ReminderHeader: React.FC<Props> = ({ deleteMode, isDeleteMode, deleteReminders, remindersToDelete, deleteAllReminders }) => {

    const dispatch = useDispatch()


    const showReminderForm = () => {
        dispatch(showForm({ color: 'red' }))
    }

    return (
        <Div className="reminders_header">
                <div className="row">
                    <h1 className="reminder_title">
                        Reminders
                    </h1>
                    <div className="reminders_tools">
                        <button className="circle_hoverable cursor trash" onClick={deleteMode}>
                            <TrashIcon fill="red" />
                        </button>
                        <button className="circle_hoverable cursor plus" onClick={showReminderForm}>
                            <Plus fill="black" />
                        </button>
                    </div>
                </div>
                {
                    isDeleteMode && <> 
                        <div className="row deletion_row">
                            <button className="cursor delete delete_reminders" onClick={deleteReminders}> Delete {remindersToDelete.length - 1} </button>
                            <button className="cursor delete delete_all_reminders" onClick={deleteAllReminders} >Delete all reminders</button>
                            <button className="cursor cancel_deleting delete" onClick={deleteMode}>Cancel</button>
                        </div>
                    </>
                }
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
        align-items: center;
        justify-content: space-between;
    }

    .deletion_row {
        justify-content: flex-start;
    }

    .delete {
        color: var(--negative);
        background-color: transparent;
        font-size: 14px;
        font-weight: 600;
        margin: 10px 50px 0 0;

        &:hover {
            text-decoration: underline;
        }
    }

    .cancel_deleting {
        color: var(--text-on-light);
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
                background-color: #ffebeb;
                transition: background-color 200ms ease-in-out;

                &:hover {
                    background-color: var(--negative-background);
                }
            }

            &.plus {
                background-color: var(--hoverable-background);
                transition: background-color 200ms ease-in-out;

                &:hover {
                    background-color: var(--hovered-background);
                }
            }
        }
    }
`