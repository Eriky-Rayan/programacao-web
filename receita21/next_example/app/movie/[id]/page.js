import React from 'react';
import Image from 'next/image';
export const dynamicParams = true
export const revalidate = 60*60*24
export default async function Home({ params }) {
    const {id} = await params
    const movie = await fetch(`https://www.omdbapi.com/?apikey=f1cbc41e&i=${id}`).then(res => res.json())
    return (
        <div>
            <h1>{movie.Title} ({movie.Year})</h1>
            {movie.Poster && movie.Poster !== "N/A" && (
                <Image
                    src={movie.Poster}
                    alt={movie.Title}
                    width={300}
                    height={450}
                />
            )}
            <p>Director: {movie.Director}</p>
            <p>Plot: {movie.Plot}</p>

        </div>
    );
};

export async function generateStaticParams() {
    const allMovies = await fetch('https://www.omdbapi.com/?apikey=f1cbc41e&s=lady').then((res) => res.json())
    return allMovies.Search.map((movie) => ({
      id: movie.imdbID,
    }))
 }