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
const mesAno = 'A data tem que ser inferior a atual'


function EntradaDia() {
    let vDia = enDia.value;
    if(vDia == '')
    {
        erDia.innerHTML = erroEntrada;
        return false;
    }
    else if(vDia < 1 || vDia > 31)
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
    let vMes = enMes.value;
    let vDia =enDia.value;
    let dtrinta =(04, 06, 09, 11);
    if(vMes == '')
    {
        erMes.innerHTML = erroEntrada;
        return false;
    }
    else if(vMes < 1 || vMes > 12)
    {
        erMes.innerHTML = mesErr;
        return false;
    }else if (vMes == 02 && vDia >=29){
        erDia.innerHTML = diaErr;
        return false;
    }
    
    else if (vMes == dtrinta && vDia >30 ) {
        erDia.innerHTML = diaErr;
        return false;
    }
    else {
        erMes.innerHTML = '';
        return true;
    }
}

function EntradaAno() {
    let vAno = enAno.value;
    let anoAtual = new Date().getFullYear();
    if(vAno == '')
    {
        erAno.innerHTML = erroEntrada;
        return false;
    }
    else if(vAno > anoAtual)
    {
        erAno.innerHTML = anoErr;
        return false;
    }else {
        erAno.innerHTML = '';
        return true;
    }
}

function calculoIdade(aniversario) {
    var dataniver = new Date(aniversario);
    var hoje = new Date();

    var anos = hoje.getFullYear() - dataniver.getFullYear();
    var meses = hoje.getMonth() - dataniver.getMonth();
    var dias = hoje.getDate() - dataniver.getDate();
    

    if (meses === 0 && dias < 0) {
        anos--;
        if (meses === 0) {
            meses = 11; /*mrdrd */
        } 
        else {
            meses = 12 + meses;
        }
        dias = 30 + dias;
    } else if (meses < 0 && anos <=0){
        erAno.innerHTML = mesAno;
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