function calcularPrecio(producto,precio){
    let precioTotal = 0;
    return precioTotal += producto * precio;
}

function comprar(){

    let producto ="";
    let cantidad =0;
    let precio = 0;
    let seguirComprando = false;

    do{
        producto = prompt("Querés comprar Teclado, Raton, Microfono, Monitor, o todo?").toUpperCase();
        console.log(producto);
        cantidad = parseInt(prompt("Cuántos queres comprar?"));

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
                alert("Ningun producrto fue seleccionado, intente nuevamente");
                precio = 0;
                cantidad = 0;
        }

        calcularPrecio(precio,cantidad);

        seguirComprando = confirm("¿Querés agregar otro/s productos?");

    }while(seguirComprando);

    alert("El precio total es de: " + precioTotal);

    let FinCompra = confirm("¿Desea finalizar su compra?");

    if(FinCompra) alert("Su compra fue realizada con exito");
}

comprar();