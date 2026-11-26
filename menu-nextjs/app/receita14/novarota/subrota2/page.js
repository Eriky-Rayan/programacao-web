import { MariaPrea, CardInfo } from "../componentes";
import { RodapeNovaRota } from "../page";

export default function SubRota2() {
    return (
       <div className="space-y-3">
          <h1 className="text-2xl font-bold">Sub-rota 2 dentro de /novarota/subrota2</h1>
          <MariaPrea mensagem="Outra mensagem customizada para Maria Preá na Sub-rota 2!" />
          <CardInfo descricao="Página localizada no subdiretório app/novarota/subrota2." />
          <RodapeNovaRota texto="Componente importado diretamente de app/novarota/page.js" />
       </div>
    )
}
