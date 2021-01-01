import { type } from "os"

interface Props {
    type: string
    message: string
}

type ShowMessage = (props: Props) => void

export const showMessage: ShowMessage = ({ type, message }) => {
    const target = document.querySelector('#warning_badge')
    target?.classList.remove('hidden')
    setTimeout(() => {
        target?.classList.add('hidden')
    }, 1000)
}