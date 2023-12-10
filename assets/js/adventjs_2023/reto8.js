/*

Challemge #8: Sorting the warehouse

The elves are very busy in Santa Claus' workshop organizing gifts 🎁 for Christmas Eve 🎄.

The input format is special, as it indicates the number of gifts and the type of gift with letters from a to z. For example, '66a11b' means 66 a gifts and 11 b gifts.

The elves have a special system for organizing the gifts:

Every 10 gifts of the same type are packed in a box, represented by {x}. For example, 20 type a gifts are packed in two boxes like this: {a}{a}.
Every 5 boxes are stacked on a pallet, represented by [x]. For example, 10 a boxes are stacked on 2 pallets in this way: [a][a]
Any additional gift is placed in a bag, represented by () and all of them are placed inside. For example, 4 b gifts are placed in a bag like this (bbbb)
The gifts are then placed in the following order: pallets, boxes and bags. And the gifts appear in the same order as the input string.

Your task is to write a function organizeGifts that takes a string of gifts as an argument and returns a string representing the warehouse.

const result1 = organizeGifts('76a11b')
console.log(result1)
`[a]{a}{a}(aaaaaa){b}(b)`

  Explanation:

  76a: 76 gifts type 'a' would be packed in 7 boxes and 6 gifts would be left, resulting in 1 pallet [a] (for the first 5 boxes), 2 loose boxes {a}{a} and a bag with 6 gifts (aaaaaa)

  11b: 11 gifts type 'b' would be packed in 1 box and 1 gift would be left, 

*/

function organizeGifts(gifts) {
  
    const amount = gifts.match(/\d+/g)
    const type = gifts.match(/[a-z]/g)
    let result = ''
    let i = 0       

    for ( let a of amount){
      let pallets = Math.trunc(a/50)
      let boxes = Math.trunc(a/10) - pallets*5
      let additionals = a%10
      const name = type[i]

      result += ('[' + name + ']').repeat(pallets)
      result += ('{' + name + '}').repeat(boxes)
      result += '(' + name.repeat(additionals) + ')' 

      i++
    }
    return result.replaceAll('()', '')
}

// function organizeGifts(gifts) {
  
//     return [...gifts.matchAll(/(\d+)([a-z])/g)].map(([_,num,letter]) => {
      
//       const pallets = Math.trunc(num/50)
//       const boxes = Math.trunc(num/10)
//       num = num%10
  
//       return (`[${letter}]`.repeat(pallets)
//          + `{${letter}}`.repeat(boxes-pallets*5)
//          + `(${letter.repeat(num)})`).replaceAll('()','') 
    
//     }).join('')
// }

// function organizeGifts(gifts) {  
//     return gifts.match(/\d+[a-z]/g)?.map((v) => {
//       const [cant, tipo] = v.match(/\d+|[a-z]/g)    
  
//       return `[${tipo}]`.repeat((cant - (cant % 10)) / 50)
//         .concat(`{${tipo}}`.repeat(((cant - (cant % 10)) % 50) / 10))
//         .concat('(')
//         .concat(`${tipo}`.repeat(cant % 10))
//         .concat(')')
//     }).join('').replaceAll('()', '')
// }

function organizeGifts(gifts) {
    const countGifts = gifts.match(/\d+/g)
    const nameGifts = gifts.match(/[a-z]/g)
  
    let response = ""
    let i = 0
  
    for (let c of countGifts) {
      const g = nameGifts[i]
      let a = ""
  
      c = +c
  
      a += `[${g}]`.repeat(c / 50)
      c %= 50
  
      a += `{${g}}`.repeat(c / 10)
      c %= 10
  
      a += `(${g.repeat(c)})`.repeat(+!!c)
  
      response += a
      i++
    }
  
    return response
  }