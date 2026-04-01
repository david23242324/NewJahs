import Hero from "../assets/HeroSection2.png"

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
      
      <img 
        src={Hero} 
        alt="Hero" 
        className="absolute inset-0 w-full h-screen object-cover object-center"
      />

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-cardo">
        </h1>
        <p className="text-lg md:text-xl mb-6">
        </p>
      </div>
    </section>
  )
}
