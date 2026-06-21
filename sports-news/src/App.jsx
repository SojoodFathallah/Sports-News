import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import ArticleDetails from './pages/ArticleDetails'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<ArticleDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
