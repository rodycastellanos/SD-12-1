// Task 3: addUser(first_name, last_name, email)
export function addUser(first_name, last_name, email){
  fetch("http://localhost:3000/users",{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    first_name: first_name,
    last_name: last_name,
    email: email
  }),

   }).then(response => response.json())
    .catch(error => console.error("Error al obtener usuarios:", error));
}

