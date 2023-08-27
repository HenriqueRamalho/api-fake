const { faker } = require('@faker-js/faker') 
module.exports = () => {
    const data = { users: [], cars: [] }
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

    for(let i = 0; i < 50; i++) {
        data.cars.push({
            id: faker.string.uuid(),
            manufacturer: faker.vehicle.manufacturer(),
            model: faker.vehicle.model()
        })
    }
    return data
}