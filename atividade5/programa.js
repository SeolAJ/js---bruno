let valor = parseFloat(prompt('Quanto dinheiro está disponível no momento?'))
let menu = parseFloat(prompt('O saldo disponível é ' + valor +
'\n1-add'+
'\n2- subtrair'+
'\n3 - sair'))



switch(menu){
    case 1: 
        let valor2 = parseFloat(prompt('Qual o valor a ser adicionado?'))
        parseFloat(prompt('O saldo atual é ' + (valor=valor+valor2)))
    break

    case 2: 
        let valor3 = parseFloat(prompt('Qual o valor a ser subtraído?'))
        parseFloat(prompt('O saldo atual é ' + (valor=valor-valor3)))
    break

    case 3:
        alert('saiu')
    break

    default:
        alert('Erro')
    break
}   