import { motion } from "framer-motion";
import Vd from "../assets/Newjh.mp4";

export default function VideoSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-cardo">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover 
        blur-xl brightness-50 saturate-150 contrast-125 scale-110"
      >
        <source src={Vd} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      <div className="relative z-20 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-24 gap-8 md:gap-12 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            w-full md:w-1/2 max-w-[600px] md:max-w-[1200px]
            rounded-3xl overflow-hidden
            transition-all duration-500
            hover:scale-[1.01]
          "
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain bg-transparent"
          >
            <source src={Vd} type="video/mp4" />
          </video>
        </motion.div>

        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          className="
            w-full md:w-1/2 max-w-[600px] md:max-w-[1200px]
            flex flex-col justify-center items-start
            p-6 md:p-10 lg:p-12
            bg-white/10 backdrop-blur-xl  
            shadow-lg text-white
          "
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            MAYORISTA?
          </h2>

          <p className="mb-6 md:mb-8 text-sm md:text-lg leading-relaxed">
            Quieres convertirte en cliente mayorista? Claro que sí, ingresa tus datos haciendo click en el botón de formulario, una vez hayas enviado tus datos nos pondremos en contacto contigo mediante tu número de celular o correo electrónico
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <button className="px-5 md:px-8 py-2 md:py-3 bg-white text-black font-semibold transition hover:bg-[#7a6a3f] hover:text-white text-sm md:text-base">
              INFO
            </button>

            <button className="px-5 md:px-8 py-2 md:py-3 bg-white text-black font-semibold transition hover:bg-[#7a6a3f] hover:text-white text-sm md:text-base">
              FORMULARIO
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}