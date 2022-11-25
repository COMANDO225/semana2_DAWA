// vamos a crear un CRUD

import * as DB from '../../database'

export const findAll = (req, res) => {
    return res.json({
        data: DB.findAll()
    })
}

export const findOne = (req, res) => {
    const { id } = req.params

    return res.json({
        ok: true,
        data: DB.findOne(id)
    })
}

export const create = (req, res) => {
    const { body } = req
    DB.create(body)
    return res.status(201).json({
        ok: true,
        data: body
    })
}

export const update = (req, res) => {
    const { id } = req.params
    const { body } = req
    DB.update(id, body)
    return res.json({
        ok: true,
        data: body
    })
}

export const remove = (req, res) => {
    const { id } = req.params
    DB.remove(id)
    return res.json({
        ok: true,
        data: 'User deleted'
    })
}