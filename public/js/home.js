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
const tagUlClients = document.querySelector('.area-clients ul')
const tagUlRoutes = document.querySelector('.area-routes ul')

const buttonOpenModalBoy = document.querySelector('.btn-add-motoboy')
const buttonAddMotoboy2 = document.querySelector('.btn-update-boy ')

const modalMotoboy = document.querySelector('.area-motoboys-modal') 
const modalMotoboyWarning = document.querySelector('.area-motoboys-modal-warning') 
const modalMotoboyWarningMsg = document.querySelector('.area-modal-warning-msg') 
const modalAreaButtons = document.querySelector('.area-motoboys-modal-buttons') 
const closeModal = document.querySelector('.area-modal-exit')
const closeModalMsg = document.querySelector('.area-modal-exit-content')
const buttonAddMotoboy = document.querySelector('.area-modal-submit button')
const h1Modal = document.querySelector('.area-modal-header h1')

const buttonUpdateMotoboy = document.querySelector('.btn-update-motoboy')
const buttonDeleteMotoboy = document.querySelector('.btn-delete-motoboy')


const closeModalCliMsg = document.querySelector('.area-modal-exit-content-client')
const nameMotoboy = document.querySelector('.name-motoboy')
const emailMotoboy = document.querySelector('.email-motoboy')
const celularMotoboy = document.querySelector('.celular-motoboy')
const addressMotoboy = document.querySelector('.address-motoboy')
const rgMotoboy = document.querySelector('.rg-motoboy')
const cpfMotoboy = document.querySelector('.cpf-motoboy')
const numberBoardMotoboy = document.querySelector('.numberBoard-motoboy')
const cityBoardMotoboy = document.querySelector('.cityBoard-motoboy')
const infoModal = document.querySelector('.modal-info')



const buttonOpenModalClient = document.querySelector('.btn-add-client')
const buttonUpdateClient = document.querySelector('.btn-update-client')
const buttonDeleteClient = document.querySelector('.btn-delete-client')

const modalClientWarning = document.querySelector('.area-clients-modal-warning') 
const modalClientWarningMsg = document.querySelector('.area-modal-warning-msg-cli') 
const modalAreaButtonsCli = document.querySelector('.area-clients-modal-buttons') 
const modalClient = document.querySelector('.area-clients-modal') 
const buttonCloseModal = document.querySelector('.area-modal-exit-client')
const buttonAddClient = document.querySelector('.area-clients-modal-content-add .area-modal-submit button')
const buttonAddClient2 = document.querySelector('.btn-update-cli ')
const h1ModalClient = document.querySelector('.area-clients-modal-content-add .area-modal-header h1')

const nameClient = document.querySelector('.nameFantasy-clients')
const corporateClient = document.querySelector('.corporateName-clients')
const CNPJClient = document.querySelector('.cnpj-clients')
const addressClient = document.querySelector('.address-clients')
const telephoneClient = document.querySelector('.telephone-clients')
const CEPClient = document.querySelector('.cep-clients')
const cityClient = document.querySelector('.city-clients')

const infoModalClient = document.querySelector('.modal-info-client')


const buttonOpenModalRouteDelivery = document.querySelector('.btn-add-routes-delivery')
const buttonUpdateRoute = document.querySelector('.btn-update-routes-delivery')


const modalRoute = document.querySelector('.area-routes-modal') 
const infoRoute = document.querySelector('.modal-info-route') 
const buttonUpdateRoute2 = document.querySelector('.btn-update-route ')
const buttonCloseModalRoute = document.querySelector('.area-modal-exit-route') 
const optionSelectMotoboys = document.querySelector('.area-modal-inputs-name-email select') 


