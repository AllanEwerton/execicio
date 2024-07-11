var bt = document.querySelector('input#bnt')
bt.addEventListener('click', Contar)
function Contar(){
    var inicio = document.querySelector(`input#inicio`)
    var fim = document.querySelector(`input#fim`)
    var npulo = document.querySelector(`input#npulo`)
    var res = document.querySelector(`div#rest`)
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var np = Number(npulo.value);
    var p = i+f+np
    res.innerHTML=p
    

}