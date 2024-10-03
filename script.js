function somaDeValoresDoArray() {
    function somaArray(arr) {
        var soma;
        for (var num of arr) {
            soma += num;
        }
        return soma;
    }
    var arr = [];
    var quantNum = prompt("Digite quantos numeros serão digitados: ");
    for (let i = 0; i < quantNum; i++) {
        arr[i] = prompt("Digite o valor: ")
    }
    var resultado = somaArray(arr);
    console.log(resultado);
}