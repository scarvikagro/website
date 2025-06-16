import { IoLeafOutline } from 'react-icons/io5'
import { BsGraphUp } from 'react-icons/bs'
import { MdSensors } from 'react-icons/md'

const services = [
  { icon: IoLeafOutline, title: 'BI Agr\u00edcola', description: 'An\u00e1lise de dados para melhores decis\u00f5es.' },
  { icon: MdSensors, title: 'Identifica\u00e7\u00e3o de Pragas', description: 'Monitoramento inteligente de culturas.' },
  { icon: BsGraphUp, title: 'Solu\u00e7\u00f5es sob medida', description: 'Projetos personalizados para o seu neg\u00f3cio.' },
]

export default function Services() {
  return (
    <section id="produtos" className="bg-gray-50 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">Servi\u00e7os</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
        {services.map(({ icon: Icon, title, description }) => (
          <div key={title} className="bg-white p-6 shadow rounded text-center">
            <Icon className="text-4xl mx-auto mb-4" />
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
