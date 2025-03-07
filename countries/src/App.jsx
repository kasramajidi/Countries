import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Countries from "./pages/countries/Countries"
import Header from "./components/header/Header"
import DetilsCountry from "./pages/DetilsCountry/DetilsCountry"
export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/countries" element={<Countries/>}/>
        <Route path="/country/:id" element={<DetilsCountry/>}/>
      </Routes>
    </Router>
  )
}

