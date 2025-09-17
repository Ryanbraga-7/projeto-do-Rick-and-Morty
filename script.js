const resultados = document.querySelector("#resultados")

async function buscarPersonagens(url) {
  const response = await fetch(url)
  const data = await response.json()
  const lista_de_personagens = data.results
  resultados.innerHTML = ""
  lista_de_personagens.forEach((element) => {
    const novo_personagem = document.createElement("div")
    novo_personagem.className = "card"

    const nome_personagem = document.createElement("h2")
    nome_personagem.textContent = `Nome: ${element.name}`

    const especie_personagem = document.createElement("p")
    especie_personagem.textContent = `Espécie: ${element.species}`

    const status_personagem = document.createElement("p")
    status_personagem.textContent = `Status: ${element.status}`

    const localizacao_personagem = document.createElement("p")
    localizacao_personagem.textContent = `Localização: ${element.location.name}`

    const imagem_personagem = document.createElement("img")
    imagem_personagem.src = element.image

    novo_personagem.append(nome_personagem, especie_personagem, status_personagem, localizacao_personagem, imagem_personagem)
    resultados.append(novo_personagem)
  })
}
buscarPersonagens("https://rickandmortyapi.com/api/character")


const pesquisa = document.querySelector("#pesquisa")

pesquisa.addEventListener("input", () => {
  buscarPersonagens(`https://rickandmortyapi.com/api/character/?name=${pesquisa.value}`)
})