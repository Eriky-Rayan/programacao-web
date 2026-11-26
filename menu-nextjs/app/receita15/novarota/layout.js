import Link from 'next/link'

export default function NovaRotaLayout({ children }) {
  console.log("montando layout de /receita15/novarota")
  return (
    <section className="p-4 border border-emerald-200 bg-emerald-50/30 rounded-lg space-y-3">
      <div>
        <h3 className="font-semibold text-emerald-800">Layout da seção: Nova Rota</h3>
        <nav className="text-sm text-emerald-700">
          <Link href="/receita15/novarota" className="hover:underline">Início da Nova Rota</Link> |{" "}
          <Link href="/receita15/novarota/subrota1" className="hover:underline">Ir para Sub-rota 1</Link>
        </nav>
      </div>
      <div>{children}</div>
    </section>
  )
}
