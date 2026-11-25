import Link from "next/link"

export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
    const data = await res.json()

    return (
        <div>
            <div>
            {data.Search.map( (m) => (
                <div key={m.imdbID}>
                    <Link href={`/movie/${m.imdbID}`}>{m.Title} --- {m.Year}</Link>
                </div>
            ))}
            </div>
        </div>
    )
}