import { Router } from 'express'

import { deleteUserById, deleteUserByIdMiddleware } from '../controllers/user/delete-user'
import { getUserById, basicGet, getUserByIdMiddleware } from '../controllers/user/get-user'
import { postUser } from '../controllers/user/post-user'
import { updateUserById, updateUserByIdMiddleWare } from '../controllers/user/update-user'

const useRouter = Router()

useRouter.route('/')
  .get(basicGet)
  .post(postUser)

useRouter.route('/:id')
  .get(getUserByIdMiddleware, getUserById)
  .patch(updateUserByIdMiddleWare, updateUserById)
  .delete(deleteUserByIdMiddleware, deleteUserById)

export { useRouter }
