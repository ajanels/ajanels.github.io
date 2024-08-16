// Obtener el modal
var modal = document.getElementById("contactModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("openModal");

// Obtener el <span> que cierra el modal
var span = document.getElementsByClassName("closee")[0];

// Cuando el usuario haga clic en el botón, abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x), cerrar el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cerrarlo
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
