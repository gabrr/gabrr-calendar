import { createReminder } from "./helpers"

export {}

test('Create reminder with fields title, city, date time, and color', () => {
    
    const [id] = createReminder({
        title: 'Meeting with USA President',
        city: 'Los Angeles, CA',
        date: '2021-01-02T18:30',
        color: 'red'
    })

    const data: any = window.localStorage.getItem('reminders')
    const dataParsed = JSON.parse(data)

    expect(dataParsed['2021-01-02'][id]).toEqual({
        title: 'Meeting with USA President',
        city: 'Los Angeles, CA',
        date: '2021-01-02T18:30',
        color: 'red'
    })
})