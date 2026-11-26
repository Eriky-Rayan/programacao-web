"use client"

import { useState, useCallback, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    const [resultGames, setResultGames] = useState([])

    const handleAction = useCallback(async (formData) => {
        const titleSearchKey = formData.get("titleSearchKey") || ""
        const httpRes = await fetch(`/receita19/api/searchMovies?titleSearchKey=${encodeURIComponent(titleSearchKey)}`)
        const jsonRes = await httpRes.json()
        setResultGames(jsonRes.Search || [])
    }, [])

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Pesquisa de Jogos (API Route da Receita 19)</h1>
            <GameForm handleAction={handleAction} />
            <GameTable games={resultGames} />
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending} className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer">
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
            placeholder="Digite o título do jogo..."
            className="border border-slate-300 rounded px-2 py-1"
        />
    )
}

export const GameForm = memo(function GameForm({ handleAction }) {
    return (
        <form action={handleAction} className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <label htmlFor="idTitleSearchKey" className="font-medium">Título do Jogo</label>
            <SearchInput />
            <SubmitButton />
        </form>
    )
})

export function GameTable({ games }) {
    return (
        <div>
            <div className="space-y-1">
                {games.map((g) => (
                    <div key={g.id}>
                        {g.Title} --- {g.Year} ({g.Genre} | {g.Platform})
                    </div>
                ))}
            </div>
        </div>
    )
}
