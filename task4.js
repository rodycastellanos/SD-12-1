// Task 4: delUser(number)
export function delUser(id) {
  fetch(`http://localhost:3000/users/${id}`, { 
    method: "DELETE",
  })
    .then(respuesta => respuesta.json())
    .catch(error => console.error("Error al eliminar usuario:", error.message));
}

