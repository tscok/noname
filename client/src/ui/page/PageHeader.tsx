import { FC, PropsWithChildren } from 'react'
import { Stack } from '@mui/material'
import { DatePicker, DatePickerProps, PageTitle } from '..'

type PageHeaderProps = PropsWithChildren & {
  datePickerProps?: DatePickerProps
  title: string
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  datePickerProps,
  title,
}) => (
  <Stack direction="row" justifyContent="space-between" spacing={2}>
    <PageTitle>{title}</PageTitle>
    {children}
    {datePickerProps && <DatePicker {...datePickerProps} />}
  </Stack>
)
