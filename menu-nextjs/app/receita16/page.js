import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 16 • Menu principal (receita16/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita16/novarota" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Nova Rota (/receita16/novarota)
                    </Link>
                    <Link href="/receita16/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Filmes OMDb (/receita16/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
