const erAno = document.getElementById('erAno');
const erMes = document.getElementById('erMes');
const erDia = document.getElementById('erDia');
const resAno = document.querySelector('.resAno')
const resMes = document.querySelector('.resMes');
const resDia = document.querySelector('.resDia');
const botao = document.querySelector('.botao');
const enDia = document.getElementById('dia');
const enMes = document.getElementById('mes');
const enAno = document.getElementById('ano');
const erroEntrada = 'Este campo é necessário';
const diaErr = 'Insira um dia válido';
const mesErr = 'Insira um mês válido';
const anoErr = 'O Ano tem que ser Menor que o atual';


function EntradaDia() {
    let valor = enDia.value;
    if(valor == '')
    {
        erDia.innerHTML = erroEntrada;
        return false;
    }
    else if(valor < 1 || valor > 31)
    {
        erDia.innerHTML = diaErr;
        return false;
    }
    else {
        erDia.innerHTML = '';
        return true;
    }
}

function EntradaMes() {
    let valor = enMes.value;
    if(valor == '')
    {
        erMes.innerHTML = erroEntrada;
        return false;
    }
    else if(valor < 1 || valor > 12)
    {
        erMes.innerHTML = mesErr;
        return false;
    }
    else {
        erMes.innerHTML = '';
        return true;
    }
}

function EntradaAno() {
    let valor = enAno.value;
    let anoAtual = new Date().getFullYear();
    console.log(anoAtual);
    if(valor == '')
    {
        erAno.innerHTML = erroEntrada;
        return false;
    }
    else if(valor > anoAtual)
    {
        erAno.innerHTML = anoErr;
        return false;
    }
    else {
        erAno.innerHTML = '';
        return true;
    }
}

function calculoIdade(aniversario) {
    var dataniver = new Date(aniversario);
    var today = new Date();

    var anos = today.getFullYear() - dataniver.getFullYear();
    var meses = today.getMonth() - dataniver.getMonth();
    var dias = today.getDate() - dataniver.getDate();

    if (meses < 0 || (meses === 0 && dias < 0)) {
        anos--;
        if (meses === 0) {
            mrdrd = 11;
        } else {
            meses = 12 + meses;
        }
        dias = 30 + dias;
    }
    resAno.innerHTML = anos;
    resMes.innerHTML = meses;
    resDia.innerHTML = dias;
}

botao.addEventListener('click', function(e) {
    e.preventDefault();
    let dia = EntradaDia();
    let mes =  EntradaMes();
    let ano = EntradaAno();
    if(!dia || !mes || !ano) return
    let aniversario = `${enMes.value}/${enDia.value}/${enAno.value}`;

    calculoIdade(aniversario);

})