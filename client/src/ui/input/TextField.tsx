import { forwardRef, ForwardedRef } from 'react'
import MuiTextField from '@mui/material/TextField'

type TextFieldProps = {
  error?: string
  isError?: boolean
  label: string
  onBlur?: (value: string) => void
  onChange: (value: string) => void
  required?: boolean
  type?: 'text' | 'number' | 'password'
  value: string | number
}

export const TextField = forwardRef<
  ForwardedRef<HTMLInputElement>,
  TextFieldProps
>(
  (
    { error, isError, label, onBlur, onChange, required, type = 'text', value },
    ref
  ) => (
    <MuiTextField
      inputRef={ref}
      autoComplete="off"
      error={isError}
      helperText={error}
      label={label}
      onBlur={(event) => onBlur?.(event.target.value)}
      onChange={(event) => onChange(event.target.value)}
      required={required}
      size="small"
      type={type}
      value={value}
    />
  )
)
