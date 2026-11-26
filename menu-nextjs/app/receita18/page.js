import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 18 • Menu principal (receita18/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita18/clientMovies1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client Movies 1 com Tailwind (/receita18/clientMovies1)
                    </Link>
                    <Link href="/receita18/movieSearch" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movie Search (/receita18/movieSearch)
                    </Link>
                    <Link href="/receita18/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movies (/receita18/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
