import { useState } from "react";
import Carrito from "../assets/CarritoN (1).png";

import Rp1 from "../assets/Rp1.png";
import Rp2 from "../assets/Rp2.png";
import Rp3 from "../assets/Rp3.png";
import Rp4 from "../assets/Rp4.png";
import Rp5 from "../assets/Rp5.png";
import Rp6 from "../assets/Rp6.png";

export default function CtgRopa() {

  const productos = [
    { id: 1, nombre: "Saco Cyber", marca: "New Jahs", precio: "$ 60.000", img: Rp1 },
    { id: 2, nombre: "Hoodie Dark", marca: "New Jahs", precio: "$ 75.000", img: Rp2 },
    { id: 3, nombre: "Camisa Oversize", marca: "New Jahs", precio: "$ 50.000", img: Rp3 },
    { id: 4, nombre: "Pantalón Tech", marca: "New Jahs", precio: "$ 90.000", img: Rp4 },
    { id: 5, nombre: "Chaqueta Neo", marca: "New Jahs", precio: "$ 120.000", img: Rp5 },
    { id: 6, nombre: "Sweater Void", marca: "New Jahs", precio: "$ 65.000", img: Rp6 },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const next = () => {
    if (startIndex + 4 < productos.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibles = productos.slice(startIndex, startIndex + 4);

  return (
    <section className="w-full py-16">
      <h2 className="text-4xl md:text-5xl font-cardo text-center text-[#7a6a3f] mb-12 tracking-widest">
        CATALOGO
      </h2>
      <div className="max-w-6xl mx-auto px-4 relative">
        <button
          onClick={prev}
          className="absolute -left-10 top-1/2 -translate-y-1/2 bg-[#7a6a3f] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          ←
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {visibles.map((p) => (
            <div
              key={p.id}
              className="w-64 bg-white rounded-lg overflow-hidden
              shadow-[-15px_15px_30px_rgba(0,0,0,0.25)]
              transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.nombre}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <p className="text-sm font-cardo text-gray-800">
                    {p.nombre}
                  </p>
                  <h3 className="text-xs text-gray-400">
                    {p.marca}
                  </h3>
                </div>

                <div className="flex items-center justify-between">
                  <div className="bg-gray-100 px-3 py-1 rounded text-sm font-medium">
                    {p.precio}
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-[#7a6a3f] p-2 rounded transition-all duration-300 hover:scale-110 active:scale-95">
                      <img src={Carrito} className="w-4 h-4" />
                    </button>
                    <button className="bg-[#7a6a3f] p-2 rounded text-white transition-all duration-300 hover:scale-110 active:scale-95">

                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>

        <button
          onClick={next}
          className="absolute -right-10 top-1/2 -translate-y-1/2 bg-[#7a6a3f] text-white p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </section>
  );
}