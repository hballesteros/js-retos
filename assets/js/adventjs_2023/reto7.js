/*

Challemge #6: The 3D boxes

Santa is experimenting with new gift designs and he needs your help to visualize them in 3D.

Your task is to write a function that, given a size n (integer), generates a drawing of a 3D gift using ASCII characters.

The lines of the gifts are drawn with # and the faces with the symbol passed to us as a parameter:

drawGift(4, '+')

   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####


drawGift(5, '*')

    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####


drawGift(1, '^')

#

Important: We have been told that there is always to leave a newline at the end of the drawing.

*/

// function drawGift(size, symbol) {
  
//     if( size === 1) return '#\n'

//     const array = []
//     const hash = '#'
//     const space = ' '
//     const newLine = '\n'

//     const symbols = symbol.repeat(size-2)
//     const spaces = space.repeat(size-1)
//     const hashes = hash.repeat(size)
        
//     array[0] = spaces + hashes
//     array[size*2-2] = hashes
//     array[size-1]= hashes + symbols + hash

//     for( let i = 2; i <= (size-1); i++){
//         const iSpaces = space.repeat(size-i)
//         const iSymbols =  symbol.repeat(i-2)
//         array[i-1] = iSpaces + hash + symbols + hash + iSymbols + hash
//         array[size*2-i-1] = hash + symbols + hash + iSymbols + hash
//     }

//     return array.join(newLine) + newLine
// }
  
function drawGift(size, symbol) {

    let bgSize = size - 2
    bgSize += +!(bgSize + 1)

    let response = ""
    let topCenter = ""
    let bottomCenter = ""

    for (const a of [...Array.from({ length: bgSize }).keys()]) {
        const c = "#"
        + symbol.repeat(bgSize)
        + "#" + symbol.repeat(a) + "#"
        bottomCenter = c + "\n" + bottomCenter
        topCenter += " ".repeat(bgSize - a) + c + "\n"
    }

    response = " ".repeat(size - 1) + "#".repeat(size) + "\n"
        + (topCenter
        + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
        + bottomCenter
        + "#".repeat(size) + "\n").repeat(+!!(size - 1))

    return response
}


  drawGift(5, '*')