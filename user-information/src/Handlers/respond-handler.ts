import { type RequestHandler, type Response } from 'express'

import { type IUser } from '../models/user'

export type responseHandler<T> = {
  status: "success" | "error",
  message: string,
  data?: T
}

export type TypeHandler<T> = RequestHandler<{ id?: string }, responseHandler<T>, never, never>
export type PostHandler<T> = RequestHandler<never, responseHandler<T>, Partial<IUser> | undefined, never>

export const sendError = (res: Response, statusCode: number, message: string) => {
  return res.status(statusCode).json({ status: 'error', message })
}

export const sendSuccess = <T>(res: Response, statusCode: number, message: string, data?: T) => {
  return res.status(statusCode).json({ status: 'success', message, data })
}