import { formatWeatherRequest } from './../index';
import { testDescriptionAndWeather } from "../../../MOCK"

export {}

test('Return an object to display the desciprtion and icon', () => {

    const noForecast = { iconId: '',  forecastDescription: 'No forecast yet' }

    const res3 = formatWeatherRequest(testDescriptionAndWeather, new Date('1-4-2021 21:20'))

    expect(res3).toEqual(noForecast)

})