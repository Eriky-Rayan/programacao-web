import gamesDb from "../../data/games.json"

export async function GET(request){
    const searchParams = request.nextUrl.searchParams
    const titleSearchKey = (searchParams.get("titleSearchKey") || "").trim().toLowerCase()

    const filteredGames = titleSearchKey
        ? gamesDb.filter((game) =>
            game.Title.toLowerCase().includes(titleSearchKey)
        )
        : gamesDb

    return Response.json({ Search: filteredGames })
}

