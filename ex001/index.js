function carregar(){
var hora = new Date();
var agora = hora.getHours();
var inf = document.querySelector('div#inf')
var msg = document.querySelector('div#msg')
var img = document.getElementById(`foto`)
inf.innerHTML = `Agora são exatamente ${agora} horas`

if(agora>= 5 && agora<12){
    document.body.style.background = '#4c83d5ff'
    img.src ='img/dia.png'
    msg.innerHTML = 'Bom dia &#x1F603'
}else if(agora>= 12 && agora<18){
    document.body.style.background = '#fdb000ff'
    img.src ='img/tarde.png'
    msg.innerHTML = 'Boa tarde &#x1F603'
}else if(agora>=18 || agora<5){
    document.body.style.background = '#00113fff'
    img.src ='img/noite.png'
    msg.innerHTML = 'Boa noite &#x1F603'
}
}
