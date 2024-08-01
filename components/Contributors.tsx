'use client'

import { Avatar, Tooltip } from '@mantine/core'
import React from 'react'

const contributors = [
  {
    name: "Ciara Noon",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    name: "Salazar Troop",
    image: "",
    initials: "ST",
    color: "red"
  },
  {
    name: "Bandit Crimes",
    image: "https://bit.ly/ryan-florence",
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
       <Tooltip.Group openDelay={300} closeDelay={100}>
        <Avatar.Group spacing="sm">
          {contributors.map(contributor => (
            <Tooltip key={contributor.name}  label={contributor.name} withArrow>
              <Avatar size={34} src={contributor.image} />
            </Tooltip>
            ))}
        </Avatar.Group>
       </Tooltip.Group>
    </div>
    );
}

export default Contributors
