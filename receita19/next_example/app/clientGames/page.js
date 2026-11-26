"use client"

import { useState, useCallback, memo } from "react"
import { useFormStatus } from "react-dom"

export default function Home() {
    const [resultGames, setResultGames] = useState([])

    const handleAction = useCallback(async (formData) => {
        const titleSearchKey = formData.get("titleSearchKey") || ""
        const httpRes = await fetch(`/api/searchMovies?titleSearchKey=${encodeURIComponent(titleSearchKey)}`)
        const jsonRes = await httpRes.json()
        setResultGames(jsonRes.Search || [])
    }, [])

    return (
        <div>
            <GameForm handleAction={handleAction} />
            <GameTable games={resultGames} />
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" disabled={pending}>
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
        />
    )
}

export const GameForm = memo(function GameForm({ handleAction }) {
    return (
        <form action={handleAction}>
            <label htmlFor="idTitleSearchKey">Título do Jogo</label>
            <SearchInput />
            <SubmitButton />
        </form>
    )
})

export function GameTable({ games }) {
    return (
        <div>
            <div>
                {games.map((g) => (
                    <div key={g.id}>
                        {g.Title} --- {g.Year} ({g.Genre} | {g.Platform})
                    </div>
                ))}
            </div>
        </div>
    )
}
