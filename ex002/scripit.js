var bt = document.querySelector('input#bt')
bt.addEventListener('click', Calcular)
function Calcular(){
    var inf = document.querySelector('p#inf')
    var ps = document.querySelector('input#Peso')
    var alt = document.querySelector('input#Altura')
    var img = document.getElementById('foto')
    var p = Number(ps.value)
    var a = Number(alt.value)
    var imc = p/a**2
    var imc_f = imc.toFixed(2)
    if(!isNaN(p)  && !isNaN(a)){
        if(imc <18.5){
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Você está abaixo do peso. Que tal procurar um nutricionista para dar uma força?`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }else if(imc>=18.5 && imc <25){
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Peso ideal! Mantenha o bom trabalho com alimentação e exercícios.`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }else if(imc>=25 && imc<30){
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Você está com sobrepeso. Talvez seja hora de rever a dieta e fazer mais exercícios.`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }else if(imc >= 30 && imc <35){
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Obesidade grau I. Vamos cuidar disso com ajuda de um profissional?`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }else if(imc >= 35 && imc<40){
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Obesidade grau II. Procure um médico para um plano de ação.`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }else{
            inf.innerHTML= `Seu <strong>IMC</strong> é: ${imc_f}. Obesidade grau III. É importante buscar ajuda médica agora.`
            img.src ='img/zello_saudedoenca-removebg-preview (1).png'
        }
    }else{
        inf.innerHTML=`<strong>Erro</strong> verifique as informações e tente novamente`
    }
}