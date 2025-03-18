import { Types } from 'mongoose'

import { type TypeHandler } from '../../Handlers/respond-handler'
import { user, type IUser } from '../../models/user'

export const updateUserByIdMiddleWare: TypeHandler<IUser> = async (req, res, next) => {
  try {
    const paramId = req.params.id?.trim()

    if (!paramId) {
      res.status(404).json({ status: 'error', message: 'user id not found' })
      return
    }
    const id = new Types.ObjectId(paramId)
    res.locals.userId = id
    next()
  } catch (_) {
    res.status(400).json({ status: 'error', message: 'invalid user id' })
  }
}

export const updateUserById: TypeHandler<IUser> = async (req, res) => {
  try {
    const userdata = await user.findByIdAndUpdate(res.locals.userId, req.body, { new: true })
    if (!userdata) {
      res.status(404).json({ status: 'error', message: 'user not found' })
      return
    }
    res.status(200).json({ status: 'success', message: 'you got what you want', data: userdata })
  } catch (_) {
    res.status(400).json({ status: 'error', message: 'server side error' })
  }
}
