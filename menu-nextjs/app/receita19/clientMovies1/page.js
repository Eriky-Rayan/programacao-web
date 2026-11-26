"use client"

import { useState } from "react"

export default function Home() {
    const [resultMovies, setResultMovies] = useState([])

    async function handleAction(formData) {
        const titleSearchKey = formData.get("titleSearchKey")
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${titleSearchKey}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
    }

    return (
        <div className="space-y-4">
            <MovieForm handleAction={handleAction}/>
            <MovieTable movies={resultMovies}/>
        </div>
    )
}

export function MovieForm({ handleAction }) {
    return (
        <form action={handleAction} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" className="border border-slate-300 rounded px-2 py-1"/>
            <button type="submit" className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer">Pesquisar</button>
        </form>
    )
}

export function MovieTable({ movies }) {
    return (
        <div>
            <div className="space-y-1">
                {movies.map((m) => <div key={m.imdbID}>{m.Title} --- {m.Year}</div>)}
            </div>
        </div>
    )
}
