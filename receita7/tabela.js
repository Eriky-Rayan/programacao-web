/**
 * Monta uma tabela HTML genérica a partir de um array de objetos
 * e insere dentro do elemento indicado.
 *
 * @param {Array<Object>} dados - array de objetos (ex: [{title, price}, ...])
 * @param {string} containerId - id do elemento onde a tabela será inserida
 * @param {Object} [opcoes] - configurações opcionais
 * @param {string[]} [opcoes.colunas] - quais chaves exibir e em que ordem (default: todas as chaves do primeiro item)
 * @param {Object<string,string>} [opcoes.titulos] - mapa chave -> texto do cabeçalho (default: a própria chave)
 * @param {string} [opcoes.mensagemVazio] - texto exibido quando não há dados
 */
function montarTabela(dados, containerId, opcoes = {}) {
  const container = document.getElementById(containerId)
  if (!container) return

  if (!dados || dados.length === 0) {
    container.innerHTML = `<p class="vazio">${opcoes.mensagemVazio || "Nenhum dado encontrado."}</p>`
    return
  }

  const colunas = opcoes.colunas || Object.keys(dados[0])
  const titulos = opcoes.titulos || {}

  const cabecalho = colunas
    .map(col => `<th>${titulos[col] || col}</th>`)
    .join("")

  const linhas = dados
    .map(item => {
      const celulas = colunas
        .map(col => `<td>${item[col] ?? ""}</td>`)
        .join("")
      return `<tr>${celulas}</tr>`
    })
    .join("\n")

  container.innerHTML = `
    <table class="tabela-generica">
      <thead><tr>${cabecalho}</tr></thead>
      <tbody>${linhas}</tbody>
    </table>
  `
}