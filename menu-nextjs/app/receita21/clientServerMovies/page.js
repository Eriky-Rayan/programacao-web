"use client"

import { searchMovies } from "../actions/movieActions"
import Form from "next/form"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
    const [data, setData] = useState({})

    async function handleAction(formData) {
        const res = await searchMovies(formData)
        setData(res)
    }

    return (
        <div className="space-y-4">
            <MovieForm actionHandler={handleAction}/>
            {data.Search && <MovieTable movies={data.Search}/>}
        </div>
    )
}

export function MovieForm({ actionHandler }) {
    return (
        <Form action={actionHandler} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" className="border border-slate-300 rounded px-2 py-1"/>
            <button type="submit" className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer">Pesquisar</button>
        </Form>
    )
}

export function MovieTable({ movies }) {
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
