function toggleAprobado(elemento) {
  if (elemento.classList.contains("bloqueado")) return;

  elemento.classList.toggle("aprobado");
  verificarPrerequisitos();
}

function verificarPrerequisitos() {
  const ramos = document.querySelectorAll(".ramo[data-prereq]");
  ramos.forEach(ramo => {
    const prereqNombre = ramo.dataset.prereq;
    const aprobado = Array.from(document.querySelectorAll(".ramo"))
      .find(e => e.textContent === prereqNombre && e.classList.contains("aprobado"));
    
    if (aprobado) {
      ramo.classList.remove("bloqueado");
    } else {
      ramo.classList.add("bloqueado");
    }
  });
}

window.onload = verificarPrerequisitos;

