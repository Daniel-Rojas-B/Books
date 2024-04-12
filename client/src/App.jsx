import { useState } from 'react'
import './App.css'
import Home from './views/Home'
import Details from './views/Details'
import AddBook from './views/AddBook'
import UpdateBook from './views/UpdateBook'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books/:id/details" element={<Details />} />
          <Route path="/create" element={<AddBook />} />
          <Route path="/books/:id/update" element={<UpdateBook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
