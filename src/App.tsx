//import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import reactLogo from './assets/react.svg'

import './App.css'
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import About from "./pages/About";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
