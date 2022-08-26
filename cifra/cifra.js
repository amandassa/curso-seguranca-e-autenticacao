const senhaSecreta = "alura";

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagemCifrada = cifrarMensagem(senhaSecreta, 4);

console.log(mensagemCifrada)