'use client'

import React from 'react'
import { DocumentTextIcon, EllipsisVerticalIcon, ArrowUpOnSquareIcon } from '@/components/Icons';
import { Share2Icon } from '@/components/Icons/radixIcons';
import { Divider, Button } from '@mantine/core'
import Contributors from '@/components/Contributors';
import UserAvatar from '@/components/UserAvatar';
import { useDisclosure } from '@mantine/hooks';
import ShareDocument from '@/components/DocumentSharing';

const Header = () => {
    const [opened, { open, close }] = useDisclosure(false)
    return (
        <header className='flex border-b fixed z-2 top-0 w-full shadow-lg border-gray-100 py-5 px-4 sm:px-6 bg-white justify-between h-[64px]'>
            <div className='flex gap-3 items-center'>
                <div className='border rounded-full bg-red-100 p-1 border-red-100'>
                    <DocumentTextIcon className='w-4 h-4' color='#BF6388' />
                </div>
                <span className='font-thin w-48 truncate sm:w-full'>Seven Fundamental Design Principles</span>
            </div>

            <div className='flex gap-2 items-center'>
                <Contributors className='hidden sm:flex' />
                <Divider orientation="vertical" className='hidden sm:flex' />
                
                <Button className='!hidden sm:!flex' size='sm' color='blue.5' onClick={open}>Share</Button>
                <Share2Icon fontWeight={1} className='!flex sm:!hidden w-5 h-5 text-gray-300 font-thin' onClick={open} />
                
                <ShareDocument opened={opened} close={close} />

                <EllipsisVerticalIcon className='w-4 h-4 !flex sm:!hidden' />
                <div className='cursor-pointer !hidden sm:!flex'>
                    <UserAvatar image='' name='Dylan Mirror' />
                </div>
            </div>
        </header>
    )
}

export default Header
