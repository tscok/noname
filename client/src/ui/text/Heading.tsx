import { FC } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Variants =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'

interface HeadingProps extends TypographyProps {
  variant: Extract<TypographyProps['variant'], Variants>
}

export const Heading: FC<HeadingProps> = (props) => <Typography {...props} />
