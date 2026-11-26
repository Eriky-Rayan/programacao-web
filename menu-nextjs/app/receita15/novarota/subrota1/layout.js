export default function SubRota1Layout({ children }) {
  console.log("montando layout de /receita15/novarota/subrota1")
  return (
    <div className="p-4 border border-slate-300 bg-white rounded-lg space-y-2">
      <h4 className="font-semibold text-slate-700">Layout específico da Sub-rota 1</h4>
      <div>{children}</div>
    </div>
  )
}
