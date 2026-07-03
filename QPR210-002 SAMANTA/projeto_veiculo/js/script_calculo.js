let

    const calculoIPVA = (carroPagaIpva) => {
    let calculo = ''
        if(carroPagaIpva.combustivel === `gasolina`){
            calculo = carroPagaIpva.mercado *0.20;
        }else if(carroPagaIpva.combustivel === `etanol`){
            calculo = carroPagaIpva.mercado *0.15;
        }else if(carroPagaIpva.combustivel === `biocombustivel`){
            calculo = carroPagaIpva.mercado *0.10;
        }else if(carroPagaIpva.combustivel === `hibrido`){
            calculo = carroPagaIpva.mercado *0.08;
        }else if(carroPagaIpva.combustivel === `eletrico`){
            calculo = carroPagaIpva.mercado *0.02;
        }else if(anos > 20){
            calculo = 'Isento'

        }
    }

    const valorFinal = (valorFinalCarros) =>{
        let calcValor = ''

        calcValor = calculoIPVA * 0.10
    }