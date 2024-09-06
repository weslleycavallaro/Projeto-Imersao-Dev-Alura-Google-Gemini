let main = "";
let erro = `

    <section class="main">
        <h3>Nenhum índice encontrado!</h3>\
        <h3>Tente alguma palavra mais genérica.</h3>
    </section>

`

function search(){

    let secao = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    main = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    if(campoPesquisa != ""){

        campoPesquisa = campoPesquisa.toLowerCase();

        for(let i of carros){

            titulo = i.titulo.toLowerCase();
            descricao = i.descricao.toLowerCase();
            tags = i.tags.toLowerCase();

            if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            main += `

                <div class="item-resultado">
                    <img src="${i.imagem}" alt="${i.titulo}">
                    <h2>${i.titulo}</h2>
                    <p class="descricao-meta">${i.descricao}</p>
                    <a href="${i.link}" target="_blank"><button>Read more</button></a>
                </div>

            `
            }
        }
        
    }

    if(main != ""){

        secao.innerHTML = main;

    }else{

        secao.innerHTML = erro;
        
    }

    
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