import UUID from '../helper/UUID.js'

class User {
  constructor({
    id = UUID(),
    name = '',
    email = '',
    gender = '',
    lastname = '',
    birthday = '',
    group = 'guest',
    token = '',
  } = {}) {
    this.id = id ?? UUID()
    this.email = email
    this.name = name
    this.gender = gender
    this.lastname = lastname
    this.birthday = birthday
    this.fullname = this.name + ' ' + this.lastname
    this.group = group
    this.token = token
  }

  async userLogin({ email, name, lastname, gender, birthday }) {
    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      }),
    })
    const data = await res.json()

    this.email = email
    this.name = name
    this.lastname = lastname
    this.gender = gender
    this.birthday = birthday
    this.fullname = `${name} ${lastname}`
    this.group = 'customer'
    this.setToken(data.token)
  }

  setToken(token) {
    this.token = token
  }

  userlogOut() {
    this.email = ''
    this.name = ''
    this.lastname = ''
    this.fullname = ''
    this.group = 'guest'
    this.token = ''
  }
}

export default User
