export default function SubRota1Layout({ children }) {
  console.log("montando layout de /novarota/subrota1")
  return (
    <div>
      <h4>Layout específico da Sub-rota 1</h4>
      <div>{children}</div>
    </div>
  )
}
