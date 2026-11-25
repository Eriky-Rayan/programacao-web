import { Cabecalho, MensagemRota } from "../page"

export default function Rota2(){
    return (
        <div>
            <Cabecalho />
            <h1>Página da Rota 2</h1>
            <MensagemRota texto="Componente importado do app/page.js e exibido na Rota 2!" />
        </div>
    )
}
