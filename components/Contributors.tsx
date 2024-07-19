'use client'

import { Avatar, AvatarGroup, Tooltip } from '@chakra-ui/react'
import React from 'react'
import UserAvatar from '@/components/UserAvatar'

const contributors = [
  {
    name: "Ciara Noon",
    image: "",
  },
  {
    name: "Salazar Troop",
    image: "",
    initials: "ST",
    color: "red"
  },
  {
    name: "Bandit Crimes",
    image: "",
    initials: "BC",
    color: "lime"
  }
]

type ContributorsProps = {
  className?: string
}

const Contributors = ({ className }: ContributorsProps) => {
   return (
    <div className={className}>
      <AvatarGroup size='xs' max={2} spacing="-0.3rem">
        <Avatar name='Ciara Noon' src='' />
        <Avatar name='Salazar Troop' src='' />
        <Avatar name='Bandit Crimes' src='https://bit.ly/kent-c-dodds' />
        <Avatar name='Malay Bangrof' src='' />
        <Avatar name='Mulan Azxeimer' src='https://bit.ly/ryan-florence' />
      </AvatarGroup>
    </div>
    );
}

export default Contributors
