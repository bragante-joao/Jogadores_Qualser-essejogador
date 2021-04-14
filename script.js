console.log('Atualização 3!')
var hosteltex = document.getElementById("ea")
var hosteltex2 = document.getElementById("oea")
var nomeJogador, oJogador
var textovalor = document.getElementById("tentativa")
var arrayJogadores = createArrayPlayer();
var acabou = false
function createPlayer() {

  setTimeout(() => {
    oJogador = jogadores[arrayJogadores[0]];
    console.log(oJogador)
    hostelima.src = oJogador.img
    hosteltex.innerText = ''
    hosteltex2.innerText = ''
    textovalor.value = ''

  }, 730)
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
        FinalizarJogoDerrota()

  }
}

function createArrayPlayer() {
  var array = []


  var m = 9

  while (m > 0) {
    array.push(m)
    m--
    if (array.length >= 5){
      break
    }
  }

  var m = array.length, t, i;


  while (m > 0) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;

  }
  console.log(array)
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
    var comecarDeNovo = document.createElement('a')
    body.appendChild(comecarDeNovo)
    comecarDeNovo.setAttribute('id', 'jgr')
    comecarDeNovo.innerHTML = '<a href="index.html">Jogar Novamente!<a>'
  }, 750)

}
function FinalizarJogoDerrota(){
  var jogo = document.getElementById("jogo")
  var body = document.body
  var respostaFinal = document.getElementById("rf")
  var jogo = document.getElementById("jogo")

  setTimeout(() => {
    respostaFinal.removeChild(jogo)
    var titulo = document.createElement('h2')
    body.appendChild(titulo)
    titulo.setAttribute('id', 'gg');
    titulo.innerHTML = 'Puts, você errou tenta mais uma vez aí : '
    var comecarDeNovo = document.createElement('a')
    body.appendChild(comecarDeNovo)
    comecarDeNovo.setAttribute('id', 'jgr')
    comecarDeNovo.innerHTML = '<a href="index.html">Tentar Novamente!<a>'

  },2000)
}
document.addEventListener("keydown", function (event) {

  var teclado = event.keyCode
  if (teclado == 13) {
    conclui()
  }

})
console.log(',m3')
