
import { produtos } from "./produtos";

//PEGANDO ELEMENTO DO DOM
const section_cards = document.querySelector('#cards')

//FUNÇÃO PARA CARREGAR  OS PRODUTOS  
const listaProdutos = () =>{
    section_cards.innerHTML = ''

    produtos.forEach((elem, i) => {
        const divCard = document.createElement('div')
        divCard.setAttribute('class', 'card')

        const imgProduto = document.createAttribute('img')
        imgProduto.setAttribute('scr', elem.caminho_da_imagem)
        imgProduto.setAttribute('scr', elem.descricao_produto)
        imgProduto.setAttribute('class', 'img_card')

        const h2Titulo = document.createElement('h2')
        h2Titulo.innerHTML = elem.descricao_produto

        const h3Valor = document.createElement('div')
        h3Valor.setAttribute('class', 'valor_card')
        h3Valor.innerHTML `R$ ${parseFloat(elem.valor_unitario).toFixed(2).replace('.','.')}`

        const btnCard = document.createElement('button')
        btnCard.setAttribute('class', 'btn_card')
        btnCard.innerHTML = `Adicionar`

        divCard.appendChild(imgProduto)
        divCard.appendChild(h2Titulo)
        divCard.appendChild(h3Valor)
        divCard.appendChild(btnCard)

        selection_cards.appendChild(divCard)
    })
}

listarProdutos()

//FILTRANDO AS SEÇÕES COM A COLEÇÃO map
const listarSecoes = () => {
    const secoesFiltrada = new Map()

    produtos.forEach((elem, i) =>{
        secoesFiltrada.set(elem.id_secao, elem)
    })

    const secoesMenu = Array.from(secoesFiltrada.values())

    return secoesMenu
}

//MONTANDO OS LINKS SEÇÕES
const montarSecoes = () => {
    //PEGANDO O ELEMENTO DO DOM
    const ulMenu = document.querySelector('#menu-secoes')
    //LIMPANDO O ELEMENTO ulMenu
    ulMenu.innerHTML = ''

    //PERCORRENDO O ARRAY DAS SEÇÕES FILTRADAS
    listarSecoes().forEach((elem, i) => {
        //CRIANDO O ELEMENTO li
        const liSecao =document.createElement('li')

        //CRIANDO O ELEMENTO a
        const aSecao = document.createElement('a')
        aSecao.setAttribute('href', '#')
        aSecao.setAttribute('class', 'lnk-secao')
        aSecao.innerHTML = elem.nome_secao

        //CAPTURANDO O CLICK DOS LINKS
        aSecao.addEventListener('click', ()=>{
            //PARA TESTE
            console.log(elem.id_secao)
        })

        //ADICIONANDO O ELEMENTO FILHO a NO ELEMENTO li
        liSecao.appendChild(aSecao)

        //ADICIONANDO O ELEMENTO FILHO li NO ELEMENTO DOM ul
        ulMenu.appendChild(aSecao)
    })
}

montarSecoes()

//FILTRANDO PRODUTOS
const produtosFiltrados = (idSecao)=>{
    return produtos.filter(elem => elem.id_secao === idSecao)
}

//MONTANDO CARDS
const montandoCards = (objProdutos) => {
    
}