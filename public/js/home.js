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
const li6 = document.querySelector('.item6')
const areaUser = document.querySelector('.area-content-users')
const areaMotoboy = document.querySelector('.area-content-motoboys')
const areaClient = document.querySelector('.area-content-clients')
const areaRoute = document.querySelector('.area-content-routes')
const areaInvoice = document.querySelector('.area-content-invoices')
const areaFechamento = document.querySelector('.area-content-fechamento')

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
const buttonDeleteRoute = document.querySelector('.btn-delete-routes-delivery')


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
const h1ModalRoute = document.querySelector('.area-routes-modal-content-add .area-modal-header h1')

const buttonRoutesStatus = document.querySelectorAll('.area-routes-status button')

const buttonRoutesAndamento = document.querySelector('.btn-no-done')
const buttonRoutesFinaly = document.querySelector('.btn-true-done')
const h2Route = document.querySelector('.area-routes h2 ')
const spanRoute = document.querySelector('.area-routes h2 span')
const dateRouteFinal = document.querySelector('input[type=date]')


const selectInvoiceClients = document.querySelector('.area-content-invoices .area-invoices-filters select')
const buttonFilterInvoices = document.querySelector('.area-content-invoices .area-invoices-filters button')
const buttonCheckedTrueInvoices = document.querySelector('.area-content-invoices .allTrueChecked')
const buttonGenerateInvoices = document.querySelector('.area-content-invoices .invoices-generate')
const areaInvoicesWarning = document.querySelector('.area-content-invoices .area-invoices-filters .area-invoices-filters-warning')

const dateInitialInvoice = document.querySelector('.area-invoices-filters .data-initial')
const dateFinalInvoice = document.querySelector('.area-invoices-filters .data-final')
const areaInvoices = document.querySelector('.area-content-invoices .area-invoices ')
const areaInvoicesGenerate = document.querySelector('.area-invoices-generate-modal ')


const selectFechamentoBoys = document.querySelector('.area-content-fechamento .area-fechamento-filters select')
const buttonFilterFechamento = document.querySelector('.area-content-fechamento .area-fechamento-filters button')
const dateInitialFechamento = document.querySelector('.area-content-fechamento  .data-initial')
const dateFinalFechamento = document.querySelector('.area-content-fechamento  .data-final')
const areaFechamentos = document.querySelector('.area-content-fechamento  .area-fechamentos ul ')

const areaFechamentoWarning = document.querySelector('.area-content-fechamento .area-fechamento-filters .area-fechamento-filters-warning')

const date = new Date()
const day = new Date(Date.now()).toLocaleString().split(',')[0]
const [dia, mes, ano ] = day.split('/')
const ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0).toLocaleString().split(',')[0];
const [dia2, mes2, ano2 ] = ultimoDia.split('/')


buttonGenerateInvoices.addEventListener('click', () => {
    const inputsInvoices = document.querySelectorAll('.area-content-invoices .area-invoices input ')
    let invoices = []
    inputsInvoices.forEach(item => {
        let checked = item.getAttribute('checked')
        if(!checked) {
            areaInvoicesWarning.style.display = 'block'
            areaInvoicesWarning.innerHTML = 'Selecione ao menos uma ordem de serviço!'
        }
        if(checked) {
            console.log(item)
            
            invoices.push({
                id: item.id,
                corporateName: item.getAttribute('corporatename'),
                description: item.getAttribute('description'),
                date: item.getAttribute('date'),
                cnpj: item.getAttribute('cnpj'),
                nameFantasy: item.getAttribute('namefantasy'),
                nameMotoboy: item.getAttribute('namemotoboy'),
                numberInvoice: item.getAttribute('numberinvoice'),
                requester: item.getAttribute('requester'),
                telephone: item.getAttribute('telephone'),
                valueRoute: item.getAttribute('valueroute').replace(',', '.'),
            })
        } 
    })
    if(invoices.length >= 1) {
        generateInvoice(invoices)
    }
})
buttonCheckedTrueInvoices.addEventListener('click', checkedTrueInvoice)

