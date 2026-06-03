//Mostrando productos de fakestore

const API_URL = "https://fakestoreapi.com/products";

const mostrarProductos = document.getElementId("btn-mostrar");

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
mostrarProductos.addEventListener("click", ()=>{
    const productos = getProductos();
    productos.forEach(producto => {
        const card=`
        <div class="card" style="width: 18rem;">
            <img src="${producto.image}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text">
                    Categoria: ${producto.category}
                    Precio: $ ${producto.price}
                </p>
            </div>
        </div>
        `
        filaProds.insertAdjacentHTML("beforeend", card);
    });
});
