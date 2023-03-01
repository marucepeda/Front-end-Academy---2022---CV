function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function openTab(evt, tabName) {
  // Obtener secciones y botones
  var tabcontent = document.getElementsByClassName("tabcontent");
  var tablink = document.getElementsByClassName("tablink");

  // Ocultar secciones
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Desactivar botones
  for (var i = 0; i < tablink.length; i++) {
    tablink[i].classList.remove("active");
  }

  // Mostrar selección
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
