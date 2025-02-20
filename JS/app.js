//const li = document.createElement ('li')
//li.innerHTML = 'Pascal'
//li.className = 'list-group-item'

//const ul = document.querySelector ('ul')
//ul.appendChild (li)

const btn1 = document.querySelector ('#f')
btn1.addEventListener ('click', ()=> {
    let input = document.querySelector ('input')
    if (input.value != 0) {
    const li = document.createElement ('li')
    li.innerHTML = input.value
    li.className = 'list-group-item'

    const btn = document.createElement ('button')
    btn.className = 'btn btn-danger'
    btn.innerHTML = 'Удалить'

    const ul = document.querySelector ('ul')
    ul.appendChild (li)

    li.appendChild (btn)

    document.querySelector ('input').value = ''
}})