buttonFilterFechamento.addEventListener('click', async() => {
    clearListFechamento()
    if(dateInitialFechamento.value > dateFinalFechamento.value  ) {
        areaFechamentoWarning.style.display = 'block'
        areaFechamentoWarning.innerHTML = 'A data inicial não pode ser maior que a data final!'
    } else if(!selectFechamentoBoys.value) {
        areaFechamentoWarning.style.display = 'block'
        areaFechamentoWarning.innerHTML = 'Selecione um cliente!'
    } else {
        areaFechamentoWarning.style.display = 'none'
        areaFechamentoWarning.innerHTML = ''
        const fechamentos =  await getFechamentos(selectFechamentoBoys.value, dateInitialFechamento.value, dateFinalFechamento.value)
        if(fechamentos){
            listFechamento(fechamentos)
        }
    }
})

buttonFilterInvoices.addEventListener('click', async() => {
    clearListInvoice()
    if(dateInitialInvoice.value > dateFinalInvoice.value  ) {
        areaInvoicesWarning.style.display = 'block'
        areaInvoicesWarning.innerHTML = 'A data inicial não pode ser maior que a data final!'
    } else if(!selectInvoiceClients.value) {
        areaInvoicesWarning.style.display = 'block'
        areaInvoicesWarning.innerHTML = 'Selecione um cliente!'
    } else {
        areaInvoicesWarning.style.display = 'none'
        areaInvoicesWarning.innerHTML = ''
        const invoices =  await getInvoices(selectInvoiceClients.value, dateInitialInvoice.value, dateFinalInvoice.value)
        if(invoices){
            console.log(invoices)
            listInvoice(invoices)
        }
    }
})
const romaneioRoute = document.querySelector('.area-invoices-romaneio-content')
const nameClientInvoice = document.querySelector('.area-invoices-generate-client-corporate span')
const infoClientInvoice = document.querySelector('.area-invoices-generate-client-corporate-info span')
const contentInvoice = document.querySelector('.area-invoices-routes-content')
const heightClientInvoice = document.querySelector('.area-invoices-generate-routes-content')
const tagPClientInvoice = document.querySelector('.area-invoices-generate-routes-content p')
const nameFantasyClientInvoice = document.querySelector('.area-invoices-signature-cli span')

