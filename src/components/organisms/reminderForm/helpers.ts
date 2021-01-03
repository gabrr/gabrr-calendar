import moment from 'moment';
// import { ICitiesResponse } from './../../../types/cities';

export const hideReminderForm = () => {
    document.getElementById('form_reminder')?.classList.add('hidden')
}

export const showReminderForm = () => {
    document.getElementById('form_reminder')?.classList.remove('hidden')
}

export const getLocalTime = (date: Date) => {
    const offset = moment().utcOffset()
    return moment.parseZone(date).utcOffset(offset).format()
}

// export const sortCitiesByName = (cities: any): ICitiesResponse[] => {
//     return cities.sort((a: any, b: any) => {
//         return a.Primary_city < b.Primary_city
//     })
// }