
function calcularMedia( notas ) {
    let nota = 0;

    for(let i = 0; i < notas.length; i++) {
        nota += notas[i];
    }

    return nota / notas.length;
}

function aprovacao( notas ) {
    let media = calcularMedia( notas );

    let condicao = media >= 8 ? "Aprovado" : "Reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;
}


document.addEventListener('submit', function( evento ) {

    evento.preventDefault();
    evento.stopPropagation();

    let formulario = document.getElementById('formulario-01');

    let dados = new FormData(formulario);

    let objeto = {};

    let notas = []

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        notas.push(parseInt(dados.get(key)));
    }

    let texto = aprovacao( notas );

    document.getElementById('resultado').innerHTML = texto;

    console.log(notas);
    console.log(objeto);

});