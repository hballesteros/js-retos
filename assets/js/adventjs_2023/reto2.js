// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar 
// y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. 
// Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, 
// devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.


// Mi primer propuesta
// function manufacture(gifts, materials) {
//     let manufactureGifs = []    
//     gifts.forEach( gift => {
//         const materialsGift = gift.split('')
//         let count = 0
//         materialsGift.forEach( material => {
//             if (materials.includes(material)){
//                 count++
//             } 
//         })
//         if(count === materialsGift.length){
//             manufactureGifs.push(gift)
//         }    
//     });
//     return manufactureGifs
// }

// Propuesta de Maybe Jal (comunidad Midudev)
function manufacture(gifts, materials) {
    const regex = new RegExp(`^[${materials}]+${"$"}`);
    return gifts.filter(regex.test.bind(regex));
}


// Propuesta de chatGPT
// function manufacture(gifts, materials) {
//     const allowedMaterialsSet = new Set(materials);

//     return gifts.filter(gift => {
//         for (const material of gift) {
//         if (!allowedMaterialsSet.has(material)) {
//             return false;
//         }
//         }
//         return true;
//     });
// }

// Propuesta de github copilot
// function manufacture(gifts, materials) {
//     return gifts.filter(gift => gift
//         .split('')
//         .every(material => materials.includes(material)));
// }


// propuesta de github copilot + refactor
// function manufacture(gifts, materials) {
//     const result = gifts.filter(gift => gift
//       .split('')
//       .every(material => materials.includes(material))
//     );
//     return result ?? []
// }

let gifts = ['tren', 'oso', 'pelota']
let materials = 'tronesa'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

gifts = ['juego', 'puzzle']
materials = 'jlepuz'

console.log(manufacture(gifts, materials)) // ["puzzle"]

gifts = ['libro', 'ps5']
materials = 'psli'

console.log(manufacture(gifts, materials)) // []
