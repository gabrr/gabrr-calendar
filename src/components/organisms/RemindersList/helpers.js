export const sortReminders = (reminders) => {
    const result = {}

    const filtered = Object.entries(reminders).sort(([key, data1], [key2, data2]) => {
        return new Date(data1.date) - new Date(data2.date)
    })

    for (let key of filtered) {
        result[key[0]] = key[1]
    }

    return result
}