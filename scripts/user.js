import dataSession from '../data/data.controller.js'

// Generación de un Usuario
const formLogin = document.querySelector('#form-login')
const sectionLogin = document.querySelector('#login')

const UserSession = dataSession.user

formLogin.addEventListener('submit', (e) => {
  e.preventDefault()

  const User = {
    email: e.target.email.value,
    name: e.target.firstname.value,
    lastname: e.target.lastname.value,
    gender: e.target.gender.options[e.target.gender.selectedIndex].value,
    birthday: e.target.birthday.value,
  }

  dataSession.user.userLogin(User)

  Swal.fire({
    title: `Bienvenido ${dataSession.user.fullname}`,
    customClass: {
      confirmButton: 'button primary fill',
      confirmButtonText: 'Seguir Navegando',
    },
  }).then((res) => {
    if (res.isConfirmed) {
      dataSession.postUser()
      sectionLogin.style.display = 'none'
      location.reload()
    } else {
      dataSession.postUser()
      sectionLogin.style.display = 'none'
      location.reload()
    }
  })
})

const buttonLogOut = document.querySelector('.button.logout')
if (buttonLogOut) {
  buttonLogOut.addEventListener('click', (e) => {
    e.preventDefault()
    dataSession.deleteUser()
    location.reload()
  })
}

const UserLogin = dataSession.getUser()

if (UserLogin.group === 'customer') {
  sectionLogin.style.display = 'none'
}
