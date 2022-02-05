function VerificarPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;




}

///console.log(VerificarPalindromo("ama"))

function VerificaPalindromo2(string) {
    if (!string) return "string inexistente";

    for (let i = 0; i < string.lenght / 2; i++) {
        if (string[i] !== string[string.lenght - 1 - i]) {


        }


    }

    return false;
}

console.log(VerificarPalindromo("gato"))