const selectClients = document.querySelector('.area-routes-delivery select')
const selectMotoboys = document.querySelector('.names-motoboys')
const fieldStartRoute = document.querySelector('.startRoute-routes') 
const fieldStartRoute2 = document.querySelector('.startRoute-routes2') 
const fieldLogradouroRoute = document.querySelector('.logradouro-routes') 
const fieldLogradouroRoute2 = document.querySelector('.logradouro-routes2') 
const fieldComplementoRoute = document.querySelector('.complemento-routes') 
const fieldComplementoRoute2 = document.querySelector('.complemento-routes2') 
const fieldBairroRoute = document.querySelector('.bairro-routes') 
const fieldBairroRoute2 = document.querySelector('.bairro-routes2') 
const fieldLocalidadeRoute = document.querySelector('.localidade-routes') 
const fieldLocalidadeRoute2 = document.querySelector('.localidade-routes2') 
const fieldNumeroRoute = document.querySelector('.numero-routes') 
const fieldNumeroRoute2 = document.querySelector('.numero-routes2') 
const fieldSolicitanteRoute = document.querySelector('.solicitante-routes') 
const fieldCommentsRoute = document.querySelector('.comments-routes') 
const valueRoute = document.querySelector('.valueRoute') 
const buttonAddRoute = document.querySelector('.area-routes-delivery .area-modal-submit button') 


const closeModalRouMsg = document.querySelector('.area-modal-exit-content-route')

const modalRouteWarning = document.querySelector('.area-routes-modal-warning') 
const modalRouteWarningMsg = document.querySelector('.area-modal-warning-msg-rou') 
const modalAreaButtonsRou = document.querySelector('.area-routes-modal-buttons') 
const modalRouteWarn = document.querySelector('.area-routes-modal') 
const buttonCloseModalRouteWarning = document.querySelector('.area-modal-exit-route')
// const buttonAddRoute = document.querySelector('.area-clients-modal-content-add .area-modal-submit button')
// const buttonUpdateRoute = document.querySelector('.btn-update-route ')
const h1ModalRoute = document.querySelector('.area-routes-modal-content-add .area-modal-header h1')

buttonAddRoute.addEventListener('click', () => {
    
    infoRoute.innerHTML = 'Os campos com asterisco(*) são de preenchimentos obrigatórios'
    fieldsDelivery( { 
        selectClients: selectClients.value, 
        selectMotoboys: selectMotoboys.value, 
        fieldStartRoute: fieldStartRoute.value, 
        fieldStartRoute2: fieldStartRoute2.value, 
        fieldLogradouroRoute: fieldLogradouroRoute.value, 
        fieldLogradouroRoute2: fieldLogradouroRoute2.value, 
        fieldComplementoRoute: fieldComplementoRoute.value, 
        fieldComplementoRoute2: fieldComplementoRoute2.value,
        fieldBairroRoute: fieldBairroRoute.value,
        fieldBairroRoute2: fieldBairroRoute2.value,
        fieldLocalidadeRoute: fieldLocalidadeRoute.value,
        fieldLocalidadeRoute2: fieldLocalidadeRoute2.value,
        fieldNumeroRoute: fieldNumeroRoute.value,
        fieldNumeroRoute2: fieldNumeroRoute2.value,
        fieldSolicitanteRoute: fieldSolicitanteRoute.value,
        fieldCommentsRoute: fieldCommentsRoute.value,
        valueRoute: valueRoute.value
    })
    
})
valueRoute.addEventListener("keyup", formatarMoeda)

function fieldsDelivery(data) {
    if(data.selectClients == '' || data.selectMotoboys == '' ||data.fieldLogradouroRoute == '' || data.fieldLogradouroRoute2 == '' || data.fieldBairroRoute == '' || data.fieldBairroRoute2 == '' || data.fieldNumeroRoute == '' || data.fieldNumeroRoute2 == '' || data.valueRoute == '') {
        infoRoute.innerHTML = 'Preencha os campos obrigatorios!'
    } else {
        addRoutes(data)
    }
    
}

fieldStartRoute.addEventListener('keyup', event => {
    formatCep(event, 'cep1')
})
fieldStartRoute2.addEventListener('keyup', event => {
    formatCep(event, 'cep2')
})

