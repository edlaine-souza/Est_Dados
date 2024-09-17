/*Desenvolva um programa recursivo que calcule a soma dos elementos de um array
dividindo o array ao meio. O caso base deve ser composto por um array de um único elemento
ou um array vazio.*/

function somar(a: number[]): number {
    
    console.log(`Processando o array: [${a}]`);
    
    if (a.length == 0) {
        console.log("Caso base vazio")
        return 0;
    } if (a.length == 1) {
        console.log(`Caso base um elemento:[${a[0]}]`)
        return a[0];
    } else {
        console.log(`Chamada recursiva!`);

        // Divide o array ao meio
        let divisao = Math.floor(a.length / 2);
        let part_esq = a.slice(0, divisao);
        let part_dir = a.slice(divisao);

        // Partes esquerda e direita
        console.log(`Divisão parte esquerda: [${part_esq}]`);
        console.log(`Divisão parte direita: [${part_dir}]`);

        // Chama a função recursiva para cada parte
        let soma_esq= somar(part_esq);
        let soma_dir = somar(part_dir);

        // Resultado da soma das partes e da combinação das partes
        console.log(`Soma da parte esquerda [${part_esq}]: ${soma_esq}`);
        console.log(`Soma da parte direita [${part_dir}]: ${soma_dir}`);
        console.log(`Soma combinada das partes esquerda e direita: ${soma_esq + soma_dir}`);

        // Retorna a soma combinada das partes
        return soma_esq + soma_dir;
    }
}

let a: number[] = [5, 8, 25, 39, 14, 38];
console.log("Array original:");
console.log(a);
console.log("Soma total:", somar(a));