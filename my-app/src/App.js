import React from 'react'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import RouteApp from 'Routes/RoutesObj'

function App() {
  return (
    <Provider store={store}>
      <RouteApp />
    </Provider>
  )
}

export default App
