import { IWeather } from "./types/weatherReponse"

export const dates = ["11-29-2020", "11-30-2020", "12-1-2020", "12-2-2020", "12-3-2020", "12-4-2020", "12-5-2020", "12-6-2020", "12-7-2020", "12-8-2020", "12-9-2020", "12-10-2020", "12-11-2020", "12-12-2020", "12-13-2020", "12-14-2020", "12-15-2020", "12-16-2020", "12-17-2020", "12-18-2020", "12-19-2020", "12-20-2020", "12-21-2020", "12-22-2020", "12-23-2020", "12-24-2020", "12-25-2020", "12-26-2020", "12-27-2020", "12-28-2020", "12-29-2020", "12-30-2020", "12-31-2020", "1-1-2021", "1-2-2021",]

// 'Days of the month listed'
export const test1 = [
    '11-29-2020',
    '11-30-2020',
    '12-1-2020',
    '12-2-2020',
    '12-3-2020',
    '12-4-2020',
    '12-5-2020',
    '12-6-2020',
    '12-7-2020',
    '12-8-2020',
    '12-9-2020',
    '12-10-2020',
    '12-11-2020',
    '12-12-2020',
    '12-13-2020',
    '12-14-2020',
    '12-15-2020',
    '12-16-2020',
    '12-17-2020',
    '12-18-2020',
    '12-19-2020',
    '12-20-2020',
    '12-21-2020',
    '12-22-2020',
    '12-23-2020',
    '12-24-2020',
    '12-25-2020',
    '12-26-2020',
    '12-27-2020',
    '12-28-2020',
    '12-29-2020',
    '12-30-2020',
    '12-31-2020',
    '1-1-2021',
    '1-2-2021',
    "1-3-2021",
    "1-4-2021",
    "1-5-2021",
    "1-6-2021",
    "1-7-2021",
    "1-8-2021",
    "1-9-2021",
]

// Listing days of the current month
export const teste2 = [
    '12-1-2020',
    '12-2-2020',
    '12-3-2020',
    '12-4-2020',
    '12-5-2020',
    '12-6-2020',
    '12-7-2020',
    '12-8-2020',
    '12-9-2020',
    '12-10-2020',
    '12-11-2020',
    '12-12-2020',
    '12-13-2020',
    '12-14-2020',
    '12-15-2020',
    '12-16-2020',
    '12-17-2020',
    '12-18-2020',
    '12-19-2020',
    '12-20-2020',
    '12-21-2020',
    '12-22-2020',
    '12-23-2020',
    '12-24-2020',
    '12-25-2020',
    '12-26-2020',
    '12-27-2020',
    '12-28-2020',
    '12-29-2020',
    '12-30-2020',
    '12-31-2020',
]

