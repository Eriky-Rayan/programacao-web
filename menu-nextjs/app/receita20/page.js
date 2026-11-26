import Link from 'next/link'

export default function Home() {
    return (
        <div className="space-y-4">
            <div className="text-sm font-semibold text-emerald-700">
                Receita 20 • Menu principal (receita20/next_example/app/page.js)
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <div className="flex flex-wrap gap-3">
                    <Link href="/receita20/clientServerMovies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client + Server Actions (/receita20/clientServerMovies)
                    </Link>
                    <Link href="/receita20/clientMovies1" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Client Movies 1 (/receita20/clientMovies1)
                    </Link>
                    <Link href="/receita20/movieSearch" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movie Search (/receita20/movieSearch)
                    </Link>
                    <Link href="/receita20/movies" className="px-3 py-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                        Movies (/receita20/movies)
                    </Link>
                </div>
            </div>
        </div>
    )
}
