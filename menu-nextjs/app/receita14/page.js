import Link from "next/link"

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 14 • Menu principal (receita14/next_example/app/page.js)
            </div>
            <div>
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
            </div>
            <div className="pt-4 flex flex-wrap gap-3">
                <Link href="/receita14/novarota" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Nova Rota (/receita14/novarota)
                </Link>
                <Link href="/receita14/novarota/subrota1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Sub-rota 1 (/receita14/novarota/subrota1)
                </Link>
                <Link href="/receita14/novarota/subrota2" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Sub-rota 2 (/receita14/novarota/subrota2)
                </Link>
                <Link href="/receita14/outrarota" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Outra Rota (/receita14/outrarota)
                </Link>
            </div>
        </div>
    )
}

export function Cabecalho({ subtitulo = "Cabeçalho exportado do app/page.js" }) {
    return (
        <div>
            <h2>{subtitulo}</h2>
        </div>
    )
}
