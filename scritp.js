           
const campoAno = document.querySelector('#campoAno');
const btnBuscarAno  = document.querySelector('#btnBuscar');
const ul = document.querySelector('#lista-feriados');

function popularFeriados(feriadosDados){
    ul.innerHTML = '';
    feriadosDados.forEach(feriado =>{
        let li = document.createElement('li');
        let h4 = document.createElement('h4');
        let p = document.createElement('p');

        h4.innerText = feriado.date.split("-").reverse().join('/');
        p.innerText = feriado.name;

        li.appendChild(h4);
        li.appendChild(p);

        ul.appendChild(li);


    })

}


btnBuscarAno.addEventListener('click' , function(){

    const anoValor = campoAno.value;
    const messageError = document.querySelector('.erro');

    messageError.innerHTML = '';

    if(anoValor <= 0 || anoValor < 1900 || anoValor > 2199){
       messageError.innerHTML = "Ano inválido insira um ano entre 1900 e 2199";
       return;
    }

    const URL = `https://brasilapi.com.br/api/feriados/v1/${anoValor}`;
    
    fetch(URL)
        .then(function(response){
        return response.json();
        })
        .then(function(dados){
            console.log(dados);
            popularFeriados(dados);
        })
        .catch(function(erro) {
            console.log(erro);
        })

})