export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="mb-2">
          <a href="https://linkedin.com/scarvik" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
        <p className="mb-2">contato@scarvik.com</p>
        <p>&copy; {new Date().getFullYear()} Scarvik. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
