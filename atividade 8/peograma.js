// array para armazenar os imóveis cadastrados
let imoveis = [];

// função para cadastrar um novo imóvel
function cadastrarImovel(e) {
    e.preventDefault(); // previne o comportamento padrão do formulário

    // recupera os valores do formulário
    let titulo = document.getElementById('titulo').value;
    let descricao = document.getElementById('descricao').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let pais = document.getElementById('pais').value;
    let tipo = document.getElementById('tipo').value;
    let preco = document.getElementById('preco').value;
    let quartos = document.getElementById('quartos').value;
    let banheiros = document.getElementById('banheiros').value;
    let area_construida = document.getElementById('area_construida').value;
    let area_total = document.getElementById('area_total').value;

    // cria um objeto com os dados do novo imóvel
    let imovel = {
        titulo: titulo,
        descricao: descricao,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        pais: pais,
        tipo: tipo,
        preco: preco,
        quartos: quartos,
        banheiros: banheiros,
        area_construida: area_construida,
        area_total: area_total
    };

    // adiciona o novo imóvel ao array de imóveis
    imoveis.push(imovel);

    // atualiza a lista de imóveis
    atualizarListaImoveis();

    // limpa os campos do formulário
    document.getElementById('titulo').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('pais').value = '';
    document.getElementById('tipo').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('quartos').value = '';
    document.getElementById('banheiros').value = '';
    document.getElementById('area_construida').value = '';
    document.getElementById('area_total').value = '';
}

// função para atualizar a lista de imóveis
function atualizarListaImoveis() {
    // recupera o elemento HTML onde a lista de imóveis será exibida
    let lista = document.getElementById('imoveis-lista');

    // limpa a lista
    lista.innerHTML = '';

    // itera sobre o array de imóveis e cria um elemento HTML para cada um
    imoveis.forEach(function (imovel) {
        let item = document.createElement('div');
        item.innerHTML = '<h3>' + imovel.titulo + '</h3><p>' + imovel.descricao + '</p><p>' + imovel.endereco + ', ' + imovel.cidade + ', ' + imovel.estado + ', ' + imovel.pais + '</p><p>Tipo: ' + imovel.tipo + '</p><p>Preço: R$ ' + imovel.preco + '</p><p>Número de Quartos: ' + imovel.quartos + '</p><p>Número de Banheiros: ' + imovel.banheiros + '</p><p>Área Construída: ' + imovel.area_construida + ' m²</p><p>Área Total: ' + imovel.area_total + '