export const testDescriptionAndWeather: IWeather = {
    "lat": 41.33,
    "lon": -96.94,
    "timezone": "America/Chicago",
    "timezone_offset": -21600,
    "current": {
        "dt": 1609615626,
        "sunrise": 1609595625,
        "sunset": 1609628990,
        "temp": 271.81,
        "feels_like": 268.17,
        "pressure": 1017,
        "humidity": 100,
        "dew_point": 271.81,
        "uvi": 1.93,
        "clouds": 1,
        "visibility": 10000,
        "wind_speed": 2.1,
        "wind_deg": 130,
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ]
    },
    "hourly": [
        {
            "dt": 1609614000,
            "temp": 271.81,
            "feels_like": 268.26,
            "pressure": 1017,
            "humidity": 100,
            "dew_point": 271.81,
            "uvi": 1.93,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 1.96,
            "wind_deg": 208,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609617600,
            "temp": 272.5,
            "feels_like": 268.74,
            "pressure": 1017,
            "humidity": 98,
            "dew_point": 272.26,
            "uvi": 1.5,
            "clouds": 10,
            "visibility": 10000,
            "wind_speed": 2.35,
            "wind_deg": 211,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609621200,
            "temp": 272.85,
            "feels_like": 269.36,
            "pressure": 1017,
            "humidity": 97,
            "dew_point": 272.48,
            "uvi": 0.85,
            "clouds": 16,
            "visibility": 10000,
            "wind_speed": 2,
            "wind_deg": 210,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609624800,
            "temp": 271.93,
            "feels_like": 268.55,
            "pressure": 1017,
            "humidity": 97,
            "dew_point": 271.56,
            "uvi": 0.29,
            "clouds": 14,
            "visibility": 10000,
            "wind_speed": 1.67,
            "wind_deg": 205,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609628400,
            "temp": 270.17,
            "feels_like": 266.6,
            "pressure": 1017,
            "humidity": 96,
            "dew_point": 269.69,
            "uvi": 0,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 1.61,
            "wind_deg": 180,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609632000,
            "temp": 269.53,
            "feels_like": 265.51,
            "pressure": 1017,
            "humidity": 96,
            "dew_point": 267.57,
            "uvi": 0,
            "clouds": 10,
            "visibility": 10000,
            "wind_speed": 2.14,
            "wind_deg": 178,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609635600,
            "temp": 269.19,
            "feels_like": 264.85,
            "pressure": 1017,
            "humidity": 95,
            "dew_point": 267.14,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.53,
            "wind_deg": 181,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609639200,
            "temp": 268.8,
            "feels_like": 264.24,
            "pressure": 1017,
            "humidity": 96,
            "dew_point": 266.78,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.8,
            "wind_deg": 194,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609642800,
            "temp": 268.45,
            "feels_like": 263.77,
            "pressure": 1017,
            "humidity": 96,
            "dew_point": 266.45,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.92,
            "wind_deg": 199,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609646400,
            "temp": 268.41,
            "feels_like": 263.51,
            "pressure": 1017,
            "humidity": 95,
            "dew_point": 266.35,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.21,
            "wind_deg": 204,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609650000,
            "temp": 268.61,
            "feels_like": 263.66,
            "pressure": 1016,
            "humidity": 95,
            "dew_point": 266.48,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.31,
            "wind_deg": 200,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609653600,
            "temp": 268.69,
            "feels_like": 263.8,
            "pressure": 1016,
            "humidity": 95,
            "dew_point": 266.54,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.23,
            "wind_deg": 209,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609657200,
            "temp": 268.73,
            "feels_like": 263.79,
            "pressure": 1016,
            "humidity": 95,
            "dew_point": 266.67,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.32,
            "wind_deg": 219,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609660800,
            "temp": 268.8,
            "feels_like": 264.03,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 266.81,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.1,
            "wind_deg": 214,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609664400,
            "temp": 268.81,
            "feels_like": 264.21,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 266.9,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.86,
            "wind_deg": 206,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609668000,
            "temp": 268.88,
            "feels_like": 264.24,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 267.05,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.93,
            "wind_deg": 198,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609671600,
            "temp": 268.75,
            "feels_like": 264.1,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 267.04,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.92,
            "wind_deg": 202,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609675200,
            "temp": 268.34,
            "feels_like": 264.01,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 266.7,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.4,
            "wind_deg": 204,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609678800,
            "temp": 267.94,
            "feels_like": 263.83,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 266.27,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.04,
            "wind_deg": 202,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609682400,
            "temp": 267.8,
            "feels_like": 263.36,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 266.11,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.49,
            "wind_deg": 215,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609686000,
            "temp": 268.22,
            "feels_like": 264.06,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 266.62,
            "uvi": 0.32,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.14,
            "wind_deg": 238,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609689600,
            "temp": 269.81,
            "feels_like": 265.86,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 268.43,
            "uvi": 0.87,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.11,
            "wind_deg": 245,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609693200,
            "temp": 271.17,
            "feels_like": 267.7,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 269.66,
            "uvi": 1.48,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.66,
            "wind_deg": 231,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609696800,
            "temp": 272.2,
            "feels_like": 268.56,
            "pressure": 1013,
            "humidity": 97,
            "dew_point": 270.68,
            "uvi": 1.88,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.09,
            "wind_deg": 248,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609700400,
            "temp": 272.81,
            "feels_like": 269.49,
            "pressure": 1013,
            "humidity": 97,
            "dew_point": 271.62,
            "uvi": 1.89,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 1.75,
            "wind_deg": 217,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609704000,
            "temp": 273.28,
            "feels_like": 269.44,
            "pressure": 1012,
            "humidity": 98,
            "dew_point": 272.6,
            "uvi": 1.47,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.62,
            "wind_deg": 240,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609707600,
            "temp": 273.49,
            "feels_like": 269.76,
            "pressure": 1012,
            "humidity": 97,
            "dew_point": 272.98,
            "uvi": 0.84,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.48,
            "wind_deg": 245,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609711200,
            "temp": 272.84,
            "feels_like": 269.29,
            "pressure": 1012,
            "humidity": 98,
            "dew_point": 272.17,
            "uvi": 0.31,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.12,
            "wind_deg": 226,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609714800,
            "temp": 271.63,
            "feels_like": 267.77,
            "pressure": 1012,
            "humidity": 98,
            "dew_point": 270.79,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.33,
            "wind_deg": 222,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609718400,
            "temp": 271.16,
            "feels_like": 267.04,
            "pressure": 1012,
            "humidity": 98,
            "dew_point": 270.13,
            "uvi": 0,
            "clouds": 1,
            "visibility": 10000,
            "wind_speed": 2.61,
            "wind_deg": 220,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609722000,
            "temp": 271.1,
            "feels_like": 266.74,
            "pressure": 1013,
            "humidity": 97,
            "dew_point": 269.96,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.91,
            "wind_deg": 229,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609725600,
            "temp": 271.17,
            "feels_like": 266.75,
            "pressure": 1013,
            "humidity": 97,
            "dew_point": 269.92,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.01,
            "wind_deg": 235,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609729200,
            "temp": 271.24,
            "feels_like": 267.04,
            "pressure": 1013,
            "humidity": 97,
            "dew_point": 269.85,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.72,
            "wind_deg": 233,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609732800,
            "temp": 271.36,
            "feels_like": 267.14,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 269.86,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 2.77,
            "wind_deg": 225,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609736400,
            "temp": 271.34,
            "feels_like": 266.89,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 269.78,
            "uvi": 0,
            "clouds": 0,
            "visibility": 10000,
            "wind_speed": 3.09,
            "wind_deg": 227,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609740000,
            "temp": 271.18,
            "feels_like": 266.74,
            "pressure": 1014,
            "humidity": 97,
            "dew_point": 269.55,
            "uvi": 0,
            "clouds": 6,
            "visibility": 10000,
            "wind_speed": 3.05,
            "wind_deg": 233,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609743600,
            "temp": 271.69,
            "feels_like": 266.94,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 269.87,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.55,
            "wind_deg": 255,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609747200,
            "temp": 271.31,
            "feels_like": 266.7,
            "pressure": 1014,
            "humidity": 96,
            "dew_point": 269.46,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 3.29,
            "wind_deg": 274,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609750800,
            "temp": 270.83,
            "feels_like": 266.32,
            "pressure": 1015,
            "humidity": 96,
            "dew_point": 268.74,
            "uvi": 0,
            "clouds": 79,
            "visibility": 10000,
            "wind_speed": 3.06,
            "wind_deg": 282,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609754400,
            "temp": 271.75,
            "feels_like": 266.18,
            "pressure": 1015,
            "humidity": 95,
            "dew_point": 269.3,
            "uvi": 0,
            "clouds": 81,
            "visibility": 10000,
            "wind_speed": 4.71,
            "wind_deg": 299,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609758000,
            "temp": 272.6,
            "feels_like": 267.03,
            "pressure": 1016,
            "humidity": 95,
            "dew_point": 269.89,
            "uvi": 0,
            "clouds": 73,
            "visibility": 10000,
            "wind_speed": 4.87,
            "wind_deg": 311,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609761600,
            "temp": 273.03,
            "feels_like": 267.67,
            "pressure": 1017,
            "humidity": 94,
            "dew_point": 269.98,
            "uvi": 0,
            "clouds": 66,
            "visibility": 10000,
            "wind_speed": 4.62,
            "wind_deg": 316,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609765200,
            "temp": 272.32,
            "feels_like": 267.38,
            "pressure": 1018,
            "humidity": 94,
            "dew_point": 269.31,
            "uvi": 0,
            "clouds": 55,
            "visibility": 10000,
            "wind_speed": 3.89,
            "wind_deg": 316,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609768800,
            "temp": 271.81,
            "feels_like": 266.7,
            "pressure": 1019,
            "humidity": 94,
            "dew_point": 268.82,
            "uvi": 0,
            "clouds": 28,
            "visibility": 10000,
            "wind_speed": 4.04,
            "wind_deg": 312,
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609772400,
            "temp": 271.86,
            "feels_like": 266.92,
            "pressure": 1020,
            "humidity": 94,
            "dew_point": 268.92,
            "uvi": 0.34,
            "clouds": 18,
            "visibility": 10000,
            "wind_speed": 3.8,
            "wind_deg": 310,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609776000,
            "temp": 272.66,
            "feels_like": 268.04,
            "pressure": 1020,
            "humidity": 95,
            "dew_point": 270,
            "uvi": 0.92,
            "clouds": 14,
            "visibility": 10000,
            "wind_speed": 3.53,
            "wind_deg": 293,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609779600,
            "temp": 273.89,
            "feels_like": 269.1,
            "pressure": 1020,
            "humidity": 91,
            "dew_point": 271.21,
            "uvi": 1.58,
            "clouds": 12,
            "visibility": 10000,
            "wind_speed": 3.89,
            "wind_deg": 279,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "pop": 0
        },
        {
            "dt": 1609783200,
            "temp": 274.31,
            "feels_like": 269.75,
            "pressure": 1020,
            "humidity": 90,
            "dew_point": 272.43,
            "uvi": 2,
            "clouds": 9,
            "visibility": 10000,
            "wind_speed": 3.62,
            "wind_deg": 274,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "pop": 0
        }
    ],
}