import { useContext } from 'react'
import { FormContext, FormContextType } from './FormContext'

export function useFormProvider<T extends object>() {
  const context = useContext(FormContext) as FormContextType<T>
  if (!context) {
    throw new Error('useFormProvider must be used within <FormProvider>')
  }
  return context
}
