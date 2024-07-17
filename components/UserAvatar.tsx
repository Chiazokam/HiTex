'use client'

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import React from 'react'

type UserAvatarProps = {
    image: string
    name: string
}

const UserAvatar = ({ image, name }: UserAvatarProps) => {
   return (
    <Avatar src={image} name={name} size="xs" />
  );
}

export default UserAvatar
