import { HIDE_FORM, SHOW_FORM } from './contants';

interface Props {
    dateKey: string
    reminderId: string
    color: string
}
export const showForm = ({ dateKey, reminderId, color }: Props) => {
    return {
        type: SHOW_FORM,
        payload: { dateKey, reminderId, color }
    }
}

export const hideForm = () => {
    return {
        type: HIDE_FORM,
    }
}