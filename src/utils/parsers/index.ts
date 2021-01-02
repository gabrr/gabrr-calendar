import { IWeather } from './../../types/weatherReponse';
import _ from 'lodash'

export const formatWeatherRequest = (object: IWeather | any, date: Date): { iconId: string,  forecastDescription: string } => {

    const noForecast = { iconId: '',  forecastDescription: 'No forecast yet' }

    if(_.isEmpty(object) || !date) return noForecast

    const currentDay = new Date().getDate()
    const currentMonth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()

    const dayToForecast = date.getDate()
    const monthToForecast = date.getMonth() + 1
    const yearToForecast = date.getFullYear()
    const timeToForecast = dayToForecast === currentDay ? date.getHours() : date.getHours() + 23 // IWeather has 48 hours indexed by zero.

    if (currentMonth !== monthToForecast || yearToForecast !== currentYear) return noForecast

    // the current API only forecasts for two days.
    if (dayToForecast === currentDay || dayToForecast === currentDay + 1) {
        const iconId = object.hourly[timeToForecast].weather[0].icon
        const forecastDescription = object.hourly[timeToForecast].weather[0].description

        return { iconId, forecastDescription }
    }

    return noForecast
    
}