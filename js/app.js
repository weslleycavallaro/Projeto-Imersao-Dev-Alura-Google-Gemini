let main = "";

function search(){

    let secao = document.getElementById("resultados-pesquisa");

    main = "";

    for(let i of carros){
        main += `

            <div class="item-resultado">
                <img src="${i.imagem}" alt="${i.titulo}">
                <h2>${i.titulo}</h2>
                <p class="descricao-meta">${i.descricao}</p>
                <a href="${i.link}" target="_blank"><button>Read more</button></a>
            </div>

        `
    }
    secao.innerHTML = main;
}

function clean(){

    let secao = document.getElementById("resultados-pesquisa");
    main = `

    
        <section class="main">
            <h2>${data[0].titulo}</h2>
            <h3>${data[0].descricao}</h3>
        </section>
        


`
    secao.innerHTML = main;

}