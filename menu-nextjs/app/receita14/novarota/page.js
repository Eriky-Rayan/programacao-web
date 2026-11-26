import { MariaPrea, MensagemPersonalizada, CardInfo } from "./componentes";
import { Cabecalho } from "../page";

export default function NovaRotaHome() {
    return (
       <div className="space-y-3">
          <Cabecalho subtitulo="Cabeçalho importado do app/page.js na Nova Rota" />
          <h1 className="text-2xl font-bold">Nova Rota, Nova Página</h1>
          <MariaPrea mensagem="Morreu Maria Preá (mensagem recebida via parâmetro!)" />
          <MensagemPersonalizada titulo="Aprendendo Next.js na Receita 14" autor="Eriky Rayan" />
          <CardInfo descricao="Este componente também recebe parâmetros e renderiza HTML dinâmico." />
          <RodapeNovaRota texto="Rodapé definido em app/novarota/page.js" />
       </div>
    )
}

export function RodapeNovaRota({ texto }) {
    return (
       <footer>
          <p>{texto}</p>
       </footer>
    )
}
