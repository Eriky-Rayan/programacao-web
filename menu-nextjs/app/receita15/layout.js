import Link from 'next/link'

export default function Receita15Layout({ children }) {
  console.log("montando layout da Receita 15")
  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg border border-slate-200">
        <h2 className="font-bold text-lg">Menu principal (Receita 15)</h2>
        <nav className="mt-2 space-x-2 text-emerald-700 font-medium">
          <Link href="/receita15" className="hover:underline">Início (Receita 15)</Link> |{" "}
          <Link href="/receita15/novarota" className="hover:underline">Nova Rota</Link> |{" "}
          <Link href="/receita15/novarota/subrota1" className="hover:underline">Sub-rota 1</Link>
        </nav>
      </div>
      {children}
    </div>
  )
}
