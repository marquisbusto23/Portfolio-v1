//Crea un nuevo elemento Vue con las opciones deseadas
new Vue({
  el: '#app', // Elemento HTML donde se inicializa la aplicación. 
  data: { // Los datos que se usarán para renderizar la vista
message: 'Hola mundo!' 
}
});

function mostrarMenu(){
    document.getElementById("menu").style.display = "block";
  }

  function ocultarMenu(){
    document.getElementById("menu").style.display = "none";
  }
