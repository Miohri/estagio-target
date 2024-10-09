function countLetterA(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a') {
            count++;
        }
    }
    
    return `A letra 'a' aparece ${count} vezes.`;
}

console.log(countLetterA("Estou participando da seleçao para o estagio da Target")); // Exemplo de string
