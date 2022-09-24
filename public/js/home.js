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

const tagUlMotoboys = document.querySelector('.area-motoboys ul')

const buttonOpenModalBoy = document.querySelector('.btn-add-motoboy')
const modalMotoboy = document.querySelector('.area-motoboys-modal')
const closeModal = document.querySelector('.area-modal-exit')
const buttonAddMotoboy = document.querySelector('.area-modal-submit button')

const nameMotoboy = document.querySelector('.name-motoboy')
const emailMotoboy = document.querySelector('.email-motoboy')
const celularMotoboy = document.querySelector('.celular-motoboy')
const addressMotoboy = document.querySelector('.address-motoboy')
const rgMotoboy = document.querySelector('.rg-motoboy')
const cpfMotoboy = document.querySelector('.cpf-motoboy')
const numberBoardMotoboy = document.querySelector('.numberBoard-motoboy')
const cityBoardMotoboy = document.querySelector('.cityBoard-motoboy')
const infoModal = document.querySelector('.modal-info')



buttonOpenModalBoy.addEventListener('click', openModal)
closeModal.addEventListener('click', functionCloseModal)
buttonAddMotoboy.addEventListener('click', () => {
    functionAddMotoboy(nameMotoboy.value, emailMotoboy.value, celularMotoboy.value, addressMotoboy.value, rgMotoboy.value, cpfMotoboy.value, numberBoardMotoboy.value, cityBoardMotoboy.value, idUser)
})

btn_sair.addEventListener('click', deslogar)
function deslogar() {
    localStorage.removeItem('token')
    window.location = 'index.html'
}



menuImg.addEventListener('click', openCloseMenu)

function openModal() {
    modalMotoboy.style.display = 'flex'
}
function functionCloseModal() {
    modalMotoboy.style.display = 'none'
}
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
async function functionAddMotoboy(nameMotoboy, emailMotoboy, celularMotoboy, addressMotoboy, rgMotoboy, cpfMotoboy, numberBoardMotoboy, cityBoardMotoboy, id) {
    if(nameMotoboy && celularMotoboy) {
        console.log(nameMotoboy, emailMotoboy, celularMotoboy, addressMotoboy, rgMotoboy, cpfMotoboy, numberBoardMotoboy, cityBoardMotoboy)
        const motoboy = await fetch(`/motoboy/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: new URLSearchParams({
                name: nameMotoboy, email: emailMotoboy, celular: celularMotoboy, address: addressMotoboy, rg: rgMotoboy, cpf: cpfMotoboy, numberBoard: numberBoardMotoboy, cityBoard: cityBoardMotoboy
            })
        })
        const json = await motoboy.json()
        if(json.error) {
            infoModal.innerHTML = json.error
            exit
        }
        if(json) {
            clearListMotoboys()
            listMotoboys()
            
            functionCloseModal()
            tagLiMotoboys()
        }
    } else {
        infoModal.innerHTML = 'Preencha os campos obrigatórios!'
    }
}

async function updateUser(name , password, password2 , id) {
    console.log(name.typeof)
    console.log(password)
    if(password === password2) {
        if(name  && password != undefined && password2 != undefined) {
            const userUpdate = await fetch(`/user/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
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
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
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
async function listMotoboys() {
    const motoboys = await fetch(`/motoboy`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await motoboys.json()
    if(json){
        json.motoboys.forEach((item, indice) => {
            console.log(item)
            tagUlMotoboys.innerHTML += `<li id-item="${item.id}" ><div class="area-li"><div class="area-motoboy-circle" ><div class="motoboy-circle"></div></div><div class="motoboy-name">${item.name}</div><div class="motoboy-cel">${item.celular}</div></div></li>`
        })
    }
}
function clearListMotoboys() {
    tagUlMotoboys.innerHTML = ''
}
function tagLiMotoboys() {
    setTimeout(() => {
        const tagLiMotoboys = document.querySelectorAll('.area-motoboys li')
        tagLiMotoboys.forEach(item => {
            item.addEventListener('click', tagLi => {
                // console.log(tagLi.target.getAttribute('id-item'))
                item.style.backgroundColor = 'rgba(0,0,0,0.2)'
                // console.log(tagLi)
               
            })
        })
        updateHeightAside()
    }, 500)
}
function displayFlexDisplayNone(item) {
    switch(item) {
        case 'Configurações':
            alterarLiUm()
            updateHeightAside()
            clearListMotoboys()
        break
        case 'Motoboys':
            alterarLiDois()
            listMotoboys()
            tagLiMotoboys()
            updateHeightAside()
        break
        case 'Clientes':
            alterarLiTres()
            updateHeightAside()
            clearListMotoboys()
        break
        case 'Rotas':
            alterarLiQuatro()
            updateHeightAside()
            clearListMotoboys()
        break
        case 'Notas Fiscais':
            alterarLiCinco()
            updateHeightAside()
            clearListMotoboys()
        break
    }
}
function updateHeightAside() {
    const areaMotoboy2 = areaMotoboy.clientHeight
    aside.style.height = `${100 + areaMotoboy2}px`
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