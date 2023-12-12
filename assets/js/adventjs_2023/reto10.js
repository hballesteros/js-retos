/*

Challemge #10: Create your own Christmas tree

What an idea Sam Elfman has had! He wants to offer a service that creates a customized Christmas tree 🎄 in a matter of seconds.

To create it, we are given a string to form the tree and a number that indicates its height.

Each character of the string represents an ornament of the tree, and we use them cyclically until we reach the indicated height. At least, they will always pass us one.

We must return a multiline string with the Christmas tree made with the ornaments, the indicated height plus a final line with the trunk formed by the character | in the center and, finally, a newline \n.

For example, if we receive the string "123" and the number 4 as height, we would have to build this tree:

   1
  2 3
 1 2 3
1 2 3 1
   |
If we receive the string *@o and the number 3, the tree we should return is:

  *
 @ o
* @ o
  |
Note:

The tree should always be centered, for that reason add blank spaces to the left of each line.
Create spaces only to the left of each line of the tree. Do not leave blank spaces to the right.
The ornaments have a white space between them for separation.

*/


function createChristmasTree(ornaments, height) {

    ornaments = Array.from({ 
      length: (height * (height + 1)) / 2 
    },(_, i) => ornaments[i % ornaments.length]);
    
    // Build Chrismas Tree
    let result = ''
    for (let i = 1; i <= height; i++) {
      result += (' ').repeat(height - i) + 
      ornaments.splice(0, i).join(' ') + '\n';
    }
    result += (' ').repeat(height - 1) + '|' + '\n'
  
    return result ?? '|'
  
}

function createChristmasTree(ornaments, height) {
    let response = "";
    const width = (height * 2) - 1
  
    ornaments = [...ornaments.repeat(60)]
  
    for (const h of Array.from({ length: height }).keys()) {
      const layerWidth = (h * 2) + 1
  
      response += " ".repeat(
        (width - layerWidth) / 2
      )
        + ornaments.splice(0, h + 1).join(" ")
        + "\n"
    }
    response += " ".repeat(width / 2) + "|" + "\n"
  
    return response
}

function createChristmasTree(ornaments, height) {
    ornaments = ornaments.repeat(53);
    let result =''
    for( let i = 1, j = 0; i <= height; j+=i, i++) {
      result += ornaments.slice(j, j+i)
      .split('').join(' ')
      .padStart(height+i-1)+'\n'
    }
    return result + '|'.padStart(height) + '\n'
}

function createChristmasTree(ornaments, height) {
    ornaments = ornaments.repeat(53);
    let result =''
    let j = 0
    for (const i of Array.from({ length: height }).keys()) {
        result += ornaments.slice(j,j+i+1)
        .split('').join(' ').padStart(height+i)+'\n'
        j+=i+1
    }
    return result+'|'.padStart(height)+'\n'
}