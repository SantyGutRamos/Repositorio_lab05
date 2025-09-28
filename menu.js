document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-menu");
  const menu = document.getElementById("menu");

  btn.addEventListener("click", () => {
    // Mostrar u ocultar la lista de enlaces
    menu.classList.toggle("oculto");
  });
});