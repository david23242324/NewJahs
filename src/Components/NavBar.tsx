import Logo from "../assets/Logo2.png"
import Idioma from "../assets/IdiomaN (1).png"
import Carrito from "../assets/CarritoN (1).png"
import Perfil from "../assets/PerfilN (1).png"

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center -mr-2 py-4 space-x-16">
        
        <div className="flex-shrink-0 flex items-center">
          <img src={Logo} alt="Logo" className="h-20 w-20 object-contain" />
        </div>

        <ul className="flex items-center space-x-10 font-cardo text-lg tracking-wide text-white font-semibold">
          <li><a href="#" className="hover:text-yellow-500 transition">CATÁLOGO</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">HOMBRE</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">ACCESORIOS</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">BLOG</a></li>
        </ul>

        <div className="flex items-center space-x-6">
          <img src={Perfil} alt="Perfil" className="h-11 w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
          <img src={Carrito} alt="Carrito" className="h-11 w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
          <img src={Idioma} alt="Idioma" className="h-11 w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
        </div>

      </div>
    </nav>
  )
}
