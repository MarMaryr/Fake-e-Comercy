function detail() {
  const URLparametro = new URLSearchParams(window.location.search)
  var id = URLparametro.get("id")
  const productsData = fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res=>res.json())
  .then(json=> {
      var jsonData = json

      var detalhes = document.getElementById("produto")   
      detalhes.innerHTML = `<div class="row g-0">
      <div class="col-md-4">
      <img src="${jsonData.image}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8 centro">
      <div class="card-body">
          <h5 class="card-title">${jsonData.title}</h5>
          <p class="card-text">${jsonData.description}</p>
          <p class="card-text">${jsonData.price}</p>
          <p class="card-text"><small class="text-body-secondary">${jsonData.rating.rate} ⭐ (${jsonData.rating.count})</small></p>
          <p class="card-text"><small class="text-body-secondary">${jsonData.category}</small></p>    
      </div>
      </div>
  </div>`
  })
}

detail()