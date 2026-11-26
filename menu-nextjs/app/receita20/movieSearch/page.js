import Form from "next/form"

export default async function MovieForm() {
    return (
        <Form action="/receita20/movies" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
            <label htmlFor="idTitleSearchKey">Título</label>
            <input id="idTitleSearchKey" name="titleSearchKey" className="border border-slate-300 rounded px-2 py-1"/>
            <button type="submit" className="px-3 py-1 bg-emerald-600 text-white rounded hover:bg-emerald-700 cursor-pointer">Pesquisar</button>
        </Form>
    )
}
