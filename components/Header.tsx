import React from 'react'
import { FileText, EllipsisVertical } from 'lucide-react';
import { Divider, Button } from '@chakra-ui/react'
import Contributors from '@/components/Contributors';
import UserAvatar from '@/components/UserAvatar';

const Header = () => {
    return (
        <div className='flex border-b py-5 px-4 mb-4 justify-between'>
            <div className='flex gap-2 align-items'>
                <div className='border rounded-full bg-red-100 p-1 border-red-100'>
                    <FileText size={16} color='#BF6388' />
                </div>
                <span className='font-thin'>Seven Fundamental Design Principles</span>
            </div>

            <div className='flex gap-2 items-center'>
                <Contributors />
                <Divider orientation="vertical" />
                <Button colorScheme='blue' size='sm'>Share</Button>
                <div className='border rounded py-1.5 px-1'>
                    <EllipsisVertical size={15} />
                </div>
                <div className='cursor-pointer'>
                    <UserAvatar image='' name='Ciara Noon' />
                </div>
            </div>
        </div>
    )
}

export default Header
