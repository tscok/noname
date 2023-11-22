import { FC } from 'react'
import { TextField } from '../../../ui'
import { useFormProvider } from '../../../form-context'
import { FormState } from './formState'

export const LoginForm: FC = () => {
  const { onChange, state } = useFormProvider<FormState>()

  return (
    <>
      <TextField
        label="Username"
        onChange={(value) => onChange('username', value)}
        value={state.username}
      />
      <TextField
        label="Password"
        onChange={(value) => onChange('password', value)}
        type="password"
        value={state.password}
      />
    </>
  )
}
