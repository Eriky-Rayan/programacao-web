"use client"

import { useState, useCallback, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    console.log("Renderizando Home")
    const [resultMovies, setResultMovies] = useState([])

    const handleAction = useCallback(async (formData) => {
        const titleSearchKey = formData.get("titleSearchKey")
        if (!titleSearchKey) return
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=f1cbc41e&s=${encodeURIComponent(titleSearchKey)}`)
        const jsonRes = await httpRes.json()
        setResultMovies(jsonRes.Search || [])
    }, [])

    return (
        <div className="min-h-screen bg-slate-100 py-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-slate-800 text-center">
                    Pesquisa de Filmes (OMDb)
                </h1>
                <MovieForm handleAction={handleAction} />
                <MovieTable movies={resultMovies} />
            </div>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            disabled={pending}
            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
            {pending ? "Pesquisando..." : "Pesquisar"}
        </button>
    )
}

function SearchInput() {
    const [searchKey, setSearchKey] = useState("")
    return (
        <input
            id="idTitleSearchKey"
            name="titleSearchKey"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Digite o título do filme e tecle Enter..."
            className="w-full flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
        />
    )
}

export const MovieForm = memo(function MovieForm({ handleAction }) {
    console.log("Renderizando MovieForm")

    return (
        <form
            action={handleAction}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col sm:flex-row items-center gap-4"
        >
            <label
                htmlFor="idTitleSearchKey"
                className="font-medium text-slate-700 whitespace-nowrap"
            >
                Título
            </label>
            <SearchInput />
            <SubmitButton />
        </form>
    )
})

export function MovieTable({ movies }) {
    console.log("Renderizando MovieTable")
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {movies.length === 0 ? (
                <p className="p-6 text-center text-slate-500">
                    Nenhum filme listado. Faça uma pesquisa acima!
                </p>
            ) : (
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-800 text-white">
                            <th className="py-3 px-4 font-semibold">Pôster</th>
                            <th className="py-3 px-4 font-semibold">Título</th>
                            <th className="py-3 px-4 font-semibold">Ano</th>
                            <th className="py-3 px-4 font-semibold">Tipo</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {movies.map((m) => (
                            <tr
                                key={m.imdbID}
                                className="hover:bg-slate-50 transition-colors"
                            >
                                <td className="py-3 px-4">
                                    {m.Poster && m.Poster !== "N/A" ? (
                                        <img
                                            src={m.Poster}
                                            alt={m.Title}
                                            className="w-12 h-16 object-cover rounded shadow-sm"
                                        />
                                    ) : (
                                        <span className="text-xs text-slate-400">
                                            Sem pôster
                                        </span>
                                    )}
                                </td>
                                <td className="py-3 px-4 font-medium text-slate-800">
                                    {m.Title}
                                </td>
                                <td className="py-3 px-4 text-slate-600">
                                    {m.Year}
                                </td>
                                <td className="py-3 px-4 text-slate-600 capitalize">
                                    {m.Type}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}
