function getApi(url) {
    const productsData = fetch(url)
    .then(res=>res.json())
    .then(json=> {
        var jsonData = json
        var itens = document.getElementById("itens")
        itens.innerHTML = '<div id="itens"></div>'
        console.log(itens)
        for(let i = 0; i < jsonData.length; i++) {
            var produto = document.createElement("div")
            produto.setAttribute("class", "col-12 col-sm-6 col-lg-4")
            produto.innerHTML = `<div class="card container">
            <img src="${jsonData[i].image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${jsonData[i].title}</h5>
                <p class="card-text">${jsonData[i].price}</p>
                <p class="card-text"> ${jsonData[i].rating.rate} ⭐</p>
                <a href="detalhe.html?id=${jsonData[i].id}" class="btn btn-primary">Saiba mais...</a>
            </div>
        </div>`
            itens.appendChild(produto)
        }
    })
}

var link = 'https://fakestoreapi.com/products'

getApi(link)



function get_categorias() {
    const productsData = fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=> {
        var jsonData = json
        var filtro = document.getElementById('filtro')

        var select = document.createElement("select")
        select.setAttribute('id', 'categoria')
        for(let i = 0; i < jsonData.length; i++) {

            select.innerHTML += `<option value="${jsonData[i]}">${jsonData[i]}</option>`
        }

        filtro.appendChild(select)
    })
}
get_categorias()

function cat() {
    var categoria = document.getElementById('categoria')
    link = `https://fakestoreapi.com/products/category/${categoria.value}`

    getApi(link);
}