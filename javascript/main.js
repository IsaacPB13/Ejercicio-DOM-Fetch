//Mostrando productos de fakestore

const API_URL = "https://fakestoreapi.com/products";

const mostrarProductos = document.getElementById("btn-mostrar");

const filaProds = document.getElementById("prodRow");

//Definiendo la función de fetch
async function getProductos() {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();

        if(!response.ok){
            throw new Error("No se pudo completar la solicitud...");
        }

        console.log(data);
        return data;
    }catch(error){
        console.log(error);
    }
}

//Definiendo la acción del botón
mostrarProductos.addEventListener("click", async ()=>{
    const productos = await getProductos();
    for(let i=0; i<productos.length; i++){
        const card=`
        <div class="card" style="width: 18rem;">
            <img src="${productos[i].image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${productos[i].title}</h5>
                <p class="card-text">
                    Categoria: ${productos[i].category}
                    <br>
                    Precio: $ ${productos[i].price}
                </p>
            </div>
        </div>
        `
        filaProds.insertAdjacentHTML("beforeend", card);
    }
});
