import Logo from "../assets/Logo2.png"
import Idioma from "../assets/IdiomaN (1).png"
import Carrito from "../assets/CarritoN (1).png"
import Perfil from "../assets/PerfilN (1).png"

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3">

        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-14 md:h-20 w-auto object-contain" />
        </div>

        <ul className="hidden md:flex items-center gap-6 lg:gap-10 font-cardo text-sm md:text-lg tracking-wide text-white font-semibold">
          <li><a href="#" className="hover:text-yellow-500 transition">CATÁLOGO</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">HOMBRE</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">ACCESORIOS</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition">BLOG</a></li>
        </ul>

        <div className="flex items-center gap-3 md:gap-6">
          <img src={Perfil} alt="Perfil" className="h-8 md:h-11 w-8 md:w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
          <img src={Carrito} alt="Carrito" className="h-8 md:h-11 w-8 md:w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
          <img src={Idioma} alt="Idioma" className="h-8 md:h-11 w-8 md:w-11 object-contain cursor-pointer hover:scale-110 transition filter drop-shadow-md" />
        </div>

      </div>
    </nav>
  )
}