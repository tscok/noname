import { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface ParagraphProps extends TypographyProps {
  variant?: Extract<TypographyProps['variant'], 'body1' | 'body2'>
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  variant = 'body1',
  ...props
}) => (
  <Typography {...props} variant={variant}>
    {children}
  </Typography>
)
