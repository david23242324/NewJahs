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
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 font-cardo tracking-wide">
        </h1>
        <p className="text-sm md:text-lg lg:text-xl mb-6 max-w-2xl">
        </p>
        <button className="bg-[#7a6a45] text-white px-6 py-3 rounded-md text-sm md:text-base hover:scale-105 transition">
        </button>
      </div>
    </section>
  )
}