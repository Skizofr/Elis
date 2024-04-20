import { Routes, Route } from "react-router-dom";
import { Header } from './components/header/header'
import { Footer } from "./components/footer/footer";
import { Homepage } from './pages/homePage/homepage'
import { AboutPage } from "./pages/aboutPage/aboutPage";
import { ServicePage } from './pages/servicePage/servicePage'
import './App.css'

function App() {

  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<AboutPage/>}/>
        <Route path="/service" element={<ServicePage/>}/>
      </Routes>
    </main>
    <Footer/>
    </>
  )
}

export default App
