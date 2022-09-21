const form = document.querySelector('form')
const inputEmail = document.querySelector('.email')
const inputPassword = document.querySelector('.password')
const info = document.querySelector('.info')
const botao = document.getElementById('login')


 function login(email, password) {
    botao.addEventListener('click', async (e)=> {
        e.preventDefault()
        if(inputEmail.value  && inputPassword.value ) {
            const email = inputEmail.value
            const password = inputPassword.value
            // const form = new FormData({email, password})
            const obj = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MWZiMjUxLTk1NzYtNDY5Zi1hNjczLTAxOTIzOTlmMzUxZSIsImlhdCI6MTY2MzM1NzQyOSwiZXhwIjoxNjYzNDQzODI5fQ.XQfl85gdeiP6EWpNj3dToIwB3S-qua3WhhCvC8XA3jQ"
                }
                
            }
            const res = await fetch('/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    // 'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0MWZiMjUxLTk1NzYtNDY5Zi1hNjczLTAxOTIzOTlmMzUxZSIsImlhdCI6MTY2MzM1NzQyOSwiZXhwIjoxNjYzNDQzODI5fQ.XQfl85gdeiP6EWpNj3dToIwB3S-qua3WhhCvC8XA3jQ"
                },
                body: new URLSearchParams({
                    email: email, password: password
                })
                
            })
            const json = await res.json()
            if(json.token){
                localStorage.setItem('token', json.token)
                localStorage.setItem('name', json.name)
                localStorage.setItem('email', json.email)
                localStorage.setItem('id', json.id)
                window.location = 'home.html'
            } else {
                info.classList.add('active')
                info.innerHTML = 'E-mail ou senha invalidos'
            }
        } else {
            
        }
        
    })
    
}
login(inputEmail, inputPassword)

if(localStorage.getItem("msg")){
    info.innerHTML = `${localStorage.getItem("msg")}`
    info.classList.add('sucess')
    localStorage.removeItem("msg")
} else if(localStorage.getItem("error")){
    info.innerHTML = `${localStorage.getItem("error")}`
    info.classList.add('active')
    localStorage.removeItem("error")
}
