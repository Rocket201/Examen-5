const id = (id) => {
    return document.getElementById(id);
};
document.getElementById('informacion-adicional').addEventListener('click', function() {
    alert('Hola');
});
    
document.getElementById('reserva-ruta').addEventListener('click', function() {
    alert('Hola');
});
function validar (e){

    e.preventDefault()
    mensajeError = []
    
    //validar 1
    id('nombre').value.trim().length === 0 ? mensajeError.push('El nombre es un campo obligatorio'): null;
    id('correo-electronico').value.trim().length === 0 ? mensajeError.push('Ingresa un correo válido'): null;

    //validar 2
    !/^[a-zA-Z0-9]*$/.test(id("nombre").value.trim()) ? mensajeError.push("El nombre solo puede contener caracteres válidos") : null
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(id("correo-electronico").value.trim()) ? mensajeError.push("El correo solo puede contener caracteres válidos") : null

    id('mensaje').value.trim().length === 0 ? mensajeError.push('El mensaje es demasiado corto'): null;

    document.getElementById('informacion-adicional').addEventListener('click', function() {
        alert('Hola');
    });
    
    document.getElementById('reserva-ruta').addEventListener('click', function() {
        alert('Hola');
    });

    if (mensajeError.length === 0 && confirm("¿Desea enviar el formulario?")) {
        id("formulario").submit()
    } else if (mensajeError.length > 0) {
        id("error").textContent = ""
        mensajeError.forEach(function (error){
            const createLi = document.createElement("li")
            createLi.textContent = error
            id("error").appendChild(createLi)
        });

    }
    
  }

id("formulario").addEventListener("submit", validar)



