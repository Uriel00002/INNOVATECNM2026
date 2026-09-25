document.getElementById('boton').onclick = function () {
  fetch('data.json')
    .then(response => response.json())
    .then(participantes => {
      let filas = '';
      for (let i = 0; i < participantes.length; i++) {
        filas += `
          <tr>
            <td>${participantes[i].nombre}</td>
            <td>${participantes[i].edad}</td>
            <td>${participantes[i].universidad}</td>
            <td>${participantes[i].carrera}</td>
          </tr>`;
      }
      document.getElementById('registros').innerHTML = filas;
    })
    .catch(error => console.error('Error al cargar data.json:', error));
};