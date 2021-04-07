var hosteltex = document.getElementById("ea")
var hosteltex2 = document.getElementById("oea")
var nomeJogador, oJogador
var textovalor = document.getElementById("tentativa")
var arrayJogadores = createArrayPlayer();

function createPlayer() {


  setTimeout(() => {
    oJogador = jogadores[arrayJogadores[0]];
    console.log(oJogador)
    hostelima.src = oJogador.img
    hosteltex.innerText = ''
    hosteltex2.innerText = ''
    textovalor.value = ''

  }, 230)


}
createPlayer()
//var segundoRetorno = GetPlayer()
function conclui() {

  var Verficacao = oJogador.nome.indexOf(textovalor.value.toLowerCase())

  if (Verficacao > -1) {

    hosteltex.innerText = 'Você acertou!'
    hosteltex2.innerText = ''
    arrayJogadores.shift();
    createPlayer();
    if (arrayJogadores.length == 0) {
      FinalizarJogo()
    }
  }

  else {
    hosteltex2.innerText = `Você errou!`
    hosteltex.innerText = ''


  }
}

function createArrayPlayer() {
  var array = []


  var m = 7

  while (m > 0) {
    array.push(m)
    m--
  }

  var m = array.length, t, i;


  while (m > 0) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;

  }
  return array

}
function GetPlayer() {

  nomeJogador = buscarNome(array[0])
  conclui()
}

function FinalizarJogo() {
  var body = document.body
  var respostaFinal = document.getElementById("rf")
  var jogo = document.getElementById("jogo")
  respostaFinal.removeChild(jogo)
  setTimeout(() => {
    var titulo = document.createElement('h2')
    body.appendChild(titulo)
    titulo.setAttribute('id', 'gg');
    titulo.innerHTML = 'Você ganhou parabéns,você realmente entende de futebol.'
  }, 750)
}
document.addEventListener("keydown", function (event) {

  var teclado = event.keyCode
  if (teclado == 13) {
    conclui()

  }

})


