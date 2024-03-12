
let secao     = document.querySelector('.venda-produto');
let titulo    = document.createElement('h1');
let produto = document.createElement('div');
const preco = document.createElement('h4');
const lbPreco = document.createElement('label');

titulo.id         = 'titulo';
titulo.innerText  = 'Notebooks e PCs 2 em 1 Dell';
produto.innerHTML = `
<div> 
   <label for[produto]>Produto</label>
   <h4 name="produto">Notebook Gamer G Series</h4>

   <label for[descricao]>Descrição</label>
   <h4 name="produto">Leve seu game ao próximo nível com capacidade de resposta em fração de segundos e jogabilidade dinâmica.</h4>
`;

lbPreco.innerHTML = `<label for=[preco]>Preço</>`

preco.innerText = 'A partir de R$4.697,00'
produto.appendChild(lbPreco);
produto.appendChild(preco);
secao.appendChild(titulo);
secao.appendChild(produto)