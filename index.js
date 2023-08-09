const { faker } = require('@faker-js/faker') 
module.exports = () => {
    const data = { users: [] }
    for (let i = 0; i < 100; i++) {
        data.users.push({ 
            id: faker.string.uuid(),
            name: faker.internet.userName(),
            email: faker.internet.email(),
            avatar: faker.image.avatar(),
            birthdate: faker.date.birthdate(),
            registeredAt: faker.date.past(),
        })
    }
    return data
}