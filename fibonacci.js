function fibonacci(num) {
    let a = 0, b = 1, temp;
    if (num === 0 || num === 1) return `O número ${num} pertence à sequência de Fibonacci.`;
    
    while (b < num) {
        temp = a + b;
        a = b;
        b = temp;
    }
    
    if (b === num) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}

console.log(fibonacci(13)); // Exemplo: informe o número aqui
