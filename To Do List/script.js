// Cargar tareas desde localStorage al iniciar
document.addEventListener("DOMContentLoaded", cargarTareas);

// Función para agregar una tarea
function agregarTarea() {
  const tareaTexto = document.getElementById("nuevaTarea").value.trim();
  if (tareaTexto === "") {
    alert("Por favor, escribe una tarea.");
    return;
  }

  const tarea = {
    texto: tareaTexto,
    completada: false
  };

  const tareas = obtenerTareas();
  tareas.push(tarea);
  guardarTareas(tareas);
  mostrarTareas();
  document.getElementById("nuevaTarea").value = "";
}

// Función para obtener las tareas desde localStorage
function obtenerTareas() {
  return JSON.parse(localStorage.getItem("tareas")) || [];
}

// Función para guardar las tareas en localStorage
function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Función para cargar y mostrar las tareas al iniciar
function cargarTareas() {
  mostrarTareas();
}

// Función para mostrar las tareas en la lista
function mostrarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = ""; // Limpiar la lista
  const tareas = obtenerTareas();

  tareas.forEach((tarea, index) => {
    const tareaElemento = document.createElement("li");
    tareaElemento.className = tarea.completada ? "completada" : "";
    
    tareaElemento.innerHTML = `
      <input type="checkbox" onclick="marcarCompleta(${index})" ${tarea.completada ? "checked" : ""}>
      <span>${tarea.texto}</span>
      <button onclick="eliminarTarea(${index})">Eliminar</button>
    `;
    
    listaTareas.appendChild(tareaElemento);
  });
}

// Función para marcar una tarea como completada
function marcarCompleta(index) {
  const tareas = obtenerTareas();
  tareas[index].completada = !tareas[index].completada;
  guardarTareas(tareas);
  mostrarTareas();
}

// Función para eliminar una tarea
function eliminarTarea(index) {
  const tareas = obtenerTareas();
  tareas.splice(index, 1);
  guardarTareas(tareas);
  mostrarTareas();
}
