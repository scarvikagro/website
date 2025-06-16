import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre" className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Sobre a Scarvik</h2>
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 md:pr-4">
          <p className="mb-4">Nossa miss\u00e3o \u00e9 impulsionar o agroneg\u00f3cio por meio de solu\u00e7\u00f5es tecnol\u00f3gicas e inteligentes. Buscamos ser refer\u00eancia em inova\u00e7\u00e3o no campo.</p>
        </div>
        <div className="md:w-1/2">
          <Image src="/about-placeholder.jpg" alt="Sobre a Scarvik" width={500} height={300} className="w-full h-auto" />
        </div>
      </div>
    </section>
  )
}
