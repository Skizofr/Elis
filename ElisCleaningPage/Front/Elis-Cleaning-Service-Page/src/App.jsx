import { Routes, Route } from "react-router-dom";
import {HeaderLogic} from './components/header/header'
import { Footer } from "./components/footer/footer";
import { Homepage } from "./pages/homePage/homePage";
import { AboutPage } from "./pages/aboutPage/aboutPage";
import { ServicePage } from "./pages/servicePage/servicePage";
import './App.css'

function App() {

  return (
    <>
    <HeaderLogic/>
    <main>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/service" element={<AboutPage/>}/>
        <Route path="/contact" element={<ServicePage/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
