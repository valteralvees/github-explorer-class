type User = {
  name: string
  email: string
  address {
    city: string
    state?: string
  }
}

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city}. Your state is ${user.address.state}.`
}

showWelcomeMessage({
  name: 'Jhon Doe'
  email: 'jhon@doe.com',
  address:{
    city: 'New York',
    state: 'NY',
  }

})