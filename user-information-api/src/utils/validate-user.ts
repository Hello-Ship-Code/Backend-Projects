import { type IUser } from '../models/user'

export const validateUserData = (data: Partial<IUser>): string | null => {
  const { firstName, lastName, email, gender, jobTitle } = data

  if (!firstName || typeof firstName !== 'string') return 'required first name and first name must be string'

  if (!lastName || typeof lastName !== 'string') return 'email is required and must be a valid email address'
  if (!email || typeof email !== 'string' || !email.includes('@')) return 'required first name and first name must be string'

  if (!gender || typeof gender !== 'string') return 'required gender and gender must be string'

  if (!jobTitle || typeof jobTitle !== 'string') return 'required job title and it must be string'

  return null
}
