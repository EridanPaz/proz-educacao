/*let elementoH1 = document.querySelector('h1');
elementoH1.innerText = 'Novo título com JS'

console.log(elementoH1);
console.log(elementoH1.innerText);

let elementoMain = document.querySelector('main');
console.log(elementoMain);
console.log(elementoMain.innerText);
console.log(elementoMain.innerHTML);

elementoMain.innerHTML =`
<h2>Novo subtítulo <h2>
<ul>
   <li>Elemento de lista JS 01</li>
   <li>Elemento de lista JS 02</li>
   <li>Elemento de lista JS 03</li>
</ul>
`
*/
 let elementoH1       = document.getElementById('titulo');
 elementoH1.innerText = 'Título do exercício';

 let elementoA       = document.querySelector('a');
 elementoA.innerText = 'Proz Educação';

 let elementoUl = document.querySelector('ul');
 elementoUl.innerHTML = `
 <ul>
   <li>Elmento simples via JS 01</li>
   <li>Elmento simples via JS 02</li>
   <li>Elmento simples via JS 03</li>
</ul>
 `

 let elementoOl = document.getElementById('lista-ordenada');
 elementoOl.innerHTML = `
 <ol>
   <li>
      <a href="https://prozeducacao.com.br">Proz Educação</a>
   </li>

   <li>
      <a href="https://talentocloud.joyclass.com">Talento Cloud</a>
   </li>

   <li>
      <a href="https://revistaforum.com.br">Revista Fórum</a>
   </li>
 </ol>
 `