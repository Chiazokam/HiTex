import { useState } from 'react';
import { ChevronDownIcon } from '@/components/Icons';
import UserAvatar from '@/components/UserAvatar';
import { Select } from '@mantine/core'
// import { AccessType } from '@/lib/types';


type Props = {
    person: {
        email: string
        // access: 'owner' | 'viewer' | 'reviewer' | 'editor' | 'co-owner'
        access: string
    }
}

const InvitedPeople = ({ person: { email, access} }: Props) => {
    const [value, setValue] = useState<string | null>(access)

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <UserAvatar image="" name={email} />
                <span className='text-sm text-zinc-700'>{email}</span>
            </div>

            {/* show owner, and then co-owners at the top of the list */}
            {value === 'owner' ?  // This will come from the backend, when backend is implemented
                <span className='border border-zinc-50 rounded-full text-xs text-zinc-700 px-4 py-2'>
                    Owner
                </span> :
                <Select
                    withCheckIcon={false}
                    classNames={{
                        wrapper: 'max-w-28',
                        input: '!border-zinc-50 !rounded-full !text-xs !text-zinc-700 hover:!bg-zinc-50',
                        option: '!text-xs'
                    }}
                    value={value}
                    onChange={(value) => setValue(value)}
                    data={[
                        { value: 'viewer', label: 'Viewer' },
                        { value: 'reviewer', label: 'Reviewer' },
                        { value: 'editor', label: 'Editor' },
                        { value: 'co-owner', label: 'Co-owner' },
                    ]}
                    rightSection={<ChevronDownIcon className='w-3 h-3 text-zinc-700' />}
                />
            }
        </div>
    )
}

export default InvitedPeople
