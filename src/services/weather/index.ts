import axios from 'axios'

const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall'

const defaultParams = `&exclude=minutely&appid=${'3b3dd784f5f359b7acd50cd9cd759870'}`

export const getForecast = async (lat: number, lon: number) => {

    const url = `${BASE_URL}?lat=${lat}&lon=${lon}&${defaultParams}`

    try {

        return await axios.get(url)

    } catch (error) {

        console.error(error)
    }
}

export const getIcon = async (iconId: string) =>
    axios.get(`http://openweathermap.org/img/wn/${iconId}@2x.png`)
        .then(data => data)
        .catch(err => console.error(err))