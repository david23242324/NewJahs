import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productos, type Producto } from "../data/Data";

export default function Carrusel() {
  const [selected, setSelected] = useState<Producto | null>(null);
  const [index, setIndex] = useState<number>(0);

  const prevIndex = (index - 1 + productos.length) % productos.length;
  const nextIndex = (index + 1) % productos.length;

  const current = productos[index];
  const prev = productos[prevIndex];
  const next = productos[nextIndex];

  return (
    
    <section className="w-full min-h-screen flex items-center justify-center overflow-hidden px-4">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-center relative">
        <motion.div
          className="flex flex-col items-center justify-center text-white flex-1 mt-20"
          animate={{
            x: selected ? -200: 0,
            scale: selected ? 0.9 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >

        <h2 className="text-4xl md:text-5xl font-cardo text-center text-[#7a6a3f] mb-12 tracking-widest">
        CARRUSEL
        </h2>

         <div className="flex items-center justify-center gap-4 md:gap-10 mb-10 md:mb-16 flex-wrap">

  {/* CARD IZQUIERDA */}
  <div
    onClick={() => setIndex(prevIndex)}
    className="w-32 md:w-48 bg-white rounded-lg overflow-hidden
    shadow-[-15px_15px_30px_rgba(0,0,0,0.25)]
    opacity-60 cursor-pointer transition-all duration-300 hover:-translate-y-2"
  >
    <div className="w-full h-40 md:h-52 overflow-hidden">
      <img
        src={prev.imagen}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-2 md:p-3 text-black text-xs md:text-sm">
      <p className="truncate">{prev.nombre}</p>
      <p className="font-semibold">${prev.precio}</p>
    </div>
  </div>

  {/* CARD PRINCIPAL */}
  <motion.div
    key={current.id}
    onClick={() => setSelected(current)}
    className="w-48 md:w-64 bg-white rounded-lg overflow-hidden
    shadow-[-20px_20px_40px_rgba(0,0,0,0.3)]
    cursor-pointer transition-all duration-300 hover:-translate-y-2"
    initial={{ scale: 0.85, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
  >
    <div className="w-full h-52 md:h-64 overflow-hidden">
      <img
        src={current.imagen}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-3 md:p-4 text-black">
      <p className="font-medium">{current.nombre}</p>
      <p className="text-xs text-gray-500">New Jahs</p>
      <p className="mt-2 font-semibold">${current.precio}</p>
    </div>
  </motion.div>

  {/* CARD DERECHA */}
  <div
    onClick={() => setIndex(nextIndex)}
    className="w-32 md:w-48 bg-white rounded-lg overflow-hidden
    shadow-[-15px_15px_30px_rgba(0,0,0,0.25)]
    opacity-60 cursor-pointer transition-all duration-300 hover:-translate-y-2"
  >
    <div className="w-full h-40 md:h-52 overflow-hidden">
      <img
        src={next.imagen}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-2 md:p-3 text-black text-xs md:text-sm">
      <p className="truncate">{next.nombre}</p>
      <p className="font-semibold">${next.precio}</p>
    </div>
  </div>
</div>

{/* FLECHAS */}
<div className="flex gap-10 md:gap-16 mt-6 text-2xl md:text-3xl text-[#7a6a45]">
  <button
    onClick={() => setIndex(prevIndex)}
    className="hover:scale-125 transition"
  >
    ←
  </button>
  <button
    onClick={() => setIndex(nextIndex)}
    className="hover:scale-125 transition"
  >
    →
  </button>
</div>
</motion.div>

<AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.5 }}
      className="absolute md:static 
      w-full md:w-[650px] 
      mt-10 md:mt-0 
      bg-[#f5f5f5] rounded-2xl p-6 md:p-10
      shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">

        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={selected.imagen}
            className="max-h-[220px] md:max-h-[320px] object-contain"
          />
        </div>

        {/* INFO */}
        <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {selected.nombre}
            </h2>

            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 leading-relaxed">
              Saco New Jahs de última generación, tallado por los mismos dioses del olimpo
            </p>

            <p className="font-semibold mb-2">Talla:</p>
            <div className="flex gap-2 mb-4">
              {["S", "M", "L", "XL"].map((t) => (
                <div
                  key={t}
                  className="px-2 md:px-3 py-1 border bg-black text-white cursor-pointer text-xs md:text-sm"
                >
                  {t}
                </div>
              ))}
            </div>

            <p className="font-semibold mb-2">Color:</p>
            <div className="flex gap-2 mb-4 md:mb-6">
              <div className="w-5 h-5 md:w-6 md:h-6 bg-red-500"></div>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500"></div>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500"></div>
              <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-base md:text-lg font-semibold">
              ${selected.precio}
            </p>

            <div className="flex gap-2 md:gap-3">
              <button className="bg-[#7a6a45] text-white px-4 md:px-5 py-2 text-sm">
                Añadir
              </button>
              <button
                className="bg-[#7a6a45] text-white px-3 md:px-4 py-2 text-sm"
                onClick={() => setSelected(null)}
              >
                + Info
              </button>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  )}
</AnimatePresence>
      </div>
    </section>
  );
}