// Task 4: delUser(number)
export function delUser(id) {
  fetch(`http://localhost:3000/users/${id}`, { 
    method: "DELETE",
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`No se pudo borrar el usuario con id ${id}.`);
      }
      console.log(`Usuario con id ${id} eliminado.`);
    })
    .catch(error => console.error("Error al eliminar usuario:", error.message));
}