buttonOpenModalRouteDelivery.addEventListener('click', openModalRouteDeliveryAdd)
buttonCloseModalRoute.addEventListener('click', functionCloseModalRoute)


CNPJClient.addEventListener("keyup", formatCNPJ)

buttonOpenModalClient.addEventListener('click', openModalClientAdd)
buttonCloseModal.addEventListener('click', functionCloseModalClient)
buttonAddClient.addEventListener('click', () => {
    h1ModalClient.innerHTML = "Preencha os campos"
    buttonAddClient.innerHTML = "Cadastrar"
    functionAddClient(nameClient.value, corporateClient.value, CNPJClient.value, addressClient.value, telephoneClient.value, CEPClient.value, cityClient.value, idUser)
})


buttonOpenModalBoy.addEventListener('click', openModalAdd)
closeModal.addEventListener('click', functionCloseModal)
closeModalMsg.addEventListener('click', functionCloseModal)
buttonAddMotoboy.addEventListener('click', () => {
    h1Modal.innerHTML = "Preencha os campos"
    buttonAddMotoboy.innerHTML = "Cadastrar"
    functionAddMotoboy(nameMotoboy.value, emailMotoboy.value, celularMotoboy.value, addressMotoboy.value, rgMotoboy.value, cpfMotoboy.value, numberBoardMotoboy.value, cityBoardMotoboy.value, idUser)
})

closeModalCliMsg.addEventListener('click', functionCloseModalClient)
buttonUpdateMotoboy.addEventListener('click', ()=> {
    modalAreaButtons.style.display = 'none'
})
closeModalRouMsg.addEventListener('click', functionCloseModalRoute)
// buttonUpdateMotoboy.addEventListener('click', ()=> {
//     modalAreaButtons.style.display = 'none'
// })
buttonUpdateClient.addEventListener('click', ()=> {
    modalAreaButtonsCli.style.display = 'none'
    verifyClient()
})
buttonUpdateRoute.addEventListener('click', ()=> {
    modalAreaButtonsRou.style.display = 'none'
    verifyRoute()
})

buttonDeleteMotoboy.addEventListener('click', verifyIdMotoboy)
buttonDeleteClient.addEventListener('click', verifyIdClient)

btn_sair.addEventListener('click', deslogar)
function deslogar() {
    localStorage.removeItem('token')
    window.location = 'index.html'
}


menuImg.addEventListener('click', openCloseMenu)

async function formatCNPJ(e){
    let v= e.target.value.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/,"$1.$2");
    v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3");
    v=v.replace(/\.(\d{3})(\d)/,".$1/$2");
    v=v.replace(/(\d{4})(\d)/,"$1-$2");  
    e.target.value = v;
    if(e.target.value.length > 17) {
        let a = e.target.value.replace('.', '')
        let b = a.replace('.', '')
        let c = b.replace('/', '')
        let cnpj = c.replace('-', '')
        let url = await fetch(`https://publica.cnpj.ws/cnpj/${cnpj}`) 
        let json = await url.json()
        fillingFieldsCNPJ(json, nameClient, corporateClient, addressClient, telephoneClient, CEPClient, cityClient)
    }
}

function formatarMoeda(e) {
    let v = e.target.value.replace(/\D/g,"");
    v = (v/100).toFixed(2) + "";
    v = v.replace(".", ",");
    v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
    v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
    e.target.value = v;
}
async function formatCep(e, str) {
    let v= e.target.value.replace(/\D/g,"")                
    v = v.replace(/^(\d{5})(\d)/,"$1-$2") 
    e.target.value = v;
    if(str === 'cep1') {
        if(e.target.value.length >= 9) {
            let b = e.target.value.replace(/-/i, '')
            let url = await fetch(`http://viacep.com.br/ws/${b}/json/` )
            let json = await url.json()
            fillingFieldsCeps(json, fieldLogradouroRoute, fieldComplementoRoute, fieldBairroRoute, fieldLocalidadeRoute)
        }
    } else if(str === 'cep2') {
        if(e.target.value.length >= 9) {
            let b = e.target.value.replace(/-/i, '')
            let url = await fetch(`http://viacep.com.br/ws/${b}/json/` )
            let json = await url.json()
            fillingFieldsCeps(json, fieldLogradouroRoute2, fieldComplementoRoute2, fieldBairroRoute2, fieldLocalidadeRoute2)
        }
    }
    
}

