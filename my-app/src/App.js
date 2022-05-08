import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { RoutesObj } from 'Routes/RoutesObj'

function App() {
  return (
    <Provider store={store}>
    <Router>
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
    </Router>
    </Provider>
  )
}

export default App
