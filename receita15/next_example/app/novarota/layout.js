import Link from 'next/link'

export default function NovaRotaLayout({ children }) {
  console.log("montando layout de /novarota")
  return (
    <section>
      <div>
        <h3>Layout da seção: Nova Rota</h3>
        <nav>
          <Link href="/novarota">Início da Nova Rota</Link> |{" "}
          <Link href="/novarota/subrota1">Ir para Sub-rota 1</Link>
        </nav>
      </div>
      <div>{children}</div>
    </section>
  )
}
