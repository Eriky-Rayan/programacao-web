'use client';

import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';

export default function MovieInfos() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    const { data, error } = useSWR(
        id ? `http://www.omdbapi.com/?i=${id}&apikey=7d4badfb` : null,
        fetcher
    );

    if (error) return <div>Falha ao carregar as informações do filme...</div>;
    if (!data) return <div>Carregando detalhes...</div>;

    return (
        <div style={{ padding: '20px' }}>
            <h1>{data.Title} ({data.Year})</h1>
            
            {data.Poster && data.Poster !== 'N/A' ? (
                <img src={data.Poster} alt={data.Title} style={{ maxWidth: '300px', borderRadius: '8px' }} />
            ) : (
                <p>Sem pôster disponível</p>
            )}

            <p><strong>Gênero:</strong> {data.Genre}</p>
            <p><strong>Diretor:</strong> {data.Director}</p>
            <p><strong>Atores:</strong> {data.Actors}</p>
            <p><strong>Sinopse:</strong> {data.Plot}</p>
            <p><strong>Avaliação IMDb:</strong> {data.imdbRating}</p>
        </div>
    );
}

async function fetcher(url) {
    const res = await fetch(url);
    return await res.json();
}