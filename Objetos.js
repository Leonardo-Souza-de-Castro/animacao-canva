const canvas = document.getElementById("teste");
const ctx = canvas.getContext("2d");
// var meu_obj = { //Isso é um objeto
//     idade: 10, // aqui dentro ficam as suas propriedades, podendo ser caracteristicas e métodos
//     altura: 1.75,

//     mostraIdade: function mostraAltura() {
//         console.log(this.idade)
//     }
// }
function desenhaQuadrado(teste) {
    ctx.beginPath();
    ctx.fillStyle = teste.cor;
    ctx.fillRect(teste.x, teste.y, teste.largura, teste.altura);
}

var retangulo = {
    x: 15,
    y: 15,
    altura: 50,
    largura: 50,
    cor: "red"
}


function movimento_left() {
    ctx.clearRect(0,0,300,300);
    retangulo.x = retangulo.x + 1;
    desenhaQuadrado(retangulo);
    // setTimeout(movimento(), 100000);
}

function movimento_right() {
    ctx.clearRect(0,0,300,300);
    retangulo.x = retangulo.x - 1;
    desenhaQuadrado(retangulo);
    // setTimeout(movimento(), 100000);
}

function movimento_up() {
    ctx.clearRect(0,0,300,300);
    retangulo.y = retangulo.y - 1;
    desenhaQuadrado(retangulo);
    // setTimeout(movimento(), 100000);
}

function movimento_dowm() {
    ctx.clearRect(0,0,300,300);
    retangulo.y = retangulo.y + 1;
    desenhaQuadrado(retangulo);
    // setTimeout(movimento(), 100000);
}

document.addEventListener("keydown", function(params) {
    let tecla = params.key

    if (tecla == "d"){
        movimento_left()
    }
    if (tecla == "a"){
        movimento_right()
    }
    if (tecla == "w"){
        movimento_up()
    }
    if (tecla == "s"){
        movimento_dowm()
    }
})