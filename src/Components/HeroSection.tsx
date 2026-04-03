import Hero from "../assets/HeroSection2.png"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <img 
        src={Hero} 
        alt="Hero" 
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-white px-4 md:px-6 py-20">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 font-cardo tracking-wide"></h1>
        <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-2xl"></p>
        <div className="flex items-center gap-0 mt-6">
          <button 
            className="px-6 py-3 bg-[#7b6f4b] text-white font-semibold 
            uppercase tracking-wide 
            border-none rounded-none"
          >
            Buscar
          </button>
          <input 
            type="text"
            placeholder="Buscar productos..."
            className="w-[260px] md:w-[340px] lg:w-[420px] 
            px-4 py-3 
            bg-white/20 backdrop-blur-sm 
            text-white placeholder-white/70
            border-none rounded-none 
              outline-none"
          />

          <button
            onClick={() => {
              const section = document.getElementById("ia-section")
              if (section) section.scrollIntoView({ behavior: "smooth" })
              }}
              className="px-6 py-3 bg-[#7b6f4b] text-white font-semibold 
              uppercase tracking-wide 
              border-none rounded-none flex items-center gap-2"
              >
              IA 
            </button>
        </div>
      </div>
    </section>
  )
}
