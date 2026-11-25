export default async function Home({ searchParams }) {
    const {
        titleSearchKey = 'bagdad',
        type = '',
        year = '',
        y = '',
        page = '1'
    } = await searchParams

    const releaseYear = year || y
    const apiKey = process.env.OMDB_API_KEY || 'f1cbc41e'
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(titleSearchKey)}&type=${encodeURIComponent(type)}&y=${encodeURIComponent(releaseYear)}&page=${encodeURIComponent(page)}`

    const res = await fetch(url)
    const data = await res.json()
    const movies = data?.Search || []

    return (
        <div>
            <h1>Resultados para: {titleSearchKey}</h1>
            <div>
                {movies.length > 0 ? (
                    movies.map((m) => (
                        <div key={m.imdbID} style={{ marginBottom: '20px' }}>
                            <h3>{m.Title} --- {m.Year} ({m.Type})</h3>
                            {m.Poster && m.Poster !== 'N/A' ? (
                                <img src={m.Poster} alt={`Poster de ${m.Title}`} width={150} />
                            ) : (
                                <p>Poster indisponível</p>
                            )}
                        </div>
                    ))
                ) : (
                    <p>Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    )
}
