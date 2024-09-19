let listaNombresGastos = [];
let listaDetallesGastos = [];
let listaValoresGastos = [];

function clickBoton (){
    let nombreGasto = document.getElementById ('nombreGasto').value;
    let detallesGasto = document.getElementById ('detallesGasto').value;
    let valorGasto = document.getElementById ('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

detallesGasto
    listaNombresGastos.push(nombreGasto);
    listaDetallesGastos.push(detallesGasto);
    listaValoresGastos.push(Number(valorGasto));

    actualizarListaGastos();
 
  
}

function actualizarListaGastos () {
    const listaElementos = document.getElementById ('listaDeGastos');
    const totalElementos = document.getElementById ('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
  listaNombresGastos.forEach((elemento, posicion) =>  {
        const valorGasto = Number(listaValoresGastos[posicion]);
        const detalles = listaDetallesGastos[posicion]; 

        htmlLista += `<li>${elemento} - Detalles: ${detalles}- USD ${valorGasto.toFixed(2)}`;
        
        if (valorGasto > 149) {
            htmlLista += ' <span class="gasto-alto">(Gasto alto)</span>';
        }

        htmlLista += `
                    <button onclick="modificarGasto(${posicion});">Modificar</button>
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;

        

        totalGastos += Number(valorGasto);

       
        

    });
    

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    
    limpiar();
  
}

function limpiar() {
   document.getElementById ('nombreGasto').value = '';
   document.getElementById ('detallesGasto').value = '';
   document.getElementById ('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion,1);
    listaDetallesGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    document.getElementById ('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById ('detallesGasto').value = listaDetallesGastos[posicion];
    document.getElementById ('valorGasto').value = listaValoresGastos[posicion];
  

    
}