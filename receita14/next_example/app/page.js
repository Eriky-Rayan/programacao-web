export default function Home(){
    return (
        <div>
            <div>Menu principal</div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
            </div>
        </div>
    )
}

export function Cabecalho({ subtitulo = "Cabeçalho exportado do app/page.js" }){
    return (
        <div>
            <h2>{subtitulo}</h2>
        </div>
    )
}
