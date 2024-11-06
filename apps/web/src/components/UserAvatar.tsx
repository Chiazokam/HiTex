'use client'

import { Avatar } from '@mantine/core'
import React from 'react'

type UserAvatarProps = {
    image: string
    name: string
}

const UserAvatar = ({ image, name }: UserAvatarProps) => {
   return (
    <Avatar src={image} name={name} color='initials' size={34} />
  );
}

export default UserAvatar
