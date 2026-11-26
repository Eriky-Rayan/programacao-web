import Link from "next/link"

const RECEITAS = [
  {
    numero: 13,
    nome: "Receita 13 - Introdução ao Next.js e Rotas",
    diretorioApp: "receita13/next_example/app",
    rotaPrincipal: "/receita13",
    subRotas: [
      { label: "/receita13 (Home)", href: "/receita13" },
      { label: "/receita13/rota1", href: "/receita13/rota1" },
      { label: "/receita13/rota2", href: "/receita13/rota2" },
    ],
  },
  {
    numero: 14,
    nome: "Receita 14 - Componentes, Parâmetros e Sub-rotas",
    diretorioApp: "receita14/next_example/app",
    rotaPrincipal: "/receita14",
    subRotas: [
      { label: "/receita14 (Home)", href: "/receita14" },
      { label: "/receita14/novarota", href: "/receita14/novarota" },
      { label: "/receita14/novarota/subrota1", href: "/receita14/novarota/subrota1" },
      { label: "/receita14/novarota/subrota2", href: "/receita14/novarota/subrota2" },
      { label: "/receita14/outrarota", href: "/receita14/outrarota" },
    ],
  },
  {
    numero: 15,
    nome: "Receita 15 - Layouts Aninhados e Links",
    diretorioApp: "receita15/next_example/app",
    rotaPrincipal: "/receita15",
    subRotas: [
      { label: "/receita15 (Home)", href: "/receita15" },
      { label: "/receita15/novarota", href: "/receita15/novarota" },
      { label: "/receita15/novarota/subrota1", href: "/receita15/novarota/subrota1" },
    ],
  },
  {
    numero: 16,
    nome: "Receita 16 - Server Components e Fetch na API OMDb",
    diretorioApp: "receita16/next_example/app",
    rotaPrincipal: "/receita16",
    subRotas: [
      { label: "/receita16 (Home)", href: "/receita16" },
      { label: "/receita16/novarota", href: "/receita16/novarota" },
      { label: "/receita16/movies", href: "/receita16/movies" },
    ],
  },
  {
    numero: 17,
    nome: "Receita 17 - Formulários de Pesquisa (next/form) e Layouts",
    diretorioApp: "receita17/next_example/app",
    rotaPrincipal: "/receita17",
    subRotas: [
      { label: "/receita17 (Home)", href: "/receita17" },
      { label: "/receita17/movieSearch", href: "/receita17/movieSearch" },
      { label: "/receita17/movies", href: "/receita17/movies" },
    ],
  },
  {
    numero: 18,
    nome: "Receita 18 - Client Components, Hooks e Tailwind CSS",
    diretorioApp: "receita18/next_example/app",
    rotaPrincipal: "/receita18",
    subRotas: [
      { label: "/receita18 (Home)", href: "/receita18" },
      { label: "/receita18/clientMovies1", href: "/receita18/clientMovies1" },
      { label: "/receita18/movieSearch", href: "/receita18/movieSearch" },
      { label: "/receita18/movies", href: "/receita18/movies" },
    ],
  },
  {
    numero: 19,
    nome: "Receita 19 - Route Handlers (API Routes) Internas",
    diretorioApp: "receita19/next_example/app",
    rotaPrincipal: "/receita19",
    subRotas: [
      { label: "/receita19 (Home)", href: "/receita19" },
      { label: "/receita19/clientGames", href: "/receita19/clientGames" },
      { label: "/receita19/api/searchMovies", href: "/receita19/api/searchMovies" },
      { label: "/receita19/clientMovies1", href: "/receita19/clientMovies1" },
      { label: "/receita19/movieSearch", href: "/receita19/movieSearch" },
      { label: "/receita19/movies", href: "/receita19/movies" },
    ],
  },
  {
    numero: 20,
    nome: "Receita 20 - Server Actions ('use server')",
    diretorioApp: "receita20/next_example/app",
    rotaPrincipal: "/receita20",
    subRotas: [
      { label: "/receita20 (Home)", href: "/receita20" },
      { label: "/receita20/clientServerMovies", href: "/receita20/clientServerMovies" },
      { label: "/receita20/clientMovies1", href: "/receita20/clientMovies1" },
      { label: "/receita20/movieSearch", href: "/receita20/movieSearch" },
      { label: "/receita20/movies", href: "/receita20/movies" },
    ],
  },
  {
    numero: 21,
    nome: "Receita 21 - Rotas Dinâmicas ([id]), SSG (generateStaticParams) e Loading",
    diretorioApp: "receita21/next_example/app",
    rotaPrincipal: "/receita21",
    subRotas: [
      { label: "/receita21 (Home)", href: "/receita21" },
      { label: "/receita21/clientServerMovies", href: "/receita21/clientServerMovies" },
      { label: "/receita21/clientMovies1", href: "/receita21/clientMovies1" },
      { label: "/receita21/movieSearch", href: "/receita21/movieSearch" },
      { label: "/receita21/movies", href: "/receita21/movies" },
      { label: "/receita21/movie/tt0038650", href: "/receita21/movie/tt0038650" },
    ],
  },
]

export default function MenuPrincipal() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h1 className="text-3xl font-bold text-slate-800">
          Menu de Receitas Next.js (13 a 21)
        </h1>
        <p className="mt-2 text-slate-600">
          Selecione na tabela abaixo a receita desejada para acessar o diretório{" "}
          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-emerald-700 font-mono text-sm">
            app
          </code>{" "}
          correspondente e navegar por todas as suas rotas e sub-rotas.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-emerald-700 text-white">
                <th className="py-3.5 px-4 font-semibold w-24">Receita</th>
                <th className="py-3.5 px-4 font-semibold">Nome da Receita</th>
                <th className="py-3.5 px-4 font-semibold">
                  Link para o Diretório <code className="font-mono">app</code>
                </th>
                <th className="py-3.5 px-4 font-semibold">Sub-rotas Disponíveis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {RECEITAS.map((rec, index) => (
                <tr
                  key={rec.numero}
                  className={
                    index % 2 === 0
                      ? "bg-white hover:bg-emerald-50/60 transition-colors"
                      : "bg-slate-50/80 hover:bg-emerald-50/60 transition-colors"
                  }
                >
                  <td className="py-4 px-4 font-bold text-slate-700">
                    #{rec.numero}
                  </td>
                  <td className="py-4 px-4 font-medium text-slate-800">
                    {rec.nome}
                  </td>
                  <td className="py-4 px-4">
                    <Link
                      href={rec.rotaPrincipal}
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm shadow-sm transition-colors"
                    >
                      <span>📂</span>
                      <span>{rec.diretorioApp}</span>
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1.5">
                      {rec.subRotas.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="px-2.5 py-1 rounded border border-slate-300 bg-white hover:border-emerald-500 hover:text-emerald-700 text-xs font-mono text-slate-700 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
