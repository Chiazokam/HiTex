'use client'

import React from 'react'
import { FileText, EllipsisVertical } from '@/components/Icons';
import { Divider, Button } from '@mantine/core'
import Contributors from '@/components/Contributors';
import UserAvatar from '@/components/UserAvatar';
import { useDisclosure } from '@mantine/hooks';
import ShareDocument from '@/components/DocumentSharing';

const Header = () => {
    const [opened, { open, close }] = useDisclosure(false)
    return (
        <header className='flex border-b fixed z-2 top-0 w-full shadow-lg border-gray-100 py-5 px-8 bg-white justify-between h-[64px]'>
            <div className='flex gap-3 items-center'>
                <div className='border rounded-full bg-red-100 p-1 border-red-100'>
                    <FileText size={16} color='#BF6388' />
                </div>
                <span className='font-thin w-48 truncate md:w-full'>Seven Fundamental Design Principles</span>
            </div>

            <div className='flex gap-3 items-center'>
                <Contributors className='hidden md:flex' />
                <Divider orientation="vertical" className='hidden md:flex' />
                <div className='hidden md:flex'>
                    <Button size='sm' color='blue.5' onClick={open}>Share</Button>
                </div>
                
                <ShareDocument opened={opened} close={close} />

                <div className='border rounded py-1.5 px-1 cursor-pointer border-gray-200'>
                    <EllipsisVertical size={15} />
                </div>
                <div className='cursor-pointer'>
                    <UserAvatar image='' name='Dylan Mirror' />
                </div>
            </div>
        </header>
    )
}

export default Header
