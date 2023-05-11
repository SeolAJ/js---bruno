let imoveis = []
let opcao = ''

while (opcao != "3") {

    opcao = prompt(`Bem vindo ao Cadastro de Imoveis
    
    total de Imoveis: $(imoveis.leght)
        
    1-cadastrar imovel
    
    2-listar imoveis
    
    3-sair`)

    switch (opcao) {
        case '1':
            imovel.prompt('Digite o nome do proprietário:')
            imovel.prompt('Digite a quantidade de quartos:')
            imovel.prompt('Digite a quantidade de banheiros:')
            imovel.prompt('Tem garagem? S/N?')

            const confirm = confirm(`Salvar imovel?'
        Proprietario: ${
                imovel.proprietario
            }
        Quartos: ${
                imovel.quartos
            }
        Banheiros: ${
                imovel.banheiros
            }
        Garagem: ${
                imovel.garagem
            }`)

            if (confirm) {
                imoveis.push(imovel)
            }
            break
        case '2':
            for (let i; i < imoveis.length; i++) {
                alert(`
            Proprietario: ${
                    imoveis[i].proprietario
                }
            Quartos: ${
                    imoveis[i].quartos
                }
            Banheiros: ${
                    imoveis[i].banheiros
                }
            Garagem: ${
                    imoveis[i].garagem
                }`)
            }


            break
        case '3':
            alert('Saindo do sistema...')
            break
        default:
            alert('Opção inválida do menu')
            break
    }
}

