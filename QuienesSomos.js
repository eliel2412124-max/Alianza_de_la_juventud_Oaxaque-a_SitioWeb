
       function insertarTestimonio() {
    // Obtener valores del formulario
    const Nombre = document.getElementById('Nombre').value;
    const resena = document.getElementById('resena').value;
    
    // Crear una nueva fila en la tabla
    const nuevaFila = document.createElement('tr');

    // Añadir celdas a la fila
    nuevaFila.innerHTML = `
        <td class="py-2 px-4 border-b border-gray-300">${Nombre}</td>
        <td class="py-2 px-4 border-b border-gray-300">${resena}</td>
    `;

    // Añadir la nueva fila al cuerpo de la tabla
    document.getElementById('cuerpoTablaTestimonio').appendChild(nuevaFila);

    // Limpiar el formulario
    document.getElementById('formulariotestimonios').reset();
    }
document.getElementById("btnGuardar").addEventListener("click", insertarTestimonio)
