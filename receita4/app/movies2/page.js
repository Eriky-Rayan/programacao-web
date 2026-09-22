'use client';/*Esqueceu de avisar disso aqui professor :)*/

import useSWR from 'swr';
import Link from 'next/link';

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?i=tt3896198&apikey=7d4badfb&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <div>

            { data.Search.map((m) => (<div key={m.imdbID}> <Link href={`/movies2/infos?id=${m.imdbID}`}> {m.Title} --- {m.Year} </Link></div>  ))}

        </div>

    )    

}


async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}