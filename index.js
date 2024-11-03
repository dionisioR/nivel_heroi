/*
Crie uma variável para armazenar o nome e a quantidade de experiências (XP) de um herói, depois utilize uma estrutura de decisão para apresentar algumas das mensagens abaixo:

Se XP menro que 1.000 = Ferro
Se XP entre 1.001 e 2.000  = Bronze
Se XP entre 2.001 e 3.000  = Prata
Se XP entre 3.001 e 5.000  = Ouro
Se XP entre 5.001 e 8.000  = Platina Diamante
Se XP entre 8.001 e 9.000  = Ascendente
Se XP entre 9.001 e 10.000  = Imortal
Se XP mior que 10.001 = Radiante

*/

let nomeHeroi = "Super DIO";
let xp = 100200;

// Determinando a classificação do herói com base no XP
let classificacao;

if (xp < 1000) {
    classificacao = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    classificacao = "Bronze";
} else if (xp >= 2001 && xp <= 3000) {
    classificacao = "Prata";
} else if (xp >= 3001 && xp <= 5000) {
    classificacao = "Ouro";
} else if (xp >= 5001 && xp <= 8000) {
    classificacao = "Platina Diamante";
} else if (xp >= 8001 && xp <= 9000) {
    classificacao = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    classificacao = "Imortal";
} else if (xp > 10000) {
    classificacao = "Radiante";
} else {
    classificacao = "XP inválido";
}

// Exibindo o nome e a classificação do herói
console.log(`${nomeHeroi} possui ${xp} XP e sua classificação é: ${classificacao}`);
