import { useState } from 'react';
import { ChevronDownIcon } from '@/components/custom/Icons/heroIcons';
import UserAvatar from '@/components/custom/UserAvatar';
import { Select, Tooltip } from '@mantine/core'
// import { AccessType } from '@/lib/types';
import capitalize from '@/lib/utils/capitalize'


type Props = {
    person: {
        email: string
        // access: 'owner' | 'viewer' | 'reviewer' | 'editor' | 'co-owner'
        access: string
        invitationStatus?: string // 'pending invitation' | 'accepted' | 'rejected'
    }
}

const InvitedPeople = ({ person: { email, access, invitationStatus} }: Props) => {
    const [value, setValue] = useState<string | null>(access)

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <UserAvatar image="" name={email} />

                <div className='flex flex-col'>
                    <span className='text-sm text-zinc-700'>{email}</span>
                    <span className='text-xs text-zinc-400'>{invitationStatus}</span>
                </div>
            </div>

            {/* show owner, and then co-owners at the top of the list */}
            {/* show pending invitations at the top. Accepted/Rejected invitations will be at bottom */}
            {/* All these will come from the backend, when backend is implemented */}
            {invitationStatus !== 'accepted' ?
                <Tooltip
                    withArrow
                    arrowSize={8}
                    multiline
                    w={200}
                    label="You'll be able to change a guest's access only when they accept your invitation"
                    transitionProps={{ transition: 'fade', duration: 300 }}
                    offset={2}
                    className='bg-sky-50 text-zinc-600 text-xs leading-5'
                >
                    <span className='cursor-default border border-zinc-50 rounded-full text-xxs text-zinc-700 px-4 py-2'>
                        {capitalize(access)}
                    </span> 
                </Tooltip>
                :
                <Select
                    withCheckIcon={false}
                    classNames={{
                        wrapper: 'max-w-28',
                        input: 'border-zinc-50 rounded-full text-xxs text-zinc-700 hover:bg-zinc-50 pl-3',
                        option: 'text-xxs'
                    }}
                    value={value}
                    onChange={(value) => setValue(value)}
                    data={[
                        { value: 'viewer', label: 'Viewer' },
                        { value: 'reviewer', label: 'Reviewer' },
                        { value: 'editor', label: 'Editor' },
                        { value: 'co-owner', label: 'Co-owner' },
                        { value: 'owner', label: 'Owner' },
                    ]}
                    rightSection={<ChevronDownIcon className='w-2.5 h-2.5 text-zinc-700' />}
                />
            }
        </div>
    )
}

export default InvitedPeople
