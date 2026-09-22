import { MariaPrea } from "./componentes";
import { Print } from "../page";
export default function NovaRotaHome(){

   return (
    <html>
    <body>
      <div>
         <h1>Nova Rota, Nova Página</h1>
         <MariaPrea/>
         <Print String={"Essa mensagem veio por parametro!"}></Print>
      </div>
    </body>
    </html>
   )
}