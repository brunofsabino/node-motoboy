const btn_sair = document.querySelector('.btn-deslogar')

const menuImg = document.querySelector('.menuImg')
const aside = document.querySelector('aside')
const tagA = document.querySelectorAll('aside nav a')
const menuNav = document.querySelector('aside nav')

const areaName = document.querySelector('.area-name p')

const li = document.querySelectorAll('aside nav li')
const li1 = document.querySelector('.item1')
const li2 = document.querySelector('.item2')
const li3 = document.querySelector('.item3')
const li4 = document.querySelector('.item4')
const li5 = document.querySelector('.item5')
const areaUser = document.querySelector('.area-content-users')
const areaMotoboy = document.querySelector('.area-content-motoboys')
const areaClient = document.querySelector('.area-content-clients')
const areaRoute = document.querySelector('.area-content-routes')
const areaInvoice = document.querySelector('.area-content-invoices')

const nameUser = document.querySelector('.name')
const emailUser = document.querySelector('.email')
const passwordUser = document.querySelector('.password')
const passwordUser2 = document.querySelector('.password2')
const info = document.querySelector('.area-content-users .info')
const idUser = localStorage.getItem('id')
const buttonUpdadeUser = document.querySelector('.area-content-users button')


btn_sair.addEventListener('click', deslogar)
function deslogar() {
    localStorage.removeItem('token')
    window.location = 'index.html'
}

menuImg.addEventListener('click', openCloseMenu)

function openCloseMenu() {
    if(aside.classList.contains('menuClosed')) {
        aside.classList.add('menuOpen')
        aside.classList.remove('menuClosed')
        menuNav.style.width = '100%'
        tagA.forEach( item => {
            item.style.marginLeft = '20px'
        })
        // tagA.style.marginLeft = '0px'
    }  else if(aside.classList.contains('menuOpen')) {
        aside.classList.add('menuClosed')
        aside.classList.remove('menuOpen')
        menuNav.style.width = 'auto'
        tagA.forEach( item => {
            item.style.marginLeft = '127px'
        })
    }
    
}

function nameHeader(name){
    areaName.innerHTML = `Olá ${name}!`
}
nameHeader(areaName.innerHTML = `${localStorage.getItem('name')}!`)
nameUser.value = localStorage.getItem('name')
emailUser.value = localStorage.getItem('email')

buttonUpdadeUser.addEventListener('click', () => {
    console.log(passwordUser2.value.length)
    if(passwordUser.value.length > 0 && passwordUser2.value.length > 0 && nameUser.value.length > 0) {
        updateUser(nameUser.value, passwordUser.value, passwordUser2.value, idUser)
    } else if(nameUser.value.length > 0) {
        updateUser(nameUser.value, undefined, undefined, idUser)
    }
    
})



li.forEach( item => {
    item.addEventListener('click', c => {
        c.preventDefault()
        displayFlexDisplayNone(c.target.innerText)
    })
})
async function updateUser(name , password, password2 , id) {
    console.log(name.typeof)
    console.log(password)
    if(password === password2) {
        if(name  && password != undefined && password2 != undefined) {
            const userUpdate = await fetch(`/user/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MWZiMjUxLTk1NzYtNDY5Zi1hNjczLTAxOTIzOTlmMzUxZSIsImlhdCI6MTY2MzM1NzQyOSwiZXhwIjoxNjYzNDQzODI5fQ.XQfl85gdeiP6EWpNj3dToIwB3S-qua3WhhCvC8XA3jQ"
                },
                body: new URLSearchParams({
                    name: name ?? undefined,  password: password != undefined ? password : null
                })
            })
            const json = await userUpdate.json()
            if(json.id) {
                nameHeader(json.name)
                localStorage.setItem('name', json.name)
                info.classList.add('sucess')
                info.innerHTML = "Dados atualizados com sucesso!"
            }
        } else if(name) {
            const userUpdateName = await fetch(`/user/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`,
                    // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MWZiMjUxLTk1NzYtNDY5Zi1hNjczLTAxOTIzOTlmMzUxZSIsImlhdCI6MTY2MzM1NzQyOSwiZXhwIjoxNjYzNDQzODI5fQ.XQfl85gdeiP6EWpNj3dToIwB3S-qua3WhhCvC8XA3jQ"
                },
                body: new URLSearchParams({
                    name: name
                })
            })
            const json = await userUpdateName.json()
            if(json.id) {
                nameHeader(json.name)
                localStorage.setItem('name', json.name)
                info.classList.add('sucess')
                info.innerHTML = "Dados atualizados com sucesso!"
            }
        }
    } else {
        info.classList.add('active')
        info.innerHTML = "As senhas não conferem"
    }
    
}
function displayFlexDisplayNone(item) {
    switch(item) {
        case 'Configurações':
            alterarLiUm()
            updateHeightAside()
        break
        case 'Motoboys':
            alterarLiDois()
            updateHeightAside()
        break
        case 'Clientes':
            alterarLiTres()
            updateHeightAside()
        break
        case 'Rotas':
            alterarLiQuatro()
            updateHeightAside()
        break
        case 'Notas Fiscais':
            alterarLiCinco()
            updateHeightAside()
        break
    }
}
function updateHeightAside() {
    aside.style.height = `${100 + areaMotoboy.clientHeight}px`
    
}

function alterarLiUm(){
    li1.classList.add('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    areaUser.style.display = 'flex'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
}
function alterarLiDois(){
    li1.classList.remove('active')
    li2.classList.add('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'flex'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
}
function alterarLiTres(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.add('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'flex'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
}
function alterarLiQuatro(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.add('active')
    li5.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'flex'
    areaInvoice.style.display = 'none'
}
function alterarLiCinco(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.add('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'flex'
}