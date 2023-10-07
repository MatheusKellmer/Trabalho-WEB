var verifyCasa = false;
var verifyAp = false;
var imoveis = [];
var imoveisSalvos = [];
var indexEditar = null;

class Imovel {
    constructor(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, tipo, imagem) {
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cep = cep;
        this.titulo = titulo;
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.garagem = garagem;
        this.preco = preco;
        this.tipo = tipo;
        this.imagem = imagem;
    }
}


class Casa extends Imovel {
    constructor(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, tipo, imagem, areaTerreno, areaConstruida) {
        super(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, tipo, imagem);
        this.areaTerreno = areaTerreno;
        this.areaConstruida = areaConstruida;
    }
}

class Apartamento extends Imovel {
    constructor(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, tipo, imagem, metragem, condominio) {
        super(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, tipo, imagem);
        this.metragem = metragem;
        this.condominio = condominio;
    }
}

function funCasa() {
    verifyCasa = true;
    verifyApp = false;

    let casa = document.getElementById('liCasa')
    casa.style.backgroundColor = 'black';
    casa.style.color = 'white';

    let ap = document.getElementById('liAp')
    ap.style.backgroundColor = 'white'
    ap.style.color = 'black';

    let metragem = document.getElementById('inputMetragem')
    metragem.value = '';
    metragem.disabled = true;

    let condominio = document.getElementById('inputCondominio')
    condominio.value = '';
    condominio.disabled = true;

    let areaConstruida = document.getElementById('inputAreaConstruida')
    areaConstruida.disabled = false;

    let areaTerreno = document.getElementById('inputAreaTerreno')
    areaTerreno.disabled = false;
    limpar();
}

function funAp() {

    verifyCasa = false;
    verifyAp = true;

    let casa = document.getElementById('liCasa')
    casa.style.backgroundColor = 'white';
    casa.style.color = 'black';

    let ap = document.getElementById('liAp')
    ap.style.backgroundColor = 'black'
    ap.style.color = 'white';


    let metragem = document.getElementById('inputMetragem')
    metragem.disabled = false;

    let condominio = document.getElementById('inputCondominio')
    condominio.disabled = false;

    let areaConstruida = document.getElementById('inputAreaConstruida')
    areaConstruida.value = '';
    areaConstruida.disabled = true;

    let areaTerreno = document.getElementById('inputAreaTerreno')
    areaTerreno.value = '';
    areaTerreno.disabled = true;
    limpar()
}


function salvar() {
    let rua = document.querySelector('#inputRua').value;
    let bairro = document.querySelector('#inputBairro').value;
    let quartos = document.querySelector('#inputQuartos').value;
    let garagem = document.querySelector('#inputGaragem').value;
    let numero = document.querySelector('#inputNumero').value;
    let cep = document.querySelector('#inputCep').value;
    let banheiros = document.querySelector('#inputBanheiros').value;
    let preco = document.querySelector('#inputPreco').value;
    let titulo = document.querySelector('#inputTitulo').value;
    let imagem = document.querySelector('#inputImagem').value;

    if (verifyCasa) {
        let areaConstruida = document.getElementById('inputAreaConstruida').value;
        let areaTerreno = document.getElementById('inputAreaTerreno').value;
        let casaLocal = new Casa(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, 'casa', imagem, areaTerreno, areaConstruida);
        imoveis.push(casaLocal);
        imoveisSalvos = localStorage.setItem('imovel', JSON.stringify(imoveis));

    } else {
        let metragem = document.getElementById('inputMetragem').value;
        let condominio = document.getElementById('inputCondominio').value;
        let apLocal = new Apartamento(rua, numero, bairro, cep, titulo, quartos, banheiros, garagem, preco, 'apartamento', imagem, metragem, condominio)
        imoveis.push(apLocal);
        imoveisSalvos = localStorage.setItem('imovel', JSON.stringify(imoveis));
    }

    let cartao = document.createElement('div');
    let title = document.createElement('h3');
    let prua = document.createElement('p');
    let pbairro = document.createElement('p');
    let pquartos = document.createElement('p');
    let pgaragem = document.createElement('p');
    let pnnumero = document.createElement('p');
    let pcep = document.createElement('p');
    let pbanheiros = document.createElement('p');
    let ppreco = document.createElement('p');
    let pclass1 = document.createElement('p');
    let pclass2 = document.createElement('p');


    let img = document.createElement('img');
    img.classList.add('imgUser')
    img.setAttribute('src', imagem);

    title.textContent = titulo;
    prua.textContent = 'Rua: ' + rua;
    pbairro.textContent = 'Bairro: ' + bairro;
    pquartos.textContent = 'Quartos: ' + quartos;
    pgaragem.textContent = 'Garagem: ' + garagem;
    pnnumero.textContent = 'Número: ' + numero;
    pcep.textContent = 'Cep: ' + cep;
    pbanheiros.textContent = 'Banheiros: ' + banheiros;
    preco.textContent = 'Preco: ' + preco;

    title.classList.add('col-md-12');
    prua.classList.add('col-md-6');
    pbairro.classList.add('col-md-6');
    pquartos.classList.add('col-md-6');
    pgaragem.classList.add('col-md-6');
    pnnumero.classList.add('col-md-6');
    pcep.classList.add('col-md-6');
    pbanheiros.classList.add('col-md-6');
    ppreco.classList.add('col-md-6');
    pclass1.classList.add('col-md-6');
    pclass2.classList.add('col-md-6');


    if(!verifyCasa){
        let metragem = document.getElementById('inputMetragem').value;
        let condominio = document.getElementById('inputCondominio').value;
        pclass1.textContent = 'Condomínio: ' + condominio
        pclass2.textContent = 'Metragem: ' + metragem
    }else{
        let areaConstruida = document.getElementById('inputAreaConstruida').value;
        let areaTerreno = document.getElementById('inputAreaTerreno').value;
        pclass1.textContent = 'Terreno: ' + areaTerreno
        pclass2.textContent = 'Construida: ' + areaConstruida
    }

    cartao.appendChild(title);
    cartao.appendChild(prua);
    cartao.appendChild(pbairro);
    cartao.appendChild(pquartos);
    cartao.appendChild(pgaragem);
    cartao.appendChild(pnnumero);
    cartao.appendChild(pcep);
    cartao.appendChild(pbanheiros);
    cartao.appendChild(ppreco);
    cartao.appendChild(pclass1);
    cartao.appendChild(pclass2);
    cartao.appendChild(img);

    cartao.classList.add('cartao');
    cartao.classList.add('row')

    document.querySelector("#divSalvos").appendChild(cartao);

    let Excluir = document.createElement('button');
    Excluir.textContent = 'Excluir';
    Excluir.addEventListener('click', excluir);

    cartao.appendChild(Excluir);

    let Editar = document.createElement('button');
    Editar.textContent = 'Editar';
    Editar.addEventListener('click', editar);

    cartao.appendChild(Editar);

    Excluir.classList.add('btn');
    Editar.classList.add('btn')

    limpar();
}

