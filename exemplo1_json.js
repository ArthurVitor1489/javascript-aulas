fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data =>{
        preencherLista(data)
 })

function preencherLista(data){
    const listaConteiner = document.getElementById('lista-container')
    const ul = document.createElement('ul')
    data.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name
        ul.appendChild(li)
    });
    listaConteiner.appendChild(ul)
}