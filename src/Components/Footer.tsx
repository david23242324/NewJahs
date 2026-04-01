export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-16 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#7a6a3f]">
            NEW JAHS
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Ropa de última generación diseñada para destacar. Inspirada en el lujo, 
            creada para el día a día.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#7a6a3f]">
            Navegación
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Inicio</li>
            <li className="hover:text-white cursor-pointer">Productos</li>
            <li className="hover:text-white cursor-pointer">Colecciones</li>
            <li className="hover:text-white cursor-pointer">Contacto</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#7a6a3f]">
            Contáctanos
          </h3>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-[#1a1a1a] p-2 rounded outline-none text-sm"
            />
            <input
              type="email"
              placeholder="Correo"
              className="bg-[#1a1a1a] p-2 rounded outline-none text-sm"
            />
            <textarea
              placeholder="Mensaje"
              rows={3}
              className="bg-[#1a1a1a] p-2 rounded outline-none text-sm resize-none"
            />

            <button
              type="submit"
              className="bg-[#7a6a3f] text-white py-2 rounded hover:opacity-80 transition"
            >
              Enviar
            </button>
          </form>
        </div>

      </div>
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NEW JAHS — Todos los derechos reservados
      </div>

    </footer>
  );
}