export default async function Home({searchParams}){
    const {titleSearchKey = 'bagdad', yearSearchKey = '1987'} = await searchParams
    const res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=7d4badfb&s=${titleSearchKey}&y=${yearSearchKey}`)
    const data = await res.json()

    return (
        <div>
            <div>
                {data.Search.map(transformar)}                
            </div>
        </div>
    )
}

function transformar(elemento){

   return (
       <div key={elemento.imdbID}>
           <img src={elemento.Poster} alt={elemento.Title} />
           {elemento.Title} --- {elemento.Year}
       </div>
   )

}