import { Types } from 'mongoose'

import { type TypeHandler } from '../../Handlers/respond-handler'
import { user, type IUser } from '../../models/user'

export const getUserByIdMiddleware: TypeHandler<IUser> = async (req, res, next) => {
  try {
    const paramId = req.params.id?.trim()
    if (!paramId) {
      res.status(404).json({ status: 'error', message: 'user id not found' })
      return
    }
    const id = new Types.ObjectId(paramId)
    res.locals.userId = id
    next()
  } catch (error) {
    res.json({ status: 'error', message: 'server side error' })
    console.log('This is the error Message ❌: ', error)
  }
}

export const getUserById: TypeHandler<IUser> = async (_req, res) => {
  try {
    const userData = await user.findOne(res.locals.userId);
    if (!userData) {
      res.status(404).json({ status: 'error', message: 'user id not found' })
      return
    }
    res.status(200).json({ status: "success", message: "user data", data: userData })

  } catch (error) {
    res.json({ status: 'error', message: 'server side error' })
    console.log('This is the error Message ❌: ', error)
  }
}

export const basicGet: TypeHandler<IUser[]> = async (_req, res) => {
  try {
    const data = await user.find({})
    if (!data || data.length === 0) {
      res.status(400).json({ status: 'error', message: 'no user found' })
      return
    }
    res.status(200).json({ status: 'success', message: 'user data successfully ', data: data })
  } catch (error) {
    res.json({ status: 'error', message: 'server side error' })
    console.log('This is the error Message ❌: ', error)
  }
}
