let clientes = [
    {
        nome: 'Rodrigo',
        idade: 21,
        linguagens: ['C#, JavaScript, HTML']
    },
    {
        nome: 'Yngrid',
        idade: 19,
        linguagens: ['Amor', 'Python', 'Rust']
    },
    {
        nome: 'Hugo',
        idade: 24,
        linguagens: ['Java', 'Kotlin', 'R']
    } 
]

let htmlClientes = ''

for (let cliente of clientes){

    let listalinguagens = ''

    for (let linguagem of cliente.linguagens){
        listalinguagens += `<li>${linguagem}</li>`
    }

    htmlClientes += `<li>
        <b>Nome:</b> ${cliente.nome}<br>
        <b>Idade:</b> ${cliente.idade} <br>
        <b>Linguagens</b><br>
        <ul>
            ${listalinguagens}
        </ul>
        </li>`

}
document.querySelector('#listaClientes').innerHTML = htmlClientes