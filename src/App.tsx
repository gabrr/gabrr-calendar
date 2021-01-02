// libraries
import React, { useEffect } from 'react';
import { Routes } from './routes';
import { Provider } from 'react-redux'

// functions
import store from './redux'
import { getDateFromLocalStorage } from './utils/localStorage';

const App = () => {
  
  useEffect(() => {
    getDateFromLocalStorage()
  }, [])

  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App