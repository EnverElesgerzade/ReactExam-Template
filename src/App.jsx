import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Layout from './components/Layout/Layout'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App