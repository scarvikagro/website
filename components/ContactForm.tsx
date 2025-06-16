'use client'
import { FormEvent, useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    console.log('Formul\u00e1rio enviado:', form)
  }

  return (
    <section id="contato" className="py-12 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-8">Fale Conosco</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto grid gap-4 px-4">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          required
          minLength={2}
          maxLength={100}
          value={form.nome}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <textarea
          name="mensagem"
          placeholder="Mensagem"
          required
          minLength={10}
          maxLength={500}
          value={form.mensagem}
          onChange={handleChange}
          className="border p-2 rounded h-32"
        />
        <button type="submit" className="bg-green-700 text-white py-2 rounded hover:bg-green-800">
          Enviar
        </button>
      </form>
    </section>
  )
}
