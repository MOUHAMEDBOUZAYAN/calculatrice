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
    menu() {
        console.log("\n********* MENU *******");
        console.log("1- Addition (+)");
        console.log("2- Soustraction (-)");
        console.log("3- Multiplication (*)");
        console.log("4- Division (/)");
        console.log("5- Puissance (^)");
        console.log("6- Racine carrée (√)");
        console.log("7- Factorielle (!)");
        console.log("8- Quitter");
        console.log("*");
    }
}
const calculator = new Calculator();
function askQuestions() {
    calculator.menu();
    rl.question("Choisissez une opération (1-8) : ", (choice) => {
        if (choice === "8") {
            console.log("Au revoir !");
            rl.close();
            return;
        }
        if (choice === "6") {
            rl.question("Entrez le nombre : ", (num) => {
                const a = parseFloat(num);
                const result = calculator.racineCarrée(a);
                console.log(`Résultat :, ${result}`);
                askContinue();
            });
        } else if (choice === "7") {
            rl.question("Entrez le nombre : ", (num) => {
                const a = parseInt(num, 10);
                try {
                    const result = calculator.factorielle(a);
                    console.log(`Résultat :, ${result}`);
                } catch (error) {
                    console.log(error.message);
                }
                askContinue();
            });
        } else {
            rl.question("Entrez le premier nombre : ", (num1) => {
                rl.question("Entrez le deuxième nombre : ", (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);
                    let result;
                    switch (choice) {
                        case "1":
                            result = calculator.add(a, b);
                            break;
                        case "2":
                            result = calculator.subtract(a, b);
                            break;
                        case "3":
                            result = calculator.multiply(a, b);
                            break;
                        case "4":
                            result = calculator.divide(a, b);
                            break;
                        case "5":
                            result = calculator.power(a, b);
                            break;
                        default:
                            console.log("Choix invalide.");
                            result = null;
                            break;
                    }
                    if (result !== null) {
                        console.log(`Résultat :, ${result}`);
                    }
                    askContinue();
                });
            });
        }
    });
}
function askContinue() {
    rl.question("\nVoulez-vous continuer ? (1: Oui, 2: Non) : ", (answer) => {
        if (answer === "1") {
            askQuestions();
        } else {
            console.log("Merci et au revoir !");
            rl.close();
        }
    });
}
askQuestions();