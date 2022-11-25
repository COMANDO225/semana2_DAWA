
const data = [
    {
        id: 1,
        name: 'Anderson',
        age: 22,
        cargo: 'React Developer',
        salary: 5000,
        status: 'active'
    }
]

export const findAll = () => {
    return data
}

export const findOne = (id) => {
    const user = data.find(user => user.id === Number(id))
    return user
}

export const create = (user) => {
    user.id = data.length + 1
    data.push(user)
}

export const update = (id, user) => {
    const index = data.findIndex(user => user.id === Number(id))
    data[index] = {
        ...data[index],
        ...user
    }
}

export const remove = (id) => {
    const users = data.filter(user => user.id !== Number(id))
    data.length = 0
    data.push(...users)
}

