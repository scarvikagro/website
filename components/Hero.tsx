import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-100 py-12 text-center">
      <Image src="/logo.png" alt="Logo Scarvik" width={120} height={60} className="mx-auto mb-4" />
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Tecnologia e Intelig\u00eancia no Agro</h1>
      <p className="mb-4 text-lg">Solu\u00e7\u00f5es inovadoras para o campo</p>
      <a href="#produtos" className="bg-green-700 text-white px-6 py-3 rounded hover:bg-green-800">Conhe\u00e7a nossos produtos</a>
    </section>
  )
}
