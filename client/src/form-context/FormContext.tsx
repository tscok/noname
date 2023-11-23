import { ReactNode, createContext, useState } from 'react'
import { setValue } from './setValue'
import { GetValidation, OnChange, OnValidate, Validated } from './types'

export type FormContextType<T extends object> = {
  getValidation: GetValidation<T>
  onChange: OnChange<T>
  onValidate: OnValidate<T>
  state: T
}

export const FormContext = createContext<FormContextType<object> | null>(null)

interface FormProviderProps<T> {
  children: ReactNode
  initialState: T
}

export function FormProvider<T extends object>({
  children,
  initialState,
}: FormProviderProps<T>) {
  const [state, setState] = useState<T>(initialState)
  const [validated, setValidated] = useState<Validated<T>>({} as Validated<T>)
  const [dirtyInputs, setDirtyInputs] = useState<string[]>([])

  const getValidation: GetValidation<T> = (path) => validated[path] || {}

  const isInputDirty = (path: string) => dirtyInputs.includes(path)

  const onChange: OnChange<T> = (path, value) => {
    setState((prev) => setValue(prev, path, value))
    if (!isInputDirty(path)) {
      setDirtyInputs((prev) => [...prev, path])
    }
  }

  const onValidate: OnValidate<T> = (path, value) => {
    if (isInputDirty(path)) {
      setValidated((prev) => ({ ...prev, [path]: value }))
    }
  }

  const value = { getValidation, onChange, onValidate, state }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
