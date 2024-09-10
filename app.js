function pesquisar() {
  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar uma emoção</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados
  let resultados = "";
  let titulo = "";
  let sinopse = "";
  let tags = "";

  // Itera sobre cada dado da lista de dados
  for (let dado of dados) {
    titulo = dado.titulo ? dado.titulo.toLowerCase() : "";
    sinopse = dado.sinopse ? dado.sinopse.toLowerCase() : "";
    tags = dado.tags ? dado.tags.toLowerCase() : "";
    // se titulo includes campoPesquisa
    if (
      titulo.includes(campoPesquisa) ||
      sinopse.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // cria um novo elemento
      resultados += `
          <div class="item-resultado">
              <h2>
                  <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="sinopse-meta">${dado.sinopse}</p>
              <a href=${dado.link} target="_blank">Clique aqui e explore a dica!</a>
          </div>
      `;
    }
  }

  if (!resultados) {
    resultados =
      "<p>Ops! Ainda não temos opções para isso. Tente outra coisa!</p>";
  }

  // Atribui os resultados gerados à seção HTML
  section.innerHTML = resultados;
}

//Botão para aparecer todas as opções
function mostrarTudo() {
  for (let dado of dados) {
    let section = document.getElementById("resultados-pesquisa");
    section.innerHTML += `<p><div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="sinopse-meta">${dado.sinopse}</p>
                <a href=${dado.link} target="_blank">Clique aqui e explore a dica!</a>
            </div></p>`;
  }
}