window.onload = function () {
    carregaSalvos();
    funCasa();
}


function limpar() {
    document.querySelector('#inputRua').value = '';
    document.querySelector('#inputBairro').value = '';
    document.querySelector('#inputQuartos').value = '';
    document.querySelector('#inputGaragem').value = '';
    document.querySelector('#inputNumero').value = '';
    document.querySelector('#inputCep').value = '';
    document.querySelector('#inputBanheiros').value = '';
    document.querySelector('#inputPreco').value = '';
    document.querySelector('#inputTitulo').value = '';
    document.getElementById('inputAreaConstruida').value = '';
    document.getElementById('inputAreaTerreno').value = '';
    document.getElementById('inputMetragem').value = '';
    document.getElementById('inputCondominio').value = '';
}

function excluir(event) {
    console.log('event', event.target.parentElement);
    let cartao = event.target.parentElement
    let index = Array.from(cartao.parentElement.children).indexOf(cartao);
    
    imoveis.splice(index, 1);
    imoveisSalvos = localStorage.setItem('imovel', JSON.stringify(imoveis));
    
    cartao.remove();
}

function editar(event) {
    let cartao = event.target.parentElement
    let index = Array.from(cartao.parentElement.children).indexOf(cartao);
    indexEditar = index;
    console.log('editar',  imoveis[index])

    if(imoveis[index].tipo == 'casa'){
        funCasa();
        document.getElementById('inputAreaConstruida').value = imoveis[index].areaConstruida;
        document.getElementById('inputAreaTerreno').value = imoveis[index].areaTerreno;
    }else{
        funAp();
        document.getElementById('inputMetragem').value = imoveis[index].metragem;
        document.getElementById('inputCondominio').value = imoveis[index].condominio;
    }

    document.querySelector('#inputRua').value = imoveis[index].rua;
    document.querySelector('#inputBairro').value = imoveis[index].bairro;
    document.querySelector('#inputQuartos').value = imoveis[index].quartos;
    document.querySelector('#inputGaragem').value = imoveis[index].garagem;
    document.querySelector('#inputNumero').value = imoveis[index].numero;
    document.querySelector('#inputCep').value = imoveis[index].cep;
    document.querySelector('#inputBanheiros').value = imoveis[index].banheiros;
    document.querySelector('#inputPreco').value = imoveis[index].preco;
    document.querySelector('#inputTitulo').value = imoveis[index].titulo;
    document.querySelector('#inputImagem').value = imoveis[index].imagem;

   let btn =  document.querySelector('#btnEditar');
   btn.disabled = false;
   btn.style.backgroundColor = 'black';
    
}


