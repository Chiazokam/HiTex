'use client'

import { Avatar } from '@mantine/core'
import React from 'react'

type UserAvatarProps = {
    image: string
}

const UserAvatar = ({ image }: UserAvatarProps) => {
   return (
    <Avatar src={image} size={34} />
  );
}

export default UserAvatar
