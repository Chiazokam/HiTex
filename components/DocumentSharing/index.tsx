import { useFormik } from 'formik'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import * as yup from 'yup'
import { Dialog, Button, TagsInput, Divider } from '@mantine/core'
import { isEmailValid } from '@/lib/utils/isEmailValid'
import AccessOptionsSelect from './AccessOptionsSelect'
import { LinkIcon } from '@/components/Icons';
import InvitedPeople from './InvitedPeople';
import showSuccessNotification from '@/lib/utils/notifications/showSuccessNotification'
import { showNotification } from '@mantine/notifications'
import { CheckCircleIcon } from '@/components/Icons'

type ShareDocumentProps = {
    opened: boolean
    close: () => void
}

const ShareDocument = ({ opened, close }: ShareDocumentProps) => {
    const [value, setValue] = useState<string[]>([]);
    const [error, setError] = useState<string>('')
    const pathname = usePathname()

    const setEmailValues = (values: string[]) => {
        if (isEmailValid(values[values.length - 1])) {
            setValue([...values])
            setError('')
        } else {
            setError('Invalid email')
        }
    }

    const handleSubmit = () => {
        console.log(value, '<======')
    }

    // enum AccessType {
    //     Owner = 'Owner',
    //     Viewer = 'Viewer', 
    //     Reviewer = 'Reviewer',
    //     Editor = 'Editor',
    //     CoOwner = 'Co-owner'
    // }

    const people = [
        { id: 1, email: 'miracle@choplife.com', access: 'owner' },
        { id: 2, email: 'owen@choplife.com', access:'viewer' },
        { id: 3, email: 'newdawn@choplife.com', access: 'co-owner' },
        // { id: 4, email: 'newdawn@choplife.com', access: 'reviewer' },
        // { id: 5, email: 'newdawn@choplife.com', access: 'editor' },
        // { id: 6, email: 'newdawn@choplife.com', access: 'co-owner' },
        // { id: 7, email: 'newdawn@choplife.com', access: 'co-owner' },
        // { id: 8, email: 'newdawn@choplife.com', access: 'co-owner' },
        // { id: 9, email: 'newdawn@choplife.com', access: 'co-owner' },
        // { id: 10, email: 'newdawn@choplife.com', access: 'co-owner' },
    ]

    const copyToClipboard = () => {
        const path = `${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`
        navigator.clipboard.writeText(path)
        showSuccessNotification({ message: 'Copied to clipboard' })
    }
    
    return (
        <Dialog
            opened={opened}
            classNames={{
                root: '!w-[450px] !px-0 !max-h-[120] relative',
            }}
            onClose={close}
            position={{ top: 80, right: 15 }}
        >
            <div className='flex gap-4 flex-col'>
                <div className='flex gap-2 justify-between px-4'>
                    <TagsInput
                        placeholder={!value ? "Single email or several, separated by commas" : ""}
                        classNames={{
                            root: 'w-[350px]',
                            // input: '!border-2 !border-gray-50 !focus:border-blue-200 !focus:border-2',
                        }}
                        value={value}
                        onChange={(evt) => setEmailValues(evt)}
                        error={error && error}
                        clearable
                        data={['flint@curry.com', 'madea@full.com', 'neo@gator.com']}
                    />

                    <Button onClick={() => handleSubmit()} color='blue.5'>Invite</Button>

                </div>

                <div className='flex flex-col gap-4 px-4 pb-9'>
                    <span className='text-xs text-zinc-700'>People with access</span>
                    <div className='max-h-64 overflow-y-auto flex flex-col gap-4 pb-4'>
                        {people.map((person) => <InvitedPeople key={person.id} person={person} />)}
                    </div>
                </div>

            </div>
                <div className='fixed w-full bg-white bottom-0'>

                    <Divider orientation='horizontal' className='!border-slate-100' />

                    <div className='flex px-4 py-2 justify-between items-center'>
                        <AccessOptionsSelect />
                        <button
                            className='flex items-center gap-2 hover:bg-zinc-50 cursor-pointer px-2 rounded-md h-5'
                            onClick={copyToClipboard}
                        >
                            <LinkIcon className='w-3 h-3 text-zinc-400' />
                            <span className='text-sm text-zinc-700'>Copy link</span>
                        </button>
                    </div>
                </div>
      </Dialog>
    )
}

export default ShareDocument
