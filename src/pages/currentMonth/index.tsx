// Libraries
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// Constants
import { CURRENT_DATE } from '../../utils/Constants'

export const CurrentMonth: React.FC<any> = (props) => {
    const history = useHistory()
    
    useEffect(() => {
        history.push(`/date/${CURRENT_DATE}`)
    }, [history])

    return <></>
}
