import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 21 • Menu principal (receita21/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita21/clientServerMovies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client + Server Movies (/receita21/clientServerMovies)
                    </Link>
                    <Link href="/receita21/clientMovies1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client Movies 1 (/receita21/clientMovies1)
                    </Link>
                    <Link href="/receita21/movieSearch" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movie Search (/receita21/movieSearch)
                    </Link>
                    <Link href="/receita21/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Lista de Filmes com Links Dinâmicos (/receita21/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
