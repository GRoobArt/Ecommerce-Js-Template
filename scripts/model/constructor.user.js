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
  } = {}) {
    this.id = id ?? UUID()
    this.email = email
    this.name = name
    this.gender = gender
    this.lastname = lastname
    this.birthday = birthday
    this.fullname = this.name + ' ' + this.lastname
    this.group = group
  }

  userLogin({ email, name, lastname, gender, birthday }) {
    this.email = email
    this.name = name
    this.lastname = lastname
    this.gender = gender
    this.birthday = birthday
    this.fullname = `${name} ${lastname}`
    this.group = 'customer'
  }

  userlogOut() {
    this.email = ''
    this.name = ''
    this.lastname = ''
    this.fullname = ''
    this.group = 'guest'
  }
}

export default User