function fillingFieldsCeps(data, fieldLogradouro, fieldComplemento, fieldBairro, fieldLocalidade) {
    fieldLogradouro.value = data.logradouro
    fieldComplemento.value = data.complemento
    fieldBairro.value = data.bairro
    fieldLocalidade.value = data.localidade
}
function fillingFieldsCNPJ(data, fieldName, fieldCorporate, fieldAddress, fieldTelephone, fieldCep, fieldCity) {
    fieldName.value = data.estabelecimento.nome_fantasia
    fieldCorporate.value = data.razao_social
    fieldAddress.value = `${data.estabelecimento.tipo_logradouro} ${data.estabelecimento.logradouro}, nº ${data.estabelecimento.numero}, bairro ${data.estabelecimento.bairro}`
    fieldTelephone.value = `${data.estabelecimento.ddd1} ${data.estabelecimento.telefone1}`
    fieldCep.value = data.estabelecimento.cep
    fieldCity.value = data.estabelecimento.cidade.nome
}
function verifyIdMotoboy() {
    const tagLiMotoboys2 = document.querySelector('.area-motoboys .selected')
    const buttonNoDelete = document.querySelector('.btn-no-delete')
    const buttonDelete = document.querySelector('.btn-delete')
    if(!tagLiMotoboys2) {
        openModalWarning('Selecione um motoboy!')
    } else {
        const id = tagLiMotoboys2.getAttribute('id-item')
        modalAreaButtons.style.display = 'flex'
        openModalWarning('Tem certeza que deseja excluir o motoboy?')
        buttonNoDelete.addEventListener('click', functionCloseModal)
        buttonDelete.addEventListener('click', async() => {
            await functionDeleteMotoboy(id)
            functionCloseModal()
            setTimeout(()=>{
                clearListMotoboys()
                listMotoboys()
                tagLiMotoboys()
            }, 200)
            }
        )
        
    }
}
function verifyIdClient() {
    const tagLiClients = document.querySelector('.area-clients .selected')
    const buttonNoDelete = document.querySelector('.area-clients-modal-buttons .btn-no-delete')
    const buttonDelete = document.querySelector('.area-clients-modal-buttons .btn-delete')
    if(!tagLiClients) {
        openModalWarningCli('Selecione um cliente!')
    } else {
        const id = tagLiClients.getAttribute('id-item')
        modalAreaButtonsCli.style.display = 'flex'
        openModalWarningCli('Tem certeza que deseja excluir este cliente?')
        buttonNoDelete.addEventListener('click', functionCloseModalClient)
        buttonDelete.addEventListener('click', async() => {
            await functionDeleteClient(id)
            functionCloseModalClient()
            setTimeout(()=>{
                clearListClients()
                listClients()
                // tagLiClients()
            }, 200)
            }
        )
        
    }
}

