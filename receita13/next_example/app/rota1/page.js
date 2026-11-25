import { Cabecalho, MensagemRota } from "../page"

export default function Rota1(){
    return (
        <div>
            <Cabecalho />
            <h1>Página da Rota 1</h1>
            <MensagemRota texto="Componente importado do app/page.js e exibido na Rota 1!" />
        </div>
    )
}
