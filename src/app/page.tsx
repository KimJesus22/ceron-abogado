import Hero from '@/components/sections/Hero'
import Sobre from '@/components/sections/Sobre'
import Servicios from '@/components/sections/Servicios'
import Tarifas from '@/components/sections/Tarifas'
import Valores from '@/components/sections/Valores'
import Testimonios from '@/components/sections/Testimonios'
import Recursos from '@/components/sections/Recursos'
import Redes from '@/components/sections/Redes'
import Contacto from '@/components/sections/Contacto'
import Newsletter from '@/components/sections/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Servicios />
      <Tarifas />
      <Valores />
      <Testimonios />
      <Recursos />
      <Redes />
      <div className="py-4 px-8 bg-white">
        <div className="max-w-[1000px] mx-auto">
          <Newsletter />
        </div>
      </div>
      <Contacto />
    </main>
  )
}
