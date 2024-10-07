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
function numeroMaior(){
    let n = parseInt(prompt("Quantos valores serão digitados ? "));
    let arr = [];
    let i = 0;
    while (i < n) {
      let value = parseFloat(prompt(`Insira o valor ${i + 1}: `));
      arr.push(value);
      i++;
    }
        maior =  Math.max(...arr);
    alert(`O maior valor é: ${maior}`);
}
function contadorNumeroPar() {
    let quant = 0;
    let n = parseInt(prompt("Quantos valores serão digitados ? "));
    let arr = [];
    let i = 0;
    while (i < n) {
      let value = parseFloat(prompt(`Insira o valor ${i + 1}: `));
      arr.push(value);
      i++;
    }
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        quant++;
      }
    }
    if(quant > 0){
    alert(`Há ${quant} numeros pares no array`);
  }else{
    alert(`Não há numeros pares no array`);
  }
}
function calculoMedia() {
    let n = parseInt(prompt("Quantos valores serão digitados ? "));
    let arr = [];
    let i = 0;
    while (i < n) {
      let value = parseFloat(prompt(`Insira o valor ${i + 1}: `));
      arr.push(value);
      i++;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    media = sum / arr.length;
    alert(`A média dos valores do array é: ${media.toFixed(2)}`);
  }