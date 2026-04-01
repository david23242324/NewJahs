import Sc1 from "../assets/Sc1.png"
import Sc2 from "../assets/Sc2.png"
import Sc3 from "../assets/Sc3.png"
import Sc4 from "../assets/Sc4.png"
import Sc5 from "../assets/Sc5.png"

export default function SectionImagenes() {
  return (
    <section className="w-full bg-white mt-0">
      <div className="flex w-full h-[160px]">
        
        <div className="relative flex-1">
          <img 
            src={Sc1}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
        
          </div>
        </div>

        <div className="relative flex-[2]">
          <img 
            src={Sc2}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            
          </div>
        </div>
        <div className="relative flex-1">
          <img 
            src={Sc3}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            
          </div>
        </div>

        <div className="relative flex-1">
          <img 
            src={Sc4}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            
          </div>
        </div>
        <div className="relative flex-1">
          <img 
            src={Sc5}
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
          </div>
        </div>

      </div>
    </section>
  )
}
