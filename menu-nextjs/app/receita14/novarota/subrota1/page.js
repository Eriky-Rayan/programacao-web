import { MariaPrea, MensagemPersonalizada } from "../componentes";
import { RodapeNovaRota } from "../page";
import { Cabecalho } from "../../page";

export default function SubRota1() {
    return (
       <div className="space-y-3">
          <Cabecalho subtitulo="Sub-rota 1 usando componente do app/page.js" />
          <h1 className="text-2xl font-bold">Sub-rota 1 dentro de /novarota/subrota1</h1>
          <MariaPrea mensagem="Maria Preá chamada dentro da Sub-rota 1!" />
          <MensagemPersonalizada titulo="Componente reutilizado em subdiretório" autor="Receita 14" />
          <RodapeNovaRota texto="Reutilizando o componente RodapeNovaRota escrito em novarota/page.js" />
       </div>
    )
}
