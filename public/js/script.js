// Obtener el primer modal
var modal1 = document.getElementById("myModal");

// Obtener el segundo modal
var modal2 = document.getElementById("contactModal");

// Obtener el botón que abre el primer modal
var btn1 = document.getElementById("openModal");

// Obtener el botón que abre el segundo modal (si es diferente)
var btn2 = document.getElementById("openContactModal");

// Obtener el <span> que cierra el primer modal
var span1 = document.getElementsByClassName("close")[0];

// Obtener el <span> que cierra el segundo modal
var span2 = document.getElementsByClassName("closee")[0];

// Cuando el usuario haga clic en el botón del primer modal, abrir el primer modal
btn1.onclick = function() {
  modal1.style.display = "block";
}

// Cuando el usuario haga clic en el botón del segundo modal, abrir el segundo modal
btn2.onclick = function() {
  modal2.style.display = "block";
}

// Cuando el usuario haga clic en <span> (x) del primer modal, cerrar el primer modal
span1.onclick = function() {
  modal1.style.display = "none";
}

// Cuando el usuario haga clic en <span> (x) del segundo modal, cerrar el segundo modal
span2.onclick = function() {
  modal2.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera de cualquiera de los dos modales, cerrarlo
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
