import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { RoutesObj } from 'Routes/RoutesObj'

function App() {
  return (
    <Provider store={store}>
      <Routes>
        {RoutesObj.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.element}
            />
          )
        })}
      </Routes>
    </Provider>
  )
}

export default App
