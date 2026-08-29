export default function Home() {
    return (
        <html>
        <body>
        <div>
            <div>Menu principal</div>
            <div>
                <h1>
                    Viva Santana!
                </h1>
            </div>
        </div>    
        </body> 
        </html>  
    )
}

export function Vasco(){
    return(
        <h2>
            Vasco Campeão!
        </h2>
    )
}

export function Print({String}){
    return(
        <div>{String}</div>
    )
}