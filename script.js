//En desarrollo web es muy importante trabajar consumiendo datos desde diversas fuentes, entre ellas APIs, también podemos utilizar patrones para desarrollar, cómo el patrón de módulo.
//En este desafío utilizarás datos desde la siguiente URL, la cual nos devuelve un arreglo con usuarios de forma aleatoria, específicamente consumirás los datos desde la siguiente API, la cual nos devuelve 10 usuarios y aplicarás el patrón módulo como forma de trabajo.
//URL: https://randomuser.me
//API: https://randomuser.me/api/?results=5000

//Al cargar nuestra página, debe realizar la petición y mostrar la información, como en la siguiente imagen de muestra.
//Programar una función IIFE para ser invocada al cargar nuestra página.
//Programar la petición a la API usando async - await y mostrar el resultado en html utilizando etiquetas del tipo párrafo una bajo la otra.
let iife = (() => {
    async function obtenerDatos() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        const users = data.results;
        //console.log(users);
        const userDataContainer = document.getElementById('user-data');
        
        users.forEach(user => {
          // Crear un contenedor div para cada usuario
          const userContainer = document.createElement('div');
  
          // Crear elemento de imagen y establecer su src
          const image = document.createElement('img');
          image.src = user.picture.large; // Acceder a la URL de la imagen en el objeto user
          userContainer.appendChild(image);
  
          // Crear elementos de párrafo para el nombre, correo y teléfono
          const nameParagraph = document.createElement('p');
          nameParagraph.textContent = `Name: ${user.name.first} ${user.name.last}`;
          userContainer.appendChild(nameParagraph);
  
          const emailParagraph = document.createElement('p');
          emailParagraph.textContent = `Email: ${user.email}`;
          userContainer.appendChild(emailParagraph);
  
          const phoneParagraph = document.createElement('p');
          phoneParagraph.textContent = `Phone: ${user.phone}`;
          userContainer.appendChild(phoneParagraph);
  
          // Agregar el contenedor del usuario al contenedor principal
          userDataContainer.appendChild(userContainer);
        });
      } catch (error) {
        console.log('Error al obtener los datos de la API:', error);
      }
    }
  
    // Llamar a la función 
    obtenerDatos();
  })();
  



