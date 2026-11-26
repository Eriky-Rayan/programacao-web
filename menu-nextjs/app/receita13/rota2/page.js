import { Cabecalho, MensagemRota } from "../page"
import Link from "next/link"

export default function Rota2() {
    return (
        <div className="space-y-3">
            <Cabecalho />
            <h1 className="text-2xl font-bold">Página da Rota 2</h1>
            <MensagemRota texto="Componente importado do app/page.js e exibido na Rota 2!" />
            <div className="pt-2">
                <Link href="/receita13" className="text-emerald-700 underline">← Voltar para Receita 13</Link>
            </div>
        </div>
    )
}
