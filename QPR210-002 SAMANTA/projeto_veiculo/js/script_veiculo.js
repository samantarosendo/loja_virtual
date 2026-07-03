const carros = []

const formDados = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

formDados.addEventListener('submit', (evt) => {
    evt.proventDefault()

    //Criando o obj formData
    const veiculoDados = new FormData(formDados);

    //Add dados do carro
    const carro = {
        placa: veiculoDados.get('placa'),
        modelo: veiculoDados.get('modelo'),
        marca: veiculoDados.get('marca'),
        ano: veiculoDados.get('ano'),
        mercado: veiculoDados.get('mercado'),
        combustivel: veiculoDados.get('combustivel')
    }

    addCarro(carro)
})


    //FUNÇÃO ADD CARROS
    const addCarro = (objCarro) =>{
        carros.push(objCarro)
      listarCarros();
    }

    const listarCarros = () => {
        resultado.innerHTML = '';

        carros.forEach((elem, i) => {
            resultado.innerHTML = `${i+1} ${elem.placa} ${elem.modelo} ${elem.marca} ${elem.ano} <br>`
        })
    }