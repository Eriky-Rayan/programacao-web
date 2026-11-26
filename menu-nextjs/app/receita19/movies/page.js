export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad' } = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const data = await res.json()
    const movies = data?.Search || []

    return (
        <div>
            <div className="space-y-1">
                {movies.map((m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>)}
            </div>
        </div>
    )
}
