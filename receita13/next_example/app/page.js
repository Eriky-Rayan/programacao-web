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

export function Cabecalho(){
    return (
        <div>
            <h2>Cabeçalho compartilhado do app/page.js</h2>
        </div>
    )
}

export function MensagemRota({ texto }){
    return (
        <div>
            <p>{texto}</p>
        </div>
    )
}