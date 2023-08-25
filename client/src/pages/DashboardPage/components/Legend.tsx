import { FC } from 'react'

import { Div, Paragraph, Text } from '../../../ui'
import { Stack } from '@mui/material'

type Item = {
  description: string
  title: string
  value: string
}

const colors = [
  '#36A2EB',
  '#FF6484',
  '#FF9F3F',
  '#FFCD56',
  '#4BC0C0',
  '#9966FF',
  '#CACBCF',
] as const

type Color = (typeof colors)[number]

const LegendColor: FC<{ color: Color }> = ({ color }) => (
  <Div
    sx={{
      width: 15,
      height: 15,
      backgroundColor: color,
      mr: 1,
    }}
  />
)

const LegendItem: FC<Item & { color: Color }> = ({
  color,
  description,
  title,
  value,
}) => {
  return (
    <Div>
      <Stack alignItems="center" direction="row">
        <LegendColor color={color} />
        <Paragraph>
          {value} {title}
        </Paragraph>
      </Stack>
      <Text variant="caption">{description}</Text>
    </Div>
  )
}

export const Legend: FC<{ items: Item[] }> = ({ items }) => {
  return items.map((item, index) => {
    const color = colors[index]
    return (
      <LegendItem
        key={color}
        color={color}
        description={item.description}
        title={item.title}
        value={item.value}
      />
    )
  })
}
