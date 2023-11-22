import { useContext } from 'react'
import { FormContext, FormContextType } from './FormContext'

export function useFormProvider<T extends object>() {
  const context = useContext<FormContextType<T>>(FormContext)
  if (!context) {
    throw new Error('useFormProvider must be used within <FormProvider>')
  }
  return context
}
