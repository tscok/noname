import { FC } from 'react'
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker'
import { DateTime } from 'luxon'

export type DatePickerProps = {
  onChange: (newValue: DateTime) => void
  value: DateTime
}

export const DatePicker: FC<DatePickerProps> = ({ onChange, value }) => (
  <MuiDatePicker
    label="Date"
    onChange={(newValue) => newValue && onChange(newValue)}
    slotProps={{ textField: { size: 'small' } }}
    value={value}
  />
)
