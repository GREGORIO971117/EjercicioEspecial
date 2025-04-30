const main=document.getElementsByTagName("main").item(0);
let btnLoad=document.getElementById("btnLoad");
const URLMain="https://api.escuelajs.co/api/v1/products";

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
            <img src="${element.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">${element.price}</small>
              </div>
            </div>
          </div>
        </div>
        `);

    });
}

getData("");
crearCard();