function confirmarEditar(){

    imoveis[indexEditar].rua = document.querySelector('#inputRua').value;
    imoveis[indexEditar].bairro = document.querySelector('#inputBairro').value;
    imoveis[indexEditar].quartos = document.querySelector('#inputQuartos').value;
    imoveis[indexEditar].garagem = document.querySelector('#inputGaragem').value;
    imoveis[indexEditar].numero = document.querySelector('#inputNumero').value;
    imoveis[indexEditar].cep = document.querySelector('#inputCep').value;
    imoveis[indexEditar].banheiros = document.querySelector('#inputBanheiros').value;
    imoveis[indexEditar].preco = document.querySelector('#inputPreco').value;
    imoveis[indexEditar].titulo = document.querySelector('#inputTitulo').value;
    imoveis[indexEditar].imagem = document.querySelector('#inputImagem').value;

    localStorage.setItem('imovel', JSON.stringify(imoveis))
    window.location.reload()
//    let btn =  document.querySelector('#btnEditar');
//    btn.disabled = true;
//    btn.style.backgroundColor = 'silver';
//    limpar();
}


function carregaSalvos() {
    imoveisSalvos = JSON.parse(localStorage.getItem('imovel'));

    console.log('imoveis salvos', imoveisSalvos)

    if (imoveisSalvos != null && imoveisSalvos.length > 0) {
        imoveis = imoveisSalvos;
        imoveisSalvos.forEach(element => {

            let cartao = document.createElement('div');
            let title = document.createElement('h3');
            let prua = document.createElement('p');
            let pbairro = document.createElement('p');
            let pquartos = document.createElement('p');
            let pgaragem = document.createElement('p');
            let pnnumero = document.createElement('p');
            let pcep = document.createElement('p');
            let pbanheiros = document.createElement('p');
            let ppreco = document.createElement('p');
            let pclass1 = document.createElement('p');
            let pclass2 = document.createElement('p');
            let img = document.createElement('img');
            img.classList.add('imgUser')
            img.setAttribute('src', element.imagem);

            title.textContent = element.titulo;
            prua.textContent = 'Rua: ' + element.rua;
            pbairro.textContent = 'Bairro: ' + element.bairro;
            pquartos.textContent = 'Quartos: ' + element.quartos;
            pgaragem.textContent = 'Garagem: ' + element.garagem;
            pnnumero.textContent = 'Número: ' + element.numero;
            pcep.textContent = 'Cep: ' + element.cep;
            pbanheiros.textContent = 'Banheiros: ' + element.banheiros;
            ppreco.textContent = 'Preco: ' + element.preco;
  
            

            title.classList.add('col-md-12');
            prua.classList.add('col-md-6');
            pbairro.classList.add('col-md-6');
            pquartos.classList.add('col-md-6');
            pgaragem.classList.add('col-md-6');
            pnnumero.classList.add('col-md-6');
            pcep.classList.add('col-md-6');
            pbanheiros.classList.add('col-md-6');
            ppreco.classList.add('col-md-6');
            pclass1.classList.add('col-md-6');
            pclass2.classList.add('col-md-6');

            if(!verifyCasa){
                let metragem = document.getElementById('inputMetragem').value;
                let condominio = document.getElementById('inputCondominio').value;
                pclass1.textContent = 'Condomínio: ' + condominio
                pclass2.textContent = 'Metragem: ' + metragem
            }else{
                let areaConstruida = document.getElementById('inputAreaConstruida').value;
                let areaTerreno = document.getElementById('inputAreaTerreno').value;
                pclass1.textContent = 'Terreno: ' + areaTerreno
                pclass2.textContent = 'Construida: ' + areaConstruida
            }

            cartao.appendChild(title);
            cartao.appendChild(prua);
            cartao.appendChild(pbairro);
            cartao.appendChild(pquartos);
            cartao.appendChild(pgaragem);
            cartao.appendChild(pnnumero);
            cartao.appendChild(pcep);
            cartao.appendChild(pbanheiros);
            cartao.appendChild(ppreco);
            cartao.appendChild(pclass1);
            cartao.appendChild(pclass2);
            cartao.appendChild(img)

    

            cartao.classList.add('cartao');
            cartao.classList.add('row')

            document.querySelector("#divSalvos").appendChild(cartao);

            let Excluir = document.createElement('button');
            Excluir.textContent = 'Excluir';
            Excluir.addEventListener('click', excluir);

            cartao.appendChild(Excluir);

            let Editar = document.createElement('button');
            Editar.textContent = 'Editar';
            Editar.addEventListener('click', editar);

            cartao.appendChild(Editar);

            Excluir.classList.add('btn');
            Editar.classList.add('btn');


        });
    }
}

