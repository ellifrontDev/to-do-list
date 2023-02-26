const addBtn = document.querySelector('.add-btn')
const removeBtn = document.querySelector('.remove-btn')
const input = document.querySelector('.input')
const ul = document.querySelector('ul')
const body = document.querySelector('body')


function view(){
    const tasks = JSON.parse(localStorage.getItem('task')) || []
    let allList = ''
    tasks.map(el => {
        allList += `<li class="list-group-item">${el.title}</li>`
    })
    ul.innerHTML = allList
}

addBtn.addEventListener('click',()=>{
    let tasks = JSON.parse(localStorage.getItem('task')) || []
    const newList = {
        id: 1,
        title: input.value,
        isDone: false
    }
    tasks = [...tasks,newList]
    localStorage.setItem('task',JSON.stringify(tasks))
    view()
})

view()


body.addEventListener('click',()=>{
    addBtn.background = randomColor()
})
addBtn.addEventListener('click', ()=> {
    addList()
    body.style.background = randomColor()
})

function addList (){
    if (input.value !== "") {
        let newList =`<li class="list-group-item d-flex justify-content-between">${input.value}
        <button class="del-btn btn-danger">delete</button></li>`
        input.value = ''
        ul.innerHTML += newList
    }
}

removeBtn.addEventListener('click',()=>{
    ul.innerHTML= ''
})

ul.addEventListener('click',(event)=>{
    if (event.target.classList.contains('del-btn')){
        event.target.parentNode.remove()
    }
})

function randomColor(){
    let list = '#'
    for (let i = 0; i < 6; i++){
        list = Math.round(Math.random()*10)
    }
    return list
}