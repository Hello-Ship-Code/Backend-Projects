import { sendError, sendSuccess, type PostHandler } from "../../Handlers/respond-handler"
import { type IUser, user } from "../../models/user"

import { validateUserData } from '../../utils/validate-user';

export const postUser: PostHandler<IUser> = async (req, res) => {
  try {
    const body = req.body ?? {}
    const validationError = validateUserData(body)
    if (validationError) {
      sendError(res, 400, validationError)
    }

    const { firstName, lastName, email, gender, jobTitle } = body

    const savedUser = await new user({ firstName, lastName, email, gender, jobTitle }).save()
    sendSuccess(res, 201, "User data posted to DB", {
      id: savedUser._id.toString(),
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
      gender: savedUser.gender,
      jobTitle: savedUser.jobTitle
    })
  } catch (error) {
    res.json({ status: 'error', message: 'server side error' })
    console.log('This is the error Message ❌: ', error)
  }
}