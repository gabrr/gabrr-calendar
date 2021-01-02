import axios from 'axios'

const BASE_URL = 'https://parseapi.back4app.com/classes/US_Zip_Code'

const defaultParams = '?order=-estimated_population&excludeKeys=County,US_Zip_Code,Area_codes,Unacceptable_cities,Acceptable_cities,Type'

const headers = { 
    "X-Parse-Application-Id": "aE79wHM9EudKOTLWVaIJ1hR0hygU4CAVGvGfetjP",
    "X-Parse-Master-Key": "An2S02k3ly1LioZ0AQaKbKsafGnIe8IOrXTooFSn"
}


export const getUSACities = async () => {
    return axios.get(BASE_URL+defaultParams, { headers })
        .then(data => data)
        .catch(err => console.error(err))
}