async function verifyMotoboy() {
    const tagLiMotoboys = document.querySelector('.area-motoboys .selected')
    if(!tagLiMotoboys) {
        openModalWarning('Selecione um motoboy!')
    } else {
        const id = tagLiMotoboys.getAttribute('id-item')
        const boy = await getMotoboy(id)
        if(boy) {
            h1ModalClient.innerHTML = "Atualize os campos"
            buttonAddMotoboy2.style.display = 'block'
            buttonAddMotoboy.style.display = 'none'
            nameMotoboy.value = boy.motoboy.name
            emailMotoboy.value = boy.motoboy.email
            celularMotoboy.value = boy.motoboy.celular
            addressMotoboy.value = boy.motoboy.address
            rgMotoboy.value = boy.motoboy.rg
            cpfMotoboy.value = boy.motoboy.cpf
            numberBoardMotoboy.value = boy.motoboy.numberBoard
            cityBoardMotoboy.value = boy.motoboy.cityBoard
            openModalUpdate()
            buttonAddMotoboy2.addEventListener('click', () => {
                functionUpdateMotoboy(nameMotoboy.value, emailMotoboy.value, celularMotoboy.value, addressMotoboy.value, rgMotoboy.value, cpfMotoboy.value, numberBoardMotoboy.value, cityBoardMotoboy.value, boy.motoboy.id)
            })
        }
    }
}
async function verifyClient() {
    const tagLiClients = document.querySelector('.area-clients .selected')
    if(!tagLiClients) {
        openModalWarningCli('Selecione um cliente!')
    } else {
        const id = tagLiClients.getAttribute('id-item')
        const client = await getClient(id)
        if(client) {
            h1Modal.innerHTML = "Atualize os campos"
            buttonAddClient2.style.display = 'block'
            buttonAddClient.style.display = 'none'
            nameClient.value = client.client.nameFantasy
            corporateClient.value = client.client.corporateName
            CNPJClient.value = client.client.cnpj
            addressClient.value = client.client.address
            telephoneClient.value = client.client.telephone
            CEPClient.value = client.client.cep
            cityClient.value = client.client.city
            openModalUpdateCli()
            buttonAddClient2.addEventListener('click', () => {
                functionUpdateClient(nameClient.value, corporateClient.value, CNPJClient.value, addressClient.value, telephoneClient.value, CEPClient.value, cityClient.value, client.client.id)
            })
        }
    }
}
async function verifyRoute() {
    const tagLiRoutes = document.querySelector('.area-routes .selected')
    if(!tagLiRoutes) {
        openModalWarningRou('Selecione uma rota!')
    } else {
        const id = tagLiRoutes.getAttribute('id-item')
        const route = await getRoute(id)
        if(route) {
            console.log(route)
            h1Modal.innerHTML = "Atualize os campos"
            buttonAddClient2.style.display = 'block'
            buttonAddClient.style.display = 'none'
            nameClient.value = client.client.nameFantasy
            corporateClient.value = client.client.corporateName
            CNPJClient.value = client.client.cnpj
            addressClient.value = client.client.address
            telephoneClient.value = client.client.telephone
            CEPClient.value = client.client.cep
            cityClient.value = client.client.city
            // openModalUpdateCli()
            buttonAddClient2.addEventListener('click', () => {
                functionUpdateClient(nameClient.value, corporateClient.value, CNPJClient.value, addressClient.value, telephoneClient.value, CEPClient.value, cityClient.value, client.client.id)
            })
        }
    }
}
function openModalWarning(msg) {
    modalMotoboyWarning.style.display = 'flex'
    modalMotoboyWarningMsg.innerHTML = msg
}
function openModalWarningCli(msg) {
    modalClientWarning.style.display = 'flex'
    modalClientWarningMsg.innerHTML = msg
}
function openModalWarningRou(msg) {
    modalRouteWarning.style.display = 'flex'
    modalRouteWarningMsg.innerHTML = msg
}
function openModalAdd() {
    h1Modal.innerHTML = 'Preencha os campos'
    buttonAddMotoboy2.style.display = 'none'
    buttonAddMotoboy.style.display = 'block'
    modalMotoboy.style.display = 'flex'
    fieldsClear()
}
function openModalClientAdd() {
    modalClient.style.display = 'flex'
    buttonAddClient2.style.display = 'none'
    buttonAddClient.style.display = 'block'
    modalClient.style.display = 'flex'
    fieldsClear()
}
function openModalRouteDeliveryAdd() {
    modalRoute.style.display = 'flex'
    buttonUpdateRoute2.style.display = 'none'
    listClients()
    listMotoboys()
}
function openModalUpdate() {
    modalMotoboy.style.display = 'flex'
}
function openModalUpdateCli() {
    modalClient.style.display = 'flex'
}
function fieldsClear() {
    nameMotoboy.value = ''
    emailMotoboy.value = ''
    celularMotoboy.value = ''
    addressMotoboy.value = ''
    rgMotoboy.value = ''
    cpfMotoboy.value = ''
    numberBoardMotoboy.value = ''
    cityBoardMotoboy.value = ''
    nameClient.value = ''
    corporateClient.value = ''
    CNPJClient.value = ''
    addressClient.value = ''
    telephoneClient.value = ''
    CEPClient.value = ''
    cityClient.value = ''
}
function functionCloseModal() {
    modalMotoboy.style.display = 'none'
    modalMotoboyWarning.style.display = 'none'
}
function functionCloseModalClient() {
    modalClient.style.display = 'none'
    modalClientWarning.style.display = 'none'
}
function functionCloseModalRoute() {
    modalRoute.style.display = 'none'
    modalRouteWarning.style.display = 'none'
    clearListMotoboys()
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

function sendWhatsMotoboy(data) {
    const url = `https://api.whatsapp.com/send?phone=55${data.celularMotoboy}&text=*VAN EXPRESS*%0AEmpresa Solicitante: *${data.clientName}* %0ARetirar objeto em: *${data.startRoute}* %0ASolicitante: *${data.requesterRoute}* %0AEntregar objeto em: *${data.endRoute}* %0AObservações: *${data.commentsEndRoute}*`
    window.open(url, '_blank')
    console.log(data)
}
async function getMotoboy(id) {
    const motoboy = await fetch(`/motoboy/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await motoboy.json()
    return json
}
async function getClient(id) {
    const client = await fetch(`/client/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await client.json()
    return json
}
async function getRoute(id) {
    const route = await fetch(`/route/${id}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await route.json()
    return json
}

async function functionDeleteMotoboy(id) {
    if(id) {
        const del = await fetch(`/motoboy/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await del.json()
        if(json.sucess) {
            clearListMotoboys()
            listMotoboys()
            functionCloseModal()
            tagLiMotoboys()
            modalAreaButtons.style.display = 'none'
        }
    }
}
async function functionDeleteClient(id) {
    if(id) {
        const del = await fetch(`/client/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await del.json()
        if(json.sucess) {
            clearListClients()
            listClients()
            functionCloseModalClient()
            tagLiClients()
            modalAreaButtonsCli.style.display = 'none'
        }
    }
}

async function addRoutes(data) {
    if(data.selectClients && data.fieldLogradouroRoute && data.fieldLogradouroRoute2 && data.fieldBairroRoute && data.fieldBairroRoute2 && data.fieldNumeroRoute && data.fieldNumeroRoute2 && data.valueRoute && data.selectMotoboys) {
        const route = await fetch(`/route/${data.selectClients}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: new URLSearchParams({
                startRoute: `${data.fieldLogradouroRoute}, nº ${data.fieldNumeroRoute}, Bairro ${data.fieldBairroRoute}  ${data.fieldComplementoRoute} - ${data.fieldLocalidadeRoute}`, 
                endRoute: `${data.fieldLogradouroRoute2}, nº ${data.fieldNumeroRoute2}, Bairro ${data.fieldBairroRoute2}  ${data.fieldComplementoRoute2} - ${data.fieldLocalidadeRoute2}`, 
                valueRoute: data.valueRoute, 
                cepStartRoute: data.fieldStartRoute ?? '', 
                cepEndRoute: data.fieldStartRoute2 ?? '', 
                requester: data.fieldSolicitanteRoute ?? '',
                commentsEndRoute: data.fieldCommentsRoute ?? ''
            })
        })
        const json = await route.json()
        if(json.error) {
            infoRoute.innerHTML = json.error
            exit
        }
        if(json) {
            console.log(json)
            addMotoboyRoute(data.selectMotoboys, json.route.id)
            clearListRoutes()
            listRoutes()
            functionCloseModalRoute()
        }
    } else {
        infoRoute.innerHTML = 'Preencha os campos obrigatórios!'
    }
}
async function addMotoboyRoute(motoboyId, routeId) {
    console.log(motoboyId, routeId)
    if(motoboyId && routeId) {
        const motoboyRoute = await fetch(`/motoboyRoute/${motoboyId}/${routeId}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await motoboyRoute.json()
        console.log(json.route)
        if(json.error) {
            infoRoute.innerHTML = json.error
            exit
        }
        if(json.route) {
            // console.log("addMotoboyRoute "+json)
            sendWhatsMotoboy(json.route)
        }
    } else {
        infoRoute.innerHTML = 'Preencha os campos obrigatórios!'
    }
}

async function functionAddMotoboy(nameMotoboy, emailMotoboy, celularMotoboy, addressMotoboy, rgMotoboy, cpfMotoboy, numberBoardMotoboy, cityBoardMotoboy, id) {
    if(nameMotoboy && celularMotoboy) {
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
            // updateHeightAside()
        }
    } else {
        infoModal.innerHTML = 'Preencha os campos obrigatórios!'
    }
}
async function functionAddClient(nameFantasy, corporateName, cnpj, address, telephone, cep, city, id) {
    if(nameFantasy && corporateName && cnpj && address && telephone && cep && city) {
        const motoboy = await fetch(`/client/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: new URLSearchParams({
                nameFantasy, corporateName, cnpj, address, telephone, cep, city
            })
        })
        const json = await motoboy.json()
        if(json.error) {
            infoModalClient.innerHTML = json.error
            exit
        }
        if(json) {
            clearListClients() 
            listClients()
            functionCloseModalClient()
            tagLiClients()
        }
    } else {
        infoModalClient.innerHTML = 'Preencha os campos obrigatórios!'
    }
}
async function functionUpdateMotoboy(nameMotoboy, emailMotoboy, celularMotoboy, addressMotoboy, rgMotoboy, cpfMotoboy, numberBoardMotoboy, cityBoardMotoboy, id) {
    if(nameMotoboy && celularMotoboy) {
        const motoboy = await fetch(`/motoboy/${id}`, {
            method: 'PUT',
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
async function functionUpdateClient(nameFantasy, corporateName, cnpj, address, telephone, cep, city, id) {
    if(nameFantasy && corporateName && cnpj && address && telephone && cep && city)  {
        const client = await fetch(`/client/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
            body: new URLSearchParams({ 
                nameFantasy, corporateName, cnpj, address, telephone, cep, city, id
            })
        })
        const json = await client.json()
        if(json.error) {
            infoModalClient.innerHTML = json.error
        }
        if(json) {
            clearListClients()
            listClients()
            functionCloseModalClient()
            tagLiClients()
        }
    } else {
        infoModalClient.innerHTML = 'Preencha os campos obrigatórios!'
    }
}

async function updateUser(name , password, password2 , id) {
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
        selectMotoboys.innerHTML += `<option value="">Selecione o motoboy para a corrida:* </option>`
        json.motoboys.forEach((item, indice) => {
            tagUlMotoboys.innerHTML += `<li id-item="${item.id}" class="" ><div class="area-li"><div class="area-motoboy-circle" ><div class="motoboy-circle"></div></div><div class="motoboy-name">${item.name}</div><div class="motoboy-cel">${item.celular}</div></div></li>`
            selectMotoboys.innerHTML += `<option value="${item.id}">${item.name}</option>`
        })
    }
}

async function listClients() {
    const clients = await fetch(`/client`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await clients.json()
    if(json){
        optionSelectMotoboys.innerHTML += `<option value="">Selecione a empresa solicitante:* </option>`
        json.clients.forEach((item, indice) => {
            tagUlClients.innerHTML += `<li id-item="${item.id}" class="" ><div class="area-li"><div class="area-client-circle" ><div class="client-circle"></div></div><div class="client-name">${item.nameFantasy}</div><div class="client-cel">${item.cnpj}</div></div></li>`
            optionSelectMotoboys.innerHTML += `<option value="${item.id}">${item.nameFantasy}</option>`
        })
    }
}
async function listRoutes() {
    const routes = await fetch(`/route`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await routes.json()
    if(json){
        json.routes.forEach((item, indice) => {
            tagUlRoutes.innerHTML += `<li id-item="${item.id}" class="" >
                                        <div class="area-li"><div class="area-route-circle" >
                                            <div class="client-circle"></div></div>
                                            <div class="route-name">Empresa solicitante:${item.clientName}</div>
                                            <div class="route-start">De:${item.startRoute}</div>
                                            <div class="route-end">Para:${item.endRoute}</div>
                                            <div class="route-motoboy">${item.nameMotoboy != null ? 'Motoboy legal' : ''}</div>
                                        </div>
                                      </li>`
        })
    }
}
function clearListRoutes() {
    tagUlRoutes.innerHTML = ''
}
function clearListMotoboys() {
    selectMotoboys.innerHTML = ''
    tagUlMotoboys.innerHTML = ''
    optionSelectMotoboys.innerHTML = ''
    
}
function clearListClients() {
    tagUlClients.innerHTML = ''
}
function tagLiMotoboys() {
    setTimeout(() => {
        const tagLiMotoboys = document.querySelectorAll('.area-motoboys li')
        tagLiMotoboys.forEach(item => {
            item.addEventListener('click', tagLi => {
                tagLiMotoboysSelected()
                item.classList.add('selected')
            })
        })
        // updateHeightAside()
    }, 500)
}
function tagLiClients() {
    setTimeout(() => {
        const tagLiCli = document.querySelectorAll('.area-clients li')
        tagLiCli.forEach(item => {
            item.addEventListener('click', tagLi => {
                tagLiClientsSelected()
                item.classList.add('selected')
            })
        })
        // updateHeightAside()
    }, 500)
}
function tagLiRoutes() {
    setTimeout(() => {
        const tagLiRoutes = document.querySelectorAll('.area-routes li')
        tagLiRoutes.forEach(item => {
            item.addEventListener('click', tagLi => {
                tagLiRoutesSelected()
                item.classList.add('selected')
            })
        })
        // updateHeightAside()
    }, 500)
}
function tagLiRoutesSelected() {
    const tagLiRoutes = document.querySelectorAll('.area-routes li')
    tagLiRoutes.forEach( item => {
        item.classList.remove('selected')
    })
}
function tagLiMotoboysSelected() {
    const tagLiMotoboys = document.querySelectorAll('.area-motoboys li')
    tagLiMotoboys.forEach( item => {
        item.classList.remove('selected')
    })
}
function tagLiClientsSelected() {
    const tagLiMotoboys = document.querySelectorAll('.area-clients li')
    tagLiMotoboys.forEach( item => {
        item.classList.remove('selected')
    })
}
function displayFlexDisplayNone(item) {
    switch(item) {
        case 'Configurações':
            alterarLiUm()
            // updateHeightAside()
            clearListMotoboys()
            clearListClients()
        break
        case 'Motoboys':
            clearListMotoboys()
            alterarLiDois()
            listMotoboys()
            tagLiMotoboys()
            clearListClients()
            // updateHeightAside()
        break
        case 'Clientes':
            clearListClients()
            alterarLiTres()
            tagLiClients()
            listClients()
            // updateHeightAside()
            clearListMotoboys()
            
        break
        case 'Rotas':
            clearListClients()
            alterarLiQuatro()
            clearListMotoboys()
            clearListRoutes()
            listRoutes()
            tagLiRoutes()
        break
        case 'Notas Fiscais':
            alterarLiCinco()
            // updateHeightAside()
            clearListMotoboys()
            clearListClients()
        break
    }
}
// function updateHeightAside() {
//     const areaMotoboy2 = parseInt(areaMotoboy.clientHeight)
//     aside.style.height = `${100 + areaMotoboy2}px`
//     const areaClient2 = areaClient.clientHeight
//     aside.style.height = `${100 + areaClient2}px`
// }

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