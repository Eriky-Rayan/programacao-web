import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 19 • Menu principal (receita19/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita19/clientGames" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Pesquisa de Jogos via API Interna (/receita19/clientGames)
                    </Link>
                    <Link href="/receita19/api/searchMovies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Endpoint JSON (/receita19/api/searchMovies)
                    </Link>
                    <Link href="/receita19/clientMovies1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client Movies 1 (/receita19/clientMovies1)
                    </Link>
                    <Link href="/receita19/movieSearch" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movie Search (/receita19/movieSearch)
                    </Link>
                    <Link href="/receita19/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movies (/receita19/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
