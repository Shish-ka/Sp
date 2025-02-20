//const li = document.createElement ('li')
//li.innerHTML = 'Pascal'
//li.className = 'list-group-item'

//const ul = document.querySelector ('ul')
//ul.appendChild (li)

const btn = document.querySelector ('#f')
btn.addEventListener ('click', ()=> {
    let input = document.querySelector ('input')
    if (input.value != 0) {
    const li = document.createElement ('li')
    li.innerHTML = input.value
    li.className = 'list-group-item'
    const ul = document.querySelector ('ul')
    ul.appendChild (li)}
    document.querySelector ('input').value = ''
})


