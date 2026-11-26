import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "Menu Next.js - Receitas 13 a 21 (PWEB)",
  description: "Implementação unificada em Next.js com menu e rotas para as Receitas 13 a 21",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col">
        <header className="bg-emerald-700 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="text-lg font-bold tracking-wide hover:text-emerald-100 transition-colors"
              >
                PWEB • Menu Next.js (Receitas 13 ~ 21)
              </Link>
            </div>
            <nav className="flex flex-wrap items-center gap-2 text-sm">
              <Link
                href="/"
                className="px-3 py-1.5 rounded-md bg-emerald-800 hover:bg-emerald-900 font-medium transition-colors"
              >
                🏠 Menu Principal
              </Link>
              {[13, 14, 15, 16, 17, 18, 19, 20, 21].map((num) => (
                <Link
                  key={num}
                  href={`/receita${num}`}
                  className="px-2.5 py-1 rounded hover:bg-emerald-600 transition-colors"
                >
                  R{num}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-slate-800 text-slate-300 text-center py-4 text-sm mt-auto">
          Programação Web (DCT1109) — Menu Unificado Next.js (Receitas 13 a 21)
        </footer>
      </body>
    </html>
  )
}
