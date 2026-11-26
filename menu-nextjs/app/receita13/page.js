import Link from "next/link"

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 13 • Menu principal (receita13/next_example/app/page.js)
            </div>
            <div>
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
            </div>
            <div className="pt-4 flex gap-3">
                <Link href="/receita13/rota1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Ir para Rota 1 (/receita13/rota1)
                </Link>
                <Link href="/receita13/rota2" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                    Ir para Rota 2 (/receita13/rota2)
                </Link>
            </div>
        </div>
    )
}

export function Cabecalho() {
    return (
        <div>
            <h2>Cabeçalho compartilhado do app/page.js</h2>
        </div>
    )
}

export function MensagemRota({ texto }) {
    return (
        <div>
            <p>{texto}</p>
        </div>
    )
}
