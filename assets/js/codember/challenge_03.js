function contarCaracteres(palabra, caracter) {
    // Utilizar split para convertir la cadena en un array de caracteres
    // y luego usar filter para mantener solo los caracteres deseados
    const caracteresFiltrados = palabra.split('').filter(c => c === caracter);
  
    // La longitud del array resultante es la cantidad de caracteres encontrados
    return caracteresFiltrados.length;
}


// Hacer la solicitud GET a la URL
fetch("data/encryption_policies.txt")
  .then(response => {
    // Verificar si la solicitud fue exitosa (código de estado 200)
    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }
    return response.text();
  })
  .then(data => {
    // Dividir las líneas del texto
    const lines = data.split('\n');

    // Crear un objeto para almacenar los datos
    const dataObject = {};
    let i = 0;

    // Iterar sobre cada línea y agregar al objeto
    lines.forEach(line => {
      // Dividir la línea en dos partes usando ':' como separador
      const parts = line.split(':');

      // Verificar si hay dos partes en la línea
      if (parts.length === 2) {
        // Eliminar espacios en blanco alrededor de la clave y el valor
        const policie = parts[0].trim();
        const key = parts[1].trim();

        // obtenemos rangos 
        const ranges = policie.split(' ')[0].split('-');
        const character = policie.split(' ')[1]

        // obtenemos la cantidad de caracteres
        const count = contarCaracteres(key, character);
        
        if (count >= ranges[0] && count <= ranges[1]) {
            //console.log('valido');
            //console.log(ranges, character, key, count);
        } else {
            i++;
            //console.log('invalido');
            console.log(i, ranges, character, key, count);
        }
        
        // Agregar al objeto
        dataObject[policie] = key;
      }
    });

    // Imprimir el objeto resultante
    console.log(dataObject);
  })
  .catch(error => {
    // Manejar errores de la solicitud
    console.error(error.message);
  });
