const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            console.log("La division par zéro est impossible !");
            return null;
        }
        return a / b;
    }
    power(a, b) {
        return Math.pow(a, b);
    }
    racineCarrée(a) {
        return Math.sqrt(a);
    }
    factorielle(a) {
        if (a < 0) {
            throw new Error("La factorielle d'un nombre négatif n'existe pas !");
        }
        let result = 1;
        for (let i = 1; i <= a; i++) {
            result *= i;
        }
        return result;
    }

            rl.close();
        }
