import { getUSACities } from "../../services/cities"
import { GET_CITIES } from "./constants"

export const getCities = (dispatch: any) => {
        getUSACities()
            .then(({ data }: any) => dispatch({ type: GET_CITIES, payload: data.results }))
            .catch(console.error);
}