'use server'

export async function searchMovies(formData) {
    const titleSearchKey = formData.get("titleSearchKey")
    const year = formData.get("year") || ""

    if (!titleSearchKey || titleSearchKey == '') return { Search: [] }

    try {
        const apiKey = process.env.OMDB_API_KEY || 'f1cbc41e'
        const httpRes = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(titleSearchKey)}&y=${encodeURIComponent(year)}`)
        const jsonRes = await httpRes.json()
        return jsonRes
    } catch (err) {
        return { error: `Erro na requisição ${err}` }
    }
}
