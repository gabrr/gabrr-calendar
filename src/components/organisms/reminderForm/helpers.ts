export const hideReminderForm = () => {
    document.getElementById('form_reminder')?.classList.add('hidden')
}

export const showReminderForm = () => {
    document.getElementById('form_reminder')?.classList.remove('hidden')
}