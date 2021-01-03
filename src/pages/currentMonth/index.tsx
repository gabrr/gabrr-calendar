// Libraries
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Constants
import { getToRouteFormat } from '../../utils/Time'

export const CurrentMonth: React.FC<any> = (props) => {
    const history = useHistory()
    
    useEffect(() => {
        history.push(`/date/${getToRouteFormat(new Date().toDateString())}`)
    }, [history])

    return <></>
}
