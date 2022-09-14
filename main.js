function precioTotal(){
    let total = carrito.reduce((acc,prdct)=>acc + prdct.precio * prdct.cantidad,0)
    alert(`El total de tu compra es de $${total}`)
}

function mostrarProductos(){
    const verProductos = carrito.map(elementos=>`${elementos.cantidad} ${elementos.nombre} $${elementos.totalPrecio()}\n`)
    alert("Su carrito contiene: \n" + verProductos.join(''))
}

function elegirProducto(eleccion){
    perifericos[eleccion].cantidad = prompt("Cuántos querés comprar?");
    carrito.push(perifericos[eleccion])
    console.log(carrito)
}

class Producto{
    constructor(nombre,precio,cantidad){
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = parseInt(cantidad)
    }
    totalPrecio(){
        return this.precio * this.cantidad
    }
}

const perifericos =[
    new Producto("Teclado", 8200,""),
    new Producto("Raton", 5500,""),
    new Producto("Microfono", 10300,""),
    new Producto("Monitor", 39400,""),
]

const carrito = []

function comprar(){

    let producto ="";
    let cantidad =0;
    let precio = 0;
    let seguirComprando = false;
    let total = 0;

    do{
        producto = prompt("Querés comprar Teclado, Raton, Microfono, Monitor, o todo?").toUpperCase();

        switch(producto){
            case "TECLADO" :
                elegirProducto(0)
                break;

            case "RATON" :
                elegirProducto(1)
                break;

            case "MICROFONO" :
                elegirProducto(2)
                break;


            case "MONITOR" :
                elegirProducto(3)
                break;

            default :
                alert("Ningun producto fue seleccionado, intente nuevamente");
                precio = 0;
                cantidad = 0;
        }

        seguirComprando = confirm("¿Querés agregar otro/s productos?");

    }while(seguirComprando);

    mostrarProductos()

    precioTotal()
}

comprar();