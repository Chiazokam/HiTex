import React from 'react'
import { FileText, EllipsisVertical } from 'lucide-react';
import { Divider, Button } from '@mantine/core'
import Contributors from '@/components/Contributors';
import UserAvatar from '@/components/UserAvatar';

const Header = () => {
    return (
        <div className='flex border-b fixed z-100 top-0 w-full border-gray-100 py-5 px-12 bg-white justify-between'>
            <div className='flex gap-3 items-center'>
                <div className='border rounded-full bg-red-100 p-1 border-red-100'>
                    <FileText size={16} color='#BF6388' />
                </div>
                <span className='font-thin'>Seven Fundamental Design Principles</span>
            </div>

            <div className='flex gap-3 items-center'>
                <Contributors className='hidden md:flex' />
                <Divider orientation="vertical" className='hidden md:flex' />
                <Button size='sm' className='hidden md:flex'>Share</Button>
                <div className='border rounded py-1.5 px-1 cursor-pointer border-gray-200'>
                    <EllipsisVertical size={15} />
                </div>
                <div className='cursor-pointer'>
                    <UserAvatar image='' />
                </div>
            </div>
        </div>
    )
}

export default Header
