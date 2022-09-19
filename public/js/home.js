const btn_sair = document.querySelector('.btn-deslogar')

btn_sair.addEventListener('click', deslogar)
function deslogar() {
    localStorage.removeItem('token')
    window.location = 'index.html'
}