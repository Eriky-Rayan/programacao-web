import Link from "next/link"

export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad' } = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const data = await res.json()
    const movies = data?.Search || []

    return (
        <div>
            <div className="space-y-1">
                {movies.map((m) => (
                    <div key={m.imdbID}>
                        <Link href={`/receita21/movie/${m.imdbID}`} className="text-emerald-700 hover:underline">
                            {m.Title} --- {m.Year}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
