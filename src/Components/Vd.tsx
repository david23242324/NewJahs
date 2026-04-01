import { motion } from "framer-motion";
import Vd from "../assets/Newjh.mp4";

export default function VideoSection() {
  return (
    <section className="relative w-full h-[100vh] overflow-hidden font-cardo">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover 
                   blur-xl brightness-50 saturate-150 contrast-125 scale-110"
      >
        <source src={Vd} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>

      <div className="relative z-20 w-full h-full flex items-center justify-center px-24 gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            w-full max-w-[1200px] h-[85%]
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
            w-full max-w-[1200px] h-[85%]
            flex flex-col justify-center items-start
            p-12
            bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20
            shadow-lg text-white
          "
        >
          <h2 className="text-4xl font-bold mb-6">MAYORISTA?</h2>
          <p className="mb-8 text-lg leading-relaxed">
            Quieres convertirte en cliente mayorista? Claro que sí, ingresa tus datos haciendo click en el botón de formulario, una vez hayas enviado tus datos nos pondremos en contacto contigo mediante tu número de celular o correo electrónico
          </p>
          <div className="flex gap-6">
            <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold transition hover:bg-[#7a6a3f] hover:text-white">
              INFO
            </button>
            <button className="px-8 py-3 bg-white text-black rounded-lg font-semibold transition hover:bg-[#7a6a3f] hover:text-white">
              FORMULARIO
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
