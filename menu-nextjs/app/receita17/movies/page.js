export default async function Home({ searchParams }) {
    const { titleSearchKey = 'bagdad', year = '' } = await searchParams
    const apiKey = process.env.OMDB_API_KEY || 'f1cbc41e'
    const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(titleSearchKey)}&y=${encodeURIComponent(year)}`)
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
