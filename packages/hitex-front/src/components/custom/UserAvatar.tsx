'use client'

import { Avatar } from '@mantine/core'
import React from 'react'

type UserAvatarProps = {
    image: string
    name: string
    size?: number
}

const UserAvatar = ({ image, name, size = 30 }: UserAvatarProps) => {
   return (
    <Avatar src={image} name={name} color='initials' size={size} />
  );
}

export default UserAvatar
