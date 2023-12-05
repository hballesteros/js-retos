// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: 
// las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. 
// Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, 
// eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, 
// por lo que debes invertir los caracteres en el orden correcto.

// function decode(message) {
  
//     const stack = [];
//     let resultado = '';
  
//     for (const char of message) {
//       if (char === '(') {
//         stack.push('');
//       } else if (char === ')') {
//         const palabraInvertida = stack.pop().split('').reverse().join('');
//         if (stack.length > 0) {
//           stack[stack.length - 1] += palabraInvertida;
//         } else {
//           resultado += palabraInvertida;
//         }
//       } else {
//         if (stack.length > 0) {
//           stack[stack.length - 1] += char;
//         } else {
//           resultado += char;
//         }
//       }
//     }
  
//     return resultado;
// }

function decode(message) {
    const regex = /\(([^()]*)\)/;
    let match = regex.exec(message);
    while (match) {
        message = message.replace(
          match[0], 
          match[1].split('').reverse().join('')
        );
        match = regex.exec(message);
    }
    return message;
}


let a = decode('hola (odnum)')
console.log(a) // hola mundo

b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus