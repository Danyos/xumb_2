let logbars = document.querySelector('#loginBars')
let regbar = document.querySelector('.registerBars')
let userList = []
if (localStorage['users']) {
    userList = JSON.parse(localStorage['users'])
}

function openBar(arg) {
    if (arg === 'Register') {
        regbar.classList.remove('d-none')
        logbars.classList.add('d-none')
    } else {
        regbar.classList.add('d-none')
        logbars.classList.remove('d-none')
    }
}

function registerinfo() {
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    let username = document.querySelector('#username')
    let password = document.querySelector('#password')
    let cpassword = document.querySelector('#cpassword')

    if (password.value === cpassword.value && !userList.some(res => res.username === username.value)) {
        userList = [

            ...userList,
            {
                id: userList.length ? userList[userList.length - 1].id + 1 : 1,
                name: name.value,
                email: email.value,
                username: username.value,
                password: password.value,
            }

        ]

        localStorage.setItem('users', JSON.stringify(userList))

        name.value = ''
        email.value = ''
        username.value = ''
        password.value = ''
        cpassword.value = ''
    } else {
        alert("password not match")
    }
}

function Logininfo() {
    let    ussname=document.querySelector('#l_username').value
    let    psw=document.querySelector('#l_psw').value

    let x=userList.find(res=>res.username.toLowerCase()===ussname.toLowerCase() && res.password===psw)
    if (x) {
        window.location.href = 'http://google.com'
    } else {
        alert("username or password is wrong")
    }

}