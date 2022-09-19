const nameInput = document.querySelector('.name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const password2 = document.querySelector('.password2')
const divInfo = document.querySelector('.info')
const btnRegister = document.querySelector('button')

// btnRegister.addEventListener('click', register(name, email, password, password2))

function register(name, email, password, password2) {
    btnRegister.addEventListener('click', async () => {
        console.log(password.value, password2.value, name.value, email.value)
        if(password.value === password2.value) {
            const user = await fetch('/user', {
                method: 'POST',
                body:new URLSearchParams({
                    name: name.value, email: email.value, password: password.value
                })
            })
            const json = await user.json()
            if(json) {
                localStorage.setItem('msg', "Usuario cadastrado com sucesso. Faça o login")
                window.location.href = 'index.html'
            }
        } else {
            divInfo.innerHTML = "As senhas não conferem"
        }
    })
} 
register(nameInput, email, password, password2)