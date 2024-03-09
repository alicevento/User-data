let iife = (() => {
    async function obtenerDatos() {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            const users = data.results;
            const userDataContainer = document.getElementById('user-data');
            
            // Crear un array de strings HTML con la información de cada usuario
            const userHtml = users.map(user => `
                <div class="card">
                    <img src="${user.picture.large}">
                    <p>Name: ${user.name.first} ${user.name.last}</p>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                </div>
            `);

            // Unir todos los strings HTML en una sola cadena
            const usersHtml = userHtml.join('');

            // Insertar la cadena HTML en el contenedor principal utilizando innerHTML
            userDataContainer.innerHTML = usersHtml;
        } catch (error) {
            console.error('Error al obtener los datos de la API:', error);
        }
    }

    // Llamar a la función 
    obtenerDatos();
})();
