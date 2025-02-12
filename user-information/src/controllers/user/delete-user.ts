import { Types } from 'mongoose'

import { type TypeHandler } from '../../Handlers/respond-handler'
import { type IUser, user } from '../../models/user'

// Middle ware
export const deleteUserByIdMiddleware: TypeHandler<IUser> = async (req, res, next) => {
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
    res.status(404).json({ status: 'error', message: 'invalid user id' })
  }
}

export const deleteUserById: TypeHandler<IUser> = async (_req, res) => {
  try {
    const userId = await user.findByIdAndDelete(res.locals.userId)
    if (!userId) {
      res.status(400).json({ status: 'error', message: 'user not found' })
      return
    }
    res.status(200).json({ status: 'success', message: 'user deleted' })
  } catch (error) {
    res.status(400).json({ status: 'error', message: 'server issue guys' })
    console.log('The error is: ', error)
  }
}
