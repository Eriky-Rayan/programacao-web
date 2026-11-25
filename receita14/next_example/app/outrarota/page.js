import { Cabecalho } from "../page";
import { MariaPrea, MensagemPersonalizada } from "../novarota/componentes";

export default function OutraRota(){
    return (
       <div>
          <Cabecalho subtitulo="Outra Rota utilizando componente de app/page.js" />
          <h1>Página de Outra Rota (/outrarota)</h1>
          <MariaPrea mensagem="Maria Preá sendo exibida em /outrarota com parâmetro próprio!" />
          <MensagemPersonalizada titulo="Explorando múltiplas páginas e rotas no Next.js" autor="PWEB" />
       </div>
    )
}
