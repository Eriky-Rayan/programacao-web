import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <div className="space-y-3">
                <h1 className="text-2xl font-bold">
                    Viva Santana!
                </h1>
                <Link href="/receita15/novarota" className="text-emerald-700 underline">Rota1 (next/link)</Link> <br/><br/>
                <a href="/receita15/novarota" className="text-emerald-700 underline">Rota 1, jeito antigo (&lt;a&gt;)</a>
            </div>
        </div>
    )
}
