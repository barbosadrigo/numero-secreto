alert('Boas Vindas ao Jogo do Número Secreto');
let NumeroMaximo = 500;
let numeroSecreto = parseInt (Math.random() * NumeroMaximo +1);
console.log(numeroSecreto);
let chute; 
let tentativa = 1;

while (chute != numeroSecreto)  {
  chute = prompt('Escolha um número entre 1 e ' +NumeroMaximo);
  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
   } else {
      //alert ('Você errou =(');
      if (chute > numeroSecreto){
        alert ('O numero secreto eh menor que ' +chute);
      } else {
        alert ('O numero secreto eh maior que ' +chute);
      }
      tentativa ++;
  }
}

let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativa + ' ' + palavraTentativa);

// if (tentativa ==1 ) {
//   alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativa + ' tentativa');
// } else {
//   alert('Isso aí! Você descobriu o número secreto ' + numeroSecreto + ' com ' + tentativa + ' tentativas');
// }


 
    

    
  