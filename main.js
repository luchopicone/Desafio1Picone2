function calcularPrecio(producto,precio){
    let precioTotal = 0;
    return precioTotal = producto * precio;
}

function comprar(){

    let producto ="";
    let cantidad =0;
    let precio = 0;
    let seguirComprando = false;
    let total = 0;

    do{
        producto = prompt("Querés comprar Teclado, Raton, Microfono, Monitor, o todo?").toUpperCase();
        console.log(producto);
        cantidad = parseInt(prompt("Cuántos querés comprar?"));

        switch(producto){
            case "TECLADO" :
                precio = 8200;
                break;

            case "RATON" :
                precio = 5500;
                break;

            case "MICROFONO" :
                precio = 10300;
                break;


            case "MONITOR" :
                precio = 39400;
                break;

            default :
                alert("Ningun producto fue seleccionado, intente nuevamente");
                precio = 0;
                cantidad = 0;
        }

        total += calcularPrecio(cantidad,precio);

        seguirComprando = confirm("¿Querés agregar otro/s productos?");

    }while(seguirComprando);

    alert("El total de tu compra es de: $" + total);

    let FinCompra = confirm("¿Desea finalizar su compra?");

    if(FinCompra) alert("Su compra fue realizada con exito");
}

comprar();