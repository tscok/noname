import { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

interface TextProps extends TypographyProps {
  variant: Extract<
    TypographyProps['variant'],
    'button' | 'caption' | 'inherit' | 'overline'
  >
}

export const Text: FC<TextProps> = (props) => <Typography {...props} />
