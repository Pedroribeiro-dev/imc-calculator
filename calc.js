const nome = document.getElementById('nome');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const botao = document.getElementById('botao');
const botaoRecalcular = document.getElementById('botao-recalcular');
const resultado = document.getElementById('resultado');
const inputa = document.querySelectorAll('.input');
let calc = null

const textoGrau = function (imc) {
    if (imc <= 25) {
        return `IMC:<span>${calc}</span>` + '<br>' + '<span class="span1">Parabéns você esta dentro do peso</span>';
    } else if (imc <= 30) {
        return `IMC:<span>${calc}</span>` + '<br>' + '<span class="span1">Atenção você esta com sobre peso</span>';
    } else if (imc <= 35) {
        return `IMC:<span>${calc}</span>` + '<br>' + '<span class="span1">Cuidado você esta com obesidade grau 1</span>';
    } else if (imc <= 40) {
        return `IMC:<span>${calc}</span>` + '<br>' + '<span class="span1">Cuidado você esta com obesidade grau 2</span>';
    } else if (imc > 40) {
        return `IMC:<span>${calc}</span>` + '<br>' + '<span class="span1">Cuidado você esta com obesidade grau 3</span>';
    };
};

const imc = function () {
    calc = Number.parseInt(peso.value / (altura.value ** 2));
    resultado.innerHTML = textoGrau(calc);
};

botao.addEventListener('click', () => {
    inputa.forEach((item) => {
        item.style.display = 'none'
    });
    resultado.style.display = 'flex'
    botao.style.display = 'none';
    botaoRecalcular.style.display = 'block';
    imc();
});

botaoRecalcular.addEventListener('click', () => {
    inputa.forEach((item) => {
        item.style.display = 'block'
    });
    botaoRecalcular.style.display = 'none';
    botao.style.display = 'block';
    resultado.style.display = 'none';
    nome.value = '';
    altura.value = '';
    peso.value = '';
})




