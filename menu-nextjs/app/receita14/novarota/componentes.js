export function MariaPrea({ mensagem = "Morreu Maria Preá..." }) {
   return (
      <h2>{mensagem}</h2>
   )
}

export function MensagemPersonalizada({ titulo, autor }) {
   return (
      <div>
         <h3>{titulo}</h3>
         <p>Autor: {autor}</p>
      </div>
   )
}

export function CardInfo({ descricao }) {
   return (
      <div>
         <p>{descricao}</p>
      </div>
   )
}
