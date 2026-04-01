import Carrusel from "./Components/Carrusel"
import CatalogoRopa from "./Components/CtgRopa"
import Footer from "./Components/Footer"
import HeroSection from "./Components/HeroSection"
import NavBar from "./Components/NavBar"
import SectionImagenes from "./Components/ScImagenes"
import VideoSection from "./Components/Vd"



export default function App() {
  return (
    <>
    <NavBar />
    <HeroSection />
    <SectionImagenes />
    <CatalogoRopa />
    <VideoSection />
    <Carrusel />
    <Footer />
    </>
  )
}

