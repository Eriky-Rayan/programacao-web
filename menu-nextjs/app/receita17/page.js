import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 17 • Menu principal (receita17/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita17/movieSearch" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Pesquisar Filmes (/receita17/movieSearch)
                    </Link>
                    <Link href="/receita17/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Lista de Filmes com Layout (/receita17/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
