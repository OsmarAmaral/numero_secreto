let nome = prompt("Nome: ");
console.log("nome:"+nome);

let numeroMaximo = parseInt(prompt("Numero máximo: "));
console.log("numero maximo: "+numeroMaximo);

let numeroAleatorio = parseInt(Math.random() * numeroMaximo);
console.log("numero aleatorio: "+numeroAleatorio);

 let errosFrases1 = ["ops","Não Desista","Foi por pouco","Quase","Passou Perto","Não foi dessa vez"];
 let errosFrases2 = ["Bossal","Ridiculo","Desiste","Podre","Já vi melhores","Esculacho"];

function frasesMotivadoras (arr) {
    arrayAleatorio = parseInt(Math.random() * 6); 
    return arr[arrayAleatorio];
}

let tentativas=0, resposta;
for(let i=1; resposta != numeroAleatorio; i++) {
    resposta = parseInt(prompt("Numero: "));
    tentativas++;
    if(resposta == numeroAleatorio && tentativas == 1) {
        alert("parabéns "+nome+" você acertou em "+tentativas+" tentativa");
    }else if(resposta == numeroAleatorio) {
        alert("parabéns "+nome+" você acertou em "+tentativas+" tentativas");
    }else{
        //alert("Você errou tente novamente \n tentativas: "+tentativas);
        if(resposta > numeroAleatorio) {
        alert(frasesMotivadoras(errosFrases2)+" !!! Você errou tente um numero menor \n tentativas: "+tentativas); 
        }else if(resposta < numeroAleatorio) {
        alert(frasesMotivadoras(errosFrases2)+" !!! Você errou tente um numero maior \n tentativas: "+tentativas);    
        }
    }
}