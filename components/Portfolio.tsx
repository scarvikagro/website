export default function Portfolio() {
  const items = [
    { title: 'Projeto A', description: 'Resultados expressivos no manejo de culturas.' },
    { title: 'Projeto B', description: 'Redu\u00e7\u00e3o de custos com solu\u00e7\u00f5es integradas.' },
    { title: 'Projeto C', description: 'Aumento de produtividade comprovado.' },
  ]
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">Casos de Sucesso</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ title, description }) => (
          <div key={title} className="border p-4 rounded shadow-sm">
            <h3 className="font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="text-green-700 hover:underline">Ver mais</a>
      </div>
    </section>
  )
}
