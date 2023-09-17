import { validatePasswordStrength } from '@utils'
import * as yup from 'yup'

export const signUpSchema = yup.object({
  firstName: yup.string().trim().required('First name is required'),
  lastName: yup.string().trim().required('Last name is required'),
  email: yup.string().required('Email is required').email().required('Please enter a valid email'),
  password: yup
    .string()
    .min(8, 'password must be minimum 8 characters')
    .required('password is required')
    .test('passwordGuidelines', 'Invalid password', (value) =>
      Object.values(validatePasswordStrength(value ?? '')).every((v) => v)
    ),
})
export type SignUpFormSchema = yup.InferType<typeof signUpSchema>
