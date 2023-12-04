var cadenaCodigos = "&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&";

/*
The operations of the language are as follows:

"#" Increases the numeric value by 1.
"@" Decreases the numeric value by 1.
"*" Multiplies the numeric value by itself.
"&" Prints the current numeric value.
The initial numeric value is 0 and the operations should be applied in the order in which they appear in the string of symbols.

** Input Examples: **
Input: "##*&"
Expected Output: "4"
Explanation: Increment (1), increment (2), multiply (4), print (4).

Input: "&##&*&@&"
Expected Output: "0243"
Explanation: Print (0), increment (1), increment (2), print (2), multiply (4), print (4), decrement (3), print (3).
*/

function interpretarCodigo(cadena) {
    var valor = 0;
    var salida = "";
    for (var i = 0; i < cadena.length; i++) {
        var simbolo = cadena[i];
        switch (simbolo) {
            case "#":
                valor++;
                break;
            case "@":
                valor--;
                break;
            case "*":
                valor *= valor;
                break;
            case "&":
                salida += valor;
                break;
        }
    }
    return salida;
}

console.log(interpretarCodigo(cadenaCodigos));