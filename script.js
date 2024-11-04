// 1-

function Calculo(){
    indice = 12;
    soma = 0;
    k = 1;

    while(k < indice){
        k = k+1;
        soma = soma+k;
    }
    console.log(soma)

}
Calculo();

//--------------------------------------------------------------

// 3- 
const FATURAMENTO_DIARIO = [98, 98.10, 23.30,0, 0, 78.55, 10.2, 2.55, 389.88]

function menorFaturamento(faturamento){
    let menor = null;

    for (let valor of faturamento) {
        if(valor > 0){
            if (menor === null || valor < menor) {
                menor = valor;
            }
        }
    };
    return menor;
}

function mairoFaturamento(faturamento){
    let maior = null;

    for (let valor of faturamento) {
        if (maior === null || valor > maior) {
            maior = valor;
        }
    };
    return maior;
}

const menorValor = menorFaturamento(FATURAMENTO_DIARIO);
const maiorValor = mairoFaturamento(FATURAMENTO_DIARIO);
console.log("Menor faturamento: R$ " + menorValor);
console.log("Maior faturamento: R$ " + maiorValor);