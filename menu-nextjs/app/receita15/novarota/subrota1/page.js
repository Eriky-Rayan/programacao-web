import { MariaPrea } from "../componentes";

export default function SubRota1Page() {
  return (
    <div>
      <h1 className="text-xl font-bold">Página da Sub-rota 1</h1>
      <p>Esta página herda o RootLayout, o layout de /novarota e o layout de /novarota/subrota1.</p>
      <MariaPrea />
    </div>
  )
}
