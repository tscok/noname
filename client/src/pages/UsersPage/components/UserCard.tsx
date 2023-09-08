import { FC } from 'react'
import { Avatar, Box, Card, CardContent } from '@mui/material'
import { User } from '@backend/*'

import { Paragraph, Text } from '../../../ui'

type UserCardProps = { user: User }

export const UserCard: FC<UserCardProps> = ({ user }) => (
  <Card>
    <CardContent sx={{ display: 'flex' }}>
      <Avatar alt="" src={user.image.smallImageUrl} />
      <Box sx={{ ml: 1 }}>
        <Paragraph>{user.fullName}</Paragraph>
        <Text variant="caption" sx={{ display: 'block', opacity: 0.5 }}>
          {user.title}
        </Text>
      </Box>
    </CardContent>
  </Card>
)