async function generateInvoice (invoice) {
    areaInvoicesWarning.style.display = 'none'
    areaInvoicesWarning.innerHTML = ''
    areaInvoicesGenerate.style.display = 'flex'
    window.jsPDF = window.jspdf.jsPDF
    if(invoice.length < 5 ) {
        contentInvoice.style.minHeight = '54vh'
        heightClientInvoice.style.minHeight = '54vh'
    }
    let doc = new jsPDF()
    console.log(invoice)
    romaneioRoute.innerHTML = `Romaneio: ${invoice[0].numberInvoice}  - Data ${day}`
    nameClientInvoice.innerHTML = `Razão Social: ${invoice[0].corporateName}`
    infoClientInvoice.innerHTML = `CNPJ: ${invoice[0].cnpj} - Nome fantasia:  ${invoice[0].nameFantasy} - Telefone: ${invoice[0].telephone}`
    nameFantasyClientInvoice.innerHTML = `${invoice[0].nameFantasy}`
   
    let total = invoice.reduce((a, b) => a + parseInt(b.valueRoute), 0)
    console.log(total)
    invoice.forEach((item, i) => {
        console.log(item, i)
        console.log(areaInvoicesGenerate)
        contentInvoice.innerHTML += `<div class="area-invoices-routes">
        <div class="area-invoices-routes-date">Data:<br>${item.date}</div>
        <div class="area-invoices-routes-description">${item.description}</div>
        <div class="area-invoices-routes-info">Nome solicitante: ${item.requester}<br>Nome motoboy: ${item.nameMotoboy}</div>
        <div class="area-invoices-routes-value">Valor corrida:<br> R$${item.valueRoute.replace('.', ',')}</div>
    </div>`
    
    tagPClientInvoice.innerHTML = `Total de corridas: ${i+1} - Valor total : R$${total},00`
    })
    doc.html(areaInvoicesGenerate, {
        callback: function(doc){
            doc.save(`Ordem-de-serviço_Romaneio_${invoice[0].numberInvoice}.pdf`)
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0, y: 0,
        width: 190, windowWidth: 675
    })
    setTimeout(()=> {
        areaInvoicesGenerate.style.display = 'none'
        contentInvoice.innerHTML = ''
        contentInvoice.style.minHeight = '63vh'
        heightClientInvoice.style.minHeight = '63vh'
    }, 100)
    
    
}
function checkedTrueInvoice() {
    const inputsInvoices = document.querySelectorAll('.area-content-invoices .area-invoices input ')
    inputsInvoices.forEach(item => {
        // item.checked = !item.checked
        let checked = item.getAttribute('checked')
        checked ? item.removeAttribute('checked') : item.setAttribute('checked', true)
    })
    
}
function checkedTrueInvoice2() {
    const inputsInvoices = document.querySelectorAll('.area-content-invoices .area-invoices input ')
    inputsInvoices.forEach(item => {
        item.addEventListener('change', c => {
            let checked = item.getAttribute('checked')
            checked ? item.removeAttribute('checked') : item.setAttribute('checked', true)
        } )
        
    })
}
function listFechamento(data) {
    if(data){
        data.routes.forEach( item => {
            const day = new Date(item.createdAt).toLocaleString().split(',')[0]
            areaFechamentos.innerHTML += `<li> ${day} - ${item.clientName} - R$${item.valueRoute.toFixed(2).replace('.',',')}</li>`
            
        })
    }
}
function listInvoice(data) {
    if(data){
        data.invoices.forEach( item => {
            const day = new Date(item.date).toLocaleString().split(',')[0]
            areaInvoices.innerHTML += `<label for="${item.id}"> <input type="checkbox" class="invoicesChecked" id="${item.id}" corporatename="${item.corporateName}" cnpj="${item.cnpj}" date="${day}" nameFantasy="${item.nameFantasy}"
                                        description="${item.description}" nameMotoboy="${item.nameMotoboy}" numberInvoice="${item.numberInvoice}" requester="${item.requester}" telephone="${item.telephone}" valueRoute="${item.valueRoute.toFixed(2).replace('.',',')}">
                                        ${day} - Romaneio: ${item.numberInvoice} - Rota feita por: ${item.nameMotoboy} - R$${item.valueRoute.toFixed(2).replace('.',',')}</label><br>`
        })
    }
    checkedTrueInvoice2()
}
function clearListInvoice() {
    areaInvoices.innerHTML = ''
}
function clearListFechamento() {
    areaFechamentos.innerHTML = ''
}
function functionButtonRoutes() {
    const buttonFinalyRoute = document.querySelectorAll('.area-routes ul li button')
    buttonFinalyRoute.forEach(item => {
        item.addEventListener('click', async( button) => {
            const id = item.getAttribute('id-item')
            const done = await finalyRoute(id)
        })
    })
}

function optionsMotoboysFechamento() {
    clearListFechamento()
    // spanRoute.innerHTML = day
    console.log(day)
    // dateRouteFinal.value = `${ano}-${mes}-${dia}`
    dateInitialFechamento.value = `${ano}-${mes}-01`
    dateFinalFechamento.value = `${ano2}-${mes2}-${dia2}`

   setTimeout( async() => {
        const optionFechamentoBoy = document.querySelectorAll('.area-content-fechamento select option')
        const options = [...optionFechamentoBoy]
        options[1].setAttribute('selected', '')
        
        console.log(selectFechamentoBoys.value)
        
        console.log(dateInitialInvoice.value, dateFinalInvoice.value)
        const fechamentos = await getFechamentos(selectFechamentoBoys.value, dateInitialFechamento.value, dateFinalFechamento.value)
        listFechamento(fechamentos)
   }, 200)
}

function optionsClientsInvoices() {
    clearListInvoice()
    spanRoute.innerHTML = day
    console.log(day)
    dateRouteFinal.value = `${ano}-${mes}-${dia}`
    dateInitialInvoice.value = `${ano}-${mes}-01`
    dateFinalInvoice.value = `${ano2}-${mes2}-${dia2}`

   setTimeout( async() => {
        const optionInvoiceClients = document.querySelectorAll('.area-content-invoices select option')
        const options = [...optionInvoiceClients]
        options[1].setAttribute('selected', '')
        
        console.log(selectInvoiceClients.value)
        if(dateInitialInvoice > dateFinalInvoice || !selectInvoiceClients.value ) {

        }
        console.log(dateInitialInvoice.value, dateFinalInvoice.value)
        const invoices = await getInvoices(selectInvoiceClients.value, dateInitialInvoice.value, dateFinalInvoice.value)
        listInvoice(invoices)
   }, 200)
}

dateRouteFinal.value = `${ano}-${mes}-${dia}`

buttonRoutesStatus.forEach(item => {
    item.addEventListener('click', item => {
        buttonRoutesAndamento.classList.toggle('active')
        buttonRoutesFinaly.classList.toggle('active')
        if(buttonRoutesAndamento.classList.contains('active')){
            routeAndamento()
        } else if(buttonRoutesFinaly.classList.contains('active')) {
            h2Route.style.display = 'block'
            dateRouteFinal.style.display = 'block'
            dateRouteFinal
            listRoutesDoneTrue(dateRouteFinal.value)
        }
    })
})

dateRouteFinal.addEventListener('change', () => {
    const find = dateRouteFinal.value
    let [ ano, mes, dia ] = find.split('-')
    listRoutesDoneTrue(find)
    spanRoute.innerHTML = `${dia}/${mes}/${ano}`
})

function routeAndamento() {
    h2Route.style.display = 'none'
    dateRouteFinal.style.display = 'none'
    listRoutesDoneFalse()
    
}
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
    verifyMotoboy()
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
buttonDeleteRoute.addEventListener('click', verifyIdRoute)

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
async function functionDeleteRoute(id) {
    
    console.log(id)
    if(id) {
        const del = await fetch(`route/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await del.json()
        functionCloseModalRouteDelete()
        if( json.sucess) {
            
            modalAreaButtonsRou.style.display = 'none'
            
        }
        console.log(json)
    }
}

function verifyIdRoute() {
    const tagLiRoutes2 = document.querySelector('.area-routes .selected')
    const buttonNoDelete = document.querySelector('.area-routes-modal-buttons .btn-no-delete')
    const buttonDelete = document.querySelector('.area-routes-modal-buttons .btn-delete')
    if(!tagLiRoutes2) {
        openModalWarningRou('Selecione uma rota!')
    } 
    if(tagLiRoutes2) {
        let id = tagLiRoutes2.getAttribute('id-item')
        openModalWarningRou('Tem certeza que deseja excluir esta rota?')
        modalAreaButtonsRou.style.display = 'flex'
        buttonNoDelete.addEventListener('click', functionCloseModalRoute)
        buttonDelete.addEventListener('click', async() => {
            console.log(id)
            await functionDeleteRoute(id)
            
        })
    }   
    
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
            listClients()
            listMotoboys()
            h1ModalRoute.innerHTML = "Atualize os campos"
            buttonUpdateRoute2.style.display = 'block'
            buttonAddRoute.style.display = 'none'
            fieldStartRoute.value = route.route.cepStartRoute
            fieldStartRoute2.value = route.route.cepEndRoute
            fieldLogradouroRoute.value = route.route.fieldLogradouroRoute
            fieldLogradouroRoute2.value = route.route.fieldLogradouroRoute2
            fieldComplementoRoute.value = route.route.fieldComplementoRoute
            fieldComplementoRoute2.value = route.route.fieldComplementoRoute2
            fieldBairroRoute.value = route.route.fieldBairroRoute
            fieldBairroRoute2.value = route.route.fieldBairroRoute2
            fieldLocalidadeRoute.value = route.route.fieldLocalidadeRoute
            fieldLocalidadeRoute2.value = route.route.fieldLocalidadeRoute2
            fieldNumeroRoute.value = route.route.fieldNumeroRoute
            fieldNumeroRoute2.value = route.route.fieldNumeroRoute2
            valueRoute.value = route.route.valueRoute
            setTimeout(() => {
                selectClients.value = route.route.clientId
                selectMotoboys.value = route.route.motoboyId
            }, 500)
            openModalUpdateRou()
            buttonUpdateRoute2.addEventListener('click', () => {
                updateRoute( { 
                    idRoute: route.route.id,
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
    modalAreaButtonsRou.style.display = 'none'
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
    fieldsClear()
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
function openModalUpdateRou() {
    modalRoute.style.display = 'flex'
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
    fieldStartRoute.value = ''
    fieldStartRoute2 .value = ''
    fieldLogradouroRoute .value = ''
    fieldLogradouroRoute2.value = ''
    fieldComplementoRoute.value = ''
    fieldComplementoRoute2.value = ''
    fieldBairroRoute .value = ''
    fieldBairroRoute2.value = ''
    fieldLocalidadeRoute.value = ''
    fieldLocalidadeRoute2.value = ''
    fieldNumeroRoute.value = ''
    fieldNumeroRoute2.value = ''
    fieldSolicitanteRoute.value = ''
    fieldCommentsRoute.value = ''
    valueRoute.value = ''
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
function functionCloseModalRouteDelete() {
    modalRoute.style.display = 'none'
    modalRouteWarning.style.display = 'none'
    if(buttonRoutesAndamento.classList.contains('active')){
        console.log('entrou aqui')
        routeAndamento()
        tagLiRoutes()
    } else if(buttonRoutesFinaly.classList.contains('active')) {
        h2Route.style.display = 'block'
        dateRouteFinal.style.display = 'block'
        dateRouteFinal
        listRoutesDoneTrue(dateRouteFinal.value)
        tagLiRoutes()
    }
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
    areaName.innerHTML = `Olá ${name}`
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

async function finalyRoute(id) {
    const motoboy = await fetch(`/route/done/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    const json = await motoboy.json()
    if(buttonRoutesAndamento.classList.contains('active')){
        routeAndamento()
        tagLiRoutes()
    } else if(buttonRoutesFinaly.classList.contains('active')) {
        h2Route.style.display = 'block'
        dateRouteFinal.style.display = 'block'
        dateRouteFinal
        listRoutesDoneTrue(dateRouteFinal.value)
        tagLiRoutes()
    }
    return json
}
async function getFechamentos(idBoy, dataInitial, dataFinal) {
    console.log('chegou aqui')
    if(idBoy && dataInitial &&  dataFinal) {
        const fechamento = await fetch(`/route/${idBoy}/${dataInitial}/${dataFinal}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await fechamento.json()
        return json
    }
}
async function getInvoices(idClient, dataInitial, dataFinal) {
    if(idClient && dataInitial &&  dataFinal) {
        const invoices = await fetch(`/invoice/${idClient}/${dataInitial}/${dataFinal}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await invoices.json()
        return json
    }
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
                commentsEndRoute: data.fieldCommentsRoute ?? '',
                fieldLogradouroRoute: data.fieldLogradouroRoute ?? '',
                fieldLogradouroRoute2: data.fieldLogradouroRoute2 ?? '',
                fieldComplementoRoute: data.fieldComplementoRoute ?? '',
                fieldComplementoRoute2: data.fieldComplementoRoute2 ?? '',
                fieldBairroRoute: data.fieldBairroRoute ?? '',
                fieldBairroRoute2: data.fieldBairroRoute2 ?? '',
                fieldLocalidadeRoute: data.fieldLocalidadeRoute ?? '',
                fieldLocalidadeRoute2: data.fieldLocalidadeRoute2 ?? '',
                fieldNumeroRoute: data.fieldNumeroRoute ?? '',
                fieldNumeroRoute2: data.fieldNumeroRoute2 ?? '',
                motoboyId: data.selectMotoboys ?? ''
            })
        })
        const json = await route.json()
        if(json.error) {
            infoRoute.innerHTML = json.error
            exit
        }
        if(json) {
            console.log(json)
            addMotoboyRoute(data.selectMotoboys, json.route.id, json.route.clientId)
            clearListRoutes()
            listRoutesDoneFalse()
            functionCloseModalRoute()
            createInvoice(data.selectClients, data.selectMotoboys, json.route.id) //idClient, idMotoboy, idRoute
        }
    } else {
        infoRoute.innerHTML = 'Preencha os campos obrigatórios!'
    }
}
async function createInvoice(idClient, idMotoboy, idRoute) {
    if(idClient && idMotoboy && idRoute) {
        const invoice = await fetch(`/invoice/${idClient}/${idMotoboy}/${idRoute}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
        })
        const json = await invoice.json()
        console.log(json.invoice)
        
    } 
}
async function addMotoboyRoute(motoboyId, routeId, clientId) {
    if(motoboyId && routeId) {
        const motoboyRoute = await fetch(`/motoboyRoute/${motoboyId}/${routeId}/${clientId}`, {
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
async function updateRoute(data) {
    if(data.selectClients && data.fieldLogradouroRoute && data.fieldLogradouroRoute2 && data.fieldBairroRoute && data.fieldBairroRoute2 && data.fieldNumeroRoute && data.fieldNumeroRoute2 && data.valueRoute && data.selectMotoboys) {
        const route = await fetch(`/route/${data.idRoute}`, {
            method: 'PUT',
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
                commentsEndRoute: data.fieldCommentsRoute ?? '',
                fieldLogradouroRoute: data.fieldLogradouroRoute ?? '',
                fieldLogradouroRoute2: data.fieldLogradouroRoute2 ?? '',
                fieldComplementoRoute: data.fieldComplementoRoute ?? '',
                fieldComplementoRoute2: data.fieldComplementoRoute2 ?? '',
                fieldBairroRoute: data.fieldBairroRoute ?? '',
                fieldBairroRoute2: data.fieldBairroRoute2 ?? '',
                fieldLocalidadeRoute: data.fieldLocalidadeRoute ?? '',
                fieldLocalidadeRoute2: data.fieldLocalidadeRoute2 ?? '',
                fieldNumeroRoute: data.fieldNumeroRoute ?? '',
                fieldNumeroRoute2: data.fieldNumeroRoute2 ?? '',
                motoboyId: data.selectMotoboys ?? '',
                clientId: data.selectClients ?? ''
            })
        })
        const json = await route.json()
        if(json.error) {
            infoRoute.innerHTML = json.error
            exit
        }
        if(json) {
            console.log(json)
            // addMotoboyRoute(data.selectMotoboys, json.route.id, json.route.clientId)
            clearListRoutes()
            listRoutesDoneFalse()
            functionCloseModalRoute()
            tagLiRoutes()
        }
    } else {
        infoRoute.innerHTML = 'Preencha os campos obrigatórios!'
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
    if(motoboys.status == 401){
        deslogar()
    }
    const json = await motoboys.json()
    if(json){
        selectMotoboys.innerHTML += `<option value="">Selecione o motoboy para a corrida:* </option>`
        selectFechamentoBoys.innerHTML += `<option value="">Selecione um motoboy:</option>`
        json.motoboys.forEach((item, indice) => {
            tagUlMotoboys.innerHTML += `<li id-item="${item.id}" class="" ><div class="area-li"><div class="area-motoboy-circle" ><div class="motoboy-circle"></div></div><div class="motoboy-name">${item.name}</div><div class="motoboy-cel">${item.celular}</div></div></li>`
            selectMotoboys.innerHTML += `<option value="${item.id}">${item.name}</option>`
            selectFechamentoBoys.innerHTML += `<option value="${item.id}">${item.name}</option>`
        })
    }

    if(json.error){
        deslogar()
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
    if(clients.status == 401){
        deslogar()
    }
    const json = await clients.json()
    if(json){
        optionSelectMotoboys.innerHTML += `<option value="">Selecione a empresa solicitante:* </option>`
        selectInvoiceClients.innerHTML += `<option value="">Selecione um cliente:</option>`
        json.clients.forEach((item, indice) => {
            tagUlClients.innerHTML += `<li id-item="${item.id}" class="" ><div class="area-li"><div class="area-client-circle" ><div class="client-circle"></div></div><div class="client-name">${item.nameFantasy}</div><div class="client-cel">${item.cnpj}</div></div></li>`
            optionSelectMotoboys.innerHTML += `<option value="${item.id}">${item.nameFantasy}</option>`
            selectInvoiceClients.innerHTML += `<option value="${item.id}">${item.nameFantasy}</option>`
        })
    }
}
async function listRoutesDoneFalse() {
    clearListRoutes()
    const routes = await fetch(`/route/done/false`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    if(routes.status == 401){
        deslogar()
    }
    const json = await routes.json()
    console.log(json)
    if(json){
        json.routes.forEach((item, indice) => {
            tagUlRoutes.innerHTML += `<li id-item="${item.id}" class="" >
                                        <div class="area-li"><div class="area-route-circle" >
                                            <div class="client-circle client-circle-anime"></div></div>
                                            <div class="route-name">Empresa solicitante:${item.clientName}</div>
                                            <div class="route-start"> De:${item.startRoute}</div>
                                            <div class="route-end"> Para:${item.endRoute}</div>
                                            <div class="route-motoboy">Rota com: ${item.nameMotoboy ?? ''}</div>
                                            <div class="route-motoboy-value">Valor: R$${item.valueRoute.toFixed(2).replace('.',',') ?? ''}</div>
                                            
                                        </div>
                                        <button href="" id-item="${item.id}">Finalizar rota</button>
                                      </li>`
        })
    }
    functionButtonRoutes()
    tagLiRoutes()
}
async function listRoutesDoneTrue(date) {
    clearListRoutes()
    const routes = await fetch(`/route/done/true/${date}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
    })
    if(routes.status == 401){
        deslogar()
    }
    const json = await routes.json()
    if(json){
        json.routes.forEach((item, indice) => {
            tagUlRoutes.innerHTML += `<li id-item="${item.id}" class="" >
                                        <div class="area-li"><div class="area-route-circle" >
                                            <div class="client-circle client-circle-finaly "></div></div>
                                            <div class="route-name">Empresa solicitante:${item.clientName}</div>
                                            <div class="route-start">De: ${item.startRoute}</div>
                                            <div class="route-end">Para: ${item.endRoute}</div>
                                            <div class="route-motoboy">Rota com: ${item.nameMotoboy ?? ''}</div>
                                            <div class="route-motoboy-value">Valor: R$${item.valueRoute.toFixed(2).replace('.',',') ?? ''}</div>
                                        </div>
                                        <button href="" id-item="${item.id}">Alterar para Rota em Andamento</button>
                                      </li>`
        })
    }
    tagLiRoutes()
    functionButtonRoutes()
    
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
    selectInvoiceClients.innerHTML = ''
    selectFechamentoBoys.innerHTML = ''
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
        break
        case 'Clientes':
            clearListClients()
            alterarLiTres()
            tagLiClients()
            listClients()
            clearListMotoboys()
            
        break
        case 'Rotas':
            clearListClients()
            alterarLiQuatro()
            clearListMotoboys()
            clearListRoutes()
            routeAndamento()
            tagLiRoutes()
        break
        case 'Ordens de Serviço':
            alterarLiCinco()
            listClients() 
            clearListMotoboys()
            clearListClients()
            optionsClientsInvoices()
        break
        case 'Fechamento':
            alterarLiSeis()
            clearListClients()
            listMotoboys()
            optionsMotoboysFechamento()
            // clearListMotoboys()
            // clearListClients()
            // optionsClientsInvoices()
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
    li6.classList.remove('active')
    areaUser.style.display = 'flex'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
    areaFechamento.style.display = 'none'
}
function alterarLiDois(){
    li1.classList.remove('active')
    li2.classList.add('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    li6.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'flex'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
    areaFechamento.style.display = 'none'
}
function alterarLiTres(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.add('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    li6.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'flex'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
    areaFechamento.style.display = 'none'
}
function alterarLiQuatro(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.add('active')
    li5.classList.remove('active')
    li6.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'flex'
    areaInvoice.style.display = 'none'
    areaFechamento.style.display = 'none'
}
function alterarLiCinco(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.add('active')
    li6.classList.remove('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'flex'
    areaFechamento.style.display = 'none'
}
function alterarLiSeis(){
    li1.classList.remove('active')
    li2.classList.remove('active')
    li3.classList.remove('active')
    li4.classList.remove('active')
    li5.classList.remove('active')
    li6.classList.add('active')
    areaUser.style.display = 'none'
    areaMotoboy.style.display = 'none'
    areaClient.style.display = 'none'
    areaRoute.style.display = 'none'
    areaInvoice.style.display = 'none'
    areaFechamento.style.display = 'flex'
}