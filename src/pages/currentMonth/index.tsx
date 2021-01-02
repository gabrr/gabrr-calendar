// Libraries
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Constants
import { CURRENT_DATE } from '../../utils/Constants'
import { getToRouteFormat } from '../../utils/Time'

export const CurrentMonth: React.FC<any> = (props) => {
    const history = useHistory()
    
    useEffect(() => {
        history.push(`/date/${getToRouteFormat(CURRENT_DATE)}`)
    }, [history])

    return <></>
}
