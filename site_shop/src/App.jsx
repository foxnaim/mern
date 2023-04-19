import React from "react"
import IndexPage from "./pages/IndexPage"
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./pages/LoginPage"
import Layout from './components/Layout'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
