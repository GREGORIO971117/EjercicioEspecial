let btnLoad=document.getElementById("btnLoad");
const URLMain="https://api.escuelajs.co/api/v1/products";


btnLoad.addEventListener("click",function (event) {

    
})


function getData(elemento) {
    const options={"method":"GET"};
  
    fetch(URLMain+elemento,options)
  .then((response)=>{
      response.json().then((res)=>{
          crearCard(res);
      });
   })
   .catch((err)=>{
      main.insertAdjacentHTML("afterbegin",
          `<div class="error">Error: ${err.message}</div>`);
      
   });
  }


function crearCard(res) {
    main.innerHTML="";
    res.forEach((element)=>{
        main.insertAdjacentHTML("afterbegin",

        `
        <div class="col">
          <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div class="card-body">
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">$ price</small>
              </div>
            </div>
          </div>
        </div>
        `);

    });
}