import { useState } from 'react';
import { ChevronDown } from '@/components/Icons';
import UserAvatar from '@/components/UserAvatar';
import { Select } from '@mantine/core'
// import { AccessType } from '@/lib/types';

enum AccessType {
    Owner = 'Owner',
    Viewer = 'Viewer', 
    Reviewer = 'Reviewer',
    Editor = 'Editor',
    CoOwner = 'Co-owner'
}

type Props = {
    person: {
        id: number
        email: string
        access: AccessType
    }
}

const InvitedPeople = ({ person: { id, email, access} }: Props) => {
    const [value, setValue] = useState<string | null>(access)

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <UserAvatar image="" name={email.substring(0, email.lastIndexOf("@"))} />
                <span className='text-sm text-zinc-700'>{email}</span>
            </div>

            {value === 'owner' ? 
                <span className='border border-zinc-100 rounded-full text-sm text-zinc-700 px-4 py-2'>
                    Owner
                </span> :
                <Select
                    withCheckIcon={false}
                    classNames={{
                        wrapper: 'max-w-28 w-auto',
                        input: '!border-zinc-100 !rounded-full text-sm !text-zinc-700 hover:!bg-zinc-50'
                    }}
                    value={value}
                    onChange={(value) => setValue(value)}
                    data={[
                        { value: 'viewer', label: 'Viewer' },
                        { value: 'reviewer', label: 'Reviewer' },
                        { value: 'editor', label: 'Editor' },
                        { value: 'co-owner', label: 'Co-owner' }, // show co-owner option ONLY if the user is owner
                    ]}
                    rightSection={<ChevronDown className='w-4 h-4 text-zinc-700' />}
                />
            }
        </div>
    )
}

export default InvitedPeople
