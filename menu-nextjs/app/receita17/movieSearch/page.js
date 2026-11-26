import Form from "next/form"

export default async function MovieForm() {
    return (
        <Form action="/receita17/movies" className="flex flex-wrap items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 mb-4">
            <label htmlFor="idTitleSearchKey" className="font-medium">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" className="border border-slate-300 rounded px-2 py-1"/>
            <label htmlFor="idYear" className="font-medium">Ano</label>
            <input id="idYear" name="year" className="border border-slate-300 rounded px-2 py-1"/>
            <button type="submit" className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer">Pesquisar</button>
        </Form>
    )
}
