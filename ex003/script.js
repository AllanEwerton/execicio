var bt = document.querySelector('input#bnt')
bt.addEventListener('click', Contar)
function Contar(){
    var inicio = document.querySelector(`input#inicio`)
    var fim = document.querySelector(`input#fim`)
    var npulo = document.querySelector(`input#npulo`)
    var spinner = document.querySelector('.spinner-border');
    var res = document.querySelector(`div#rest`)
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var np = Number(npulo.value);
    spinner.style.display = 'none'
        if (isNaN(i) || isNaN(f) || isNaN(np) || np <= 0) {
            window.alert('Erro!!! Verifique as informações e tente novamente.');
            return;
        }else{
        bt.disabled = true;
        spinner.style.display = 'block';
        res.innerHTML = '';
        setTimeout(function() {
            if (i < f) {
                // Contagem crescente
                for (var n = i; n <= f; n += np) {
                    res.style.display = 'block'
                    res.style.boxShadow = '5px 5px 2px  rgba(0, 0, 0, 0.486)';
                    res.style.backgroundColor = 'white';
                    res.innerHTML += n + ', ';
                }
            } else {
                for (var n = i; n >= f; n -= np) {
                    res.style.display = 'block'
                    res.style.boxShadow = '5px 5px 2px  rgba(0, 0, 0, 0.486)';
                    res.style.backgroundColor = 'white';
                    res.innerHTML += n + ', ';
                }
            }
            spinner.style.display = 'none'; 
            bt.disabled = false;
        }, 1000); 
        res.style.display='none';
            res.style.box-shadow;'none';
        }
    }