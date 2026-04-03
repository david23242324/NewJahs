import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { productos, type Producto } from "../data/Data";
import Pr from "../assets/Porshe5.png"

export default function Carrusel() {
  const [selected, setSelected] = useState<Producto | null>(null);
  const [index, setIndex] = useState<number>(0);

  const prevIndex = (index - 1 + productos.length) % productos.length;
  const nextIndex = (index + 1) % productos.length;

  const current = productos[index];
  const prev = productos[prevIndex];
  const next = productos[nextIndex];

  return (
    
    <section className="w-full min-h-[50vh] flex items-start justify-center overflow-hidden px-4 py-300">
      <div className="w-full max-w-7xl mx-auto flex items-start justify-center relative min-h-[600px]">
        <motion.div
          className="flex flex-col items-center justify-center text-white flex-1 mt-20"
          animate={{
            x: selected ? -20: 0,
            scale: selected ? 0.9 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
{/* CONTENEDOR GENERAL */}
<div className="w-full flex flex-col md:flex-row items-start justify-between gap-10 relative">

  {/* COLUMNA IZQUIERDA — TÍTULO + CARRUSEL */}
  <div className={`
    w-full md:w-[38%] transition-all duration-500
    ${selected ? "md:translate-x-[-20px]" : ""}
  `}>

    {/* TÍTULO */}
    <h2 className={`
      text-4xl md:text-5xl font-cardo text-[#7a6a3f] mb-12 tracking-widest transition-all duration-500
      ${selected ? "text-center md:ml-10" : "text-center"}
    `}>
      CARRUSEL
    </h2>

    {/* CARRUSEL */}
    <div className={`
      flex items-center gap-6 md:gap-10 
      mb-10 md:mb-16 w-full overflow-x-visible no-scrollbar
      transition-all duration-500
      ${selected ? "-translate-x-20 md:-translate-x-32" : ""}
    `}>

      {/* TARJETA IZQUIERDA */}
      <div
        onClick={() => setIndex(prevIndex)}
        className={`
          shrink-0 cursor-pointer transition-all duration-500 hover:-translate-y-2
          ${selected ? "w-64 md:w-80" : "w-32 md:w-48"}
        `}
      >
        <div className="w-full flex justify-center items-center 
                        shadow-[-20px_20px_40px_rgba(0,0,0,0.3)] 
                        bg-transparent rounded-xl py-6">
          <img
            src={prev.imagen}
            className={`
              object-contain transition-all duration-500
              ${selected ? "h-72 md:h-96" : "h-40 md:h-52"}
            `}
          />
        </div>

        <div className="mt-4 bg-white p-4 shadow-lg text-[#7b6f4b] rounded-lg">
          <p className="font-medium">{prev.nombre}</p>
          <p className="font-semibold">${prev.precio}</p>
        </div>
      </div>

      {/* TARJETA CENTRAL */}
      <motion.div
        key={current.id}
        onClick={() => setSelected(current)}
        className={`
          shrink-0 cursor-pointer transition-all duration-500 hover:-translate-y-2
          ${selected ? "w-40 md:w-56 opacity-40 scale-90" : "w-48 md:w-64 opacity-100 scale-100"}
        `}
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="w-full flex justify-center items-center 
                        shadow-[-15px_15px_30px_rgba(0,0,0,0.25)] 
                        bg-transparent rounded-xl py-6">
          <img
            src={current.imagen}
            className={`
              object-contain transition-all duration-500
              ${selected ? "h-48 md:h-64" : "h-52 md:h-64"}
            `}
          />
        </div>

        <div className="mt-4 bg-white p-4 shadow-md text-[#7b6f4b] rounded-lg">
          <p className="font-medium">{current.nombre}</p>
          <p className="text-xs opacity-80">New Jahs</p>
          <p className="mt-2 font-semibold">${current.precio}</p>
        </div>
      </motion.div>

      {/* TARJETA DERECHA */}
      <div
        onClick={() => setIndex(nextIndex)}
        className={`
          shrink-0 cursor-pointer transition-all duration-500 hover:-translate-y-2
          ${selected ? "w-32 md:w-48 opacity-30 scale-75" : "w-32 md:w-48 opacity-100 scale-100"}
        `}
      >
        <div className="w-full flex justify-center items-center 
                        shadow-[-10px_10px_20px_rgba(0,0,0,0.2)] 
                        bg-transparent rounded-xl py-4">
          <img
            src={next.imagen}
            className={`
              object-contain transition-all duration-500
              ${selected ? "h-40 md:h-52" : "h-40 md:h-52"}
            `}
          />
        </div>

        <div className="mt-3 bg-white p-3 shadow-md text-[#7b6f4b] rounded-lg text-xs md:text-sm">
          <p className="truncate">{next.nombre}</p>
          <p className="font-semibold">${next.precio}</p>
        </div>
      </div>

    </div>
  </div>

{/* COLUMNA DERECHA — IMAGEN DE FONDO SIEMPRE PRESENTE */}
<div
  className="
    hidden md:flex w-[40%] h-[500px]
    bg-white/10 backdrop-blur-xl rounded-2xl
    shadow-[0_20px_60px_rgba(0,0,0,0.25)]
    items-center justify-center
    relative overflow-hidden
  "
>
  <img 
    src={Pr}
    className="absolute inset-0 w-full h-full object-cover object-center scale-110"
  />

  {/* Capa suave para que combine con el panel */}
  <div className="absolute inset-0 bg-black/20" />
</div>


</div>





</motion.div>

<AnimatePresence>
  {selected && (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      transition={{ duration: 0.5 }}
      className="absolute -right-9 top-0 w-full md:w-[780px] z-50"
    >
<div className="relative w-full flex flex-col md:flex-row items-stretch">

  {/* COLUMNA IZQUIERDA: FONDO + PNG */}
  <div className="w-full md:w-[50%] flex items-center justify-center 
                  bg-white/10 backdrop-blur-xl 
                  rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
                  p-10 relative">

    <img
      src={selected.imagen}
      className="max-h-[360px] object-contain"
    />
  </div>

  {/* COLUMNA DERECHA: PANEL DE CONTROLES (NO TOCADO) */}
  <div className="w-full md:w-[50%] ml-auto bg-[#f5f5f5]
                  rounded-2xl p-6 md:p-10 
                  shadow-[0_20px_60px_rgba(0,0,0,0.25)] 
                  relative z-10">

    {/* TÍTULO */}
    <h2 className="text-2xl font-cardo tracking-wide mb-4 absolute top-16 left-8">
      {selected.nombre}
    </h2>

    {/* Descripción */}
    <p className="text-sm text-gray-500 font-light mb-6 leading-relaxed mt-20 md:mt-24">
      Saco New Jahs de última generación, tallado por los mismos dioses del olimpo
    </p>

    {/* COLOR */}
    <div className="mb-6">
      <p className="font-cardo text-lg mb-2 tracking-wide">COLOR</p>
      <div className="flex items-center gap-2">
        {["#d9c7a3", "#b89a6a", "#8a6b3f", "#4a3b2a", "#1f1a17"].map((c) => (
          <div
            key={c}
            className="w-6 h-6 rounded-sm cursor-pointer border border-gray-300"
            style={{ backgroundColor: c }}
          />
        ))}
      </div>
    </div>

    {/* SIZE */}
    <div className="mb-6">
      <p className="font-cardo text-lg mb-2 tracking-wide">SIZE</p>
      <div className="flex gap-3">
        {["S", "M", "L", "XL"].map((t) => (
          <button
            key={t}
            className="w-10 h-10 flex items-center justify-center 
                       rounded-full border border-gray-400 
                       text-sm font-medium hover:bg-black hover:text-white 
                       transition"
          >
            {t}
          </button>
        ))}
      </div>
    </div>

    {/* SLEEVE LENGTH */}
    <div className="mb-6">
      <p className="font-cardo text-lg mb-1 tracking-wide">SLEEVE LENGTH</p>
      <input 
        type="range"
        min="50"
        max="80"
        className="w-full accent-[#7b6f4b]"
      />
    </div>

    {/* CHEST */}
    <div className="mb-8">
      <p className="font-cardo text-lg mb-1 tracking-wide">CHEST</p>
      <input 
        type="range"
        min="80"
        max="120"
        className="w-full accent-[#7b6f4b]"
      />
    </div>

    {/* PRECIO + BOTONES */}
    <div className="flex items-center justify-between">
      <p className="text-lg font-semibold">${selected.precio}</p>

      <div className="flex gap-3">
        <button className="bg-[#7b6f4b] text-white px-5 py-2 text-sm tracking-wide">
          Añadir
        </button>
        <button
          className="bg-black text-white px-4 py-2 text-sm"
          onClick={() => setSelected(null)}
        >
          X
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