function pesquisar() {
    
        let resultados = '';
       

        // Seleciona a seção, o campo de pesquisa e obtém o valor digitado.
        let section = document.getElementById("resultados-pesquisa");
        let inputPesquisa = document.getElementById("input-pesquisa");
        let termoPesquisa = inputPesquisa.value.toLowerCase(); // Converte para minúsculo para comparação
    
    
        // Limpa os resultados anteriores
        section.innerHTML = '';

        if (termoPesquisa === "") {
            // Se não houver resultados, cria um elemento para a mensagem
            let mensagem = document.createElement('h1');
            mensagem.textContent = 'Digite pelo menos 3 caracteres.';
            section.appendChild(mensagem)
            contador = 0;
            return;
        }
    
        //criando uma variável que receberá o número de resultados para exibir no HTML 
        let contador = 0;

        // Itera sobre os dados, filtrando por aqueles que contêm o termo de pesquisa
        for (let dado of dados) {
            let tituloMinusculo = dado.titulo.toLowerCase();
            let descricaoMinuscula = dado.descricao.toLowerCase();
            let tagsMinuscula = dado.tags.toLowerCase();
            
           

            if (tituloMinusculo.includes(termoPesquisa) || descricaoMinuscula.includes(termoPesquisa) || tagsMinuscula.includes(termoPesquisa) ) {
                // Cria a estrutura HTML e adiciona à seção
                resultados += `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">More info</a>
                </div>`;
                
                //conta +1 cada vez que a condição é verdadeira
                contador++;

            }
        }
            section.innerHTML = resultados;
            document.getElementById('contador').textContent = `${contador} resultados`

            // Verifica se há resultados
        if (!resultados) {
            // Se não houver resultados, cria um elemento para a mensagem
            let mensagem = document.createElement('h1');
            mensagem.textContent = 'Nenhum resultado encontrado.';
            section.appendChild(mensagem);
    }
}