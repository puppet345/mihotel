// Script para manejar el formulario de reserva
document.getElementById("form-reserva").addEventListener("submit", function(event){
    event.preventDefault();  // Previene el envío tradicional del formulario

    // Obtener los valores del formulario
    const habitacion = document.getElementById("habitacion").value;
    const fecha_checkin = document.getElementById("fecha_checkin").value;
    const fecha_checkout = document.getElementById("fecha_checkout").value;
    const nombre_reserva = document.getElementById("nombre_reserva").value;
    const email_reserva = document.getElementById("email_reserva").value;
    const telefono_reserva = document.getElementById("telefono_reserva").value;

    // Mostrar mensaje de confirmación
    document.getElementById("mensaje-confirmacion").style.display = "block";

    // Opcionalmente, puedes enviar los datos a una API o realizar otra acción con los datos
    console.log("Reserva confirmada:");
    console.log("Tipo de habitación: " + habitacion);
    console.log("Fecha de entrada: " + fecha_checkin);
    console.log("Fecha de salida: " + fecha_checkout);
    console.log("Nombre: " + nombre_reserva);
    console.log("Correo electrónico: " + email_reserva);
    console.log("Teléfono: " + telefono_reserva);
});
$(document).ready(function(){
    // Inicializa el slider
    var slickSlider = $('.galeria-imagenes').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: false,
        cssEase: 'linear',
        autoplay: false,  // Desactiva la opción autoplay de Slick
    });

    // Función para avanzar al siguiente slide automáticamente
    setInterval(function() {
        slickSlider.slick('slickNext');  // Avanza al siguiente slide
    }, 4000);  // Cambia de imagen cada 2 segundos
});
