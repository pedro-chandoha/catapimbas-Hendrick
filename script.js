function calculoSoma() {
    let n = parseInt(prompt("Quantos valores serão digitados ? "));
    let arr = [];
    let i = 0;
    while (i < n) {
      let value = parseFloat(prompt(`Insira o valor ${i + 1}: `));
      arr.push(value);
      i++;
    }
    let sum = arr.reduce((total, currentValue) => total + currentValue, 0);
    alert(`A soma dos valores do array é: ${sum}`);
  }