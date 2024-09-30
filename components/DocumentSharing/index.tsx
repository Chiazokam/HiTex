import { useFormik } from 'formik'
import { useState } from 'react';
import * as yup from 'yup'
import { TextInput, Dialog, Button, TagsInput, Divider, Select } from '@mantine/core'
import { isEmailValid } from '@/lib/isEmailValid'
import AccessOptionsSelect from './AccessOptionsSelect'
import { Link, ChevronDown } from '@/components/Icons';
import UserAvatar from '@/components/UserAvatar';
import InvitedPeople from './InvitedPeople';
import { access } from 'fs';

type ShareDocumentProps = {
    opened: boolean
    close: () => void
}

const ShareDocument = ({ opened, close }: ShareDocumentProps) => {
    const [value, setValue] = useState<string[]>([]);
    const [error, setError] = useState<string>('')

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

    enum AccessType {
        Owner = 'Owner',
        Viewer = 'Viewer', 
        Reviewer = 'Reviewer',
        Editor = 'Editor',
        CoOwner = 'Co-owner'
    }

    const people = [
        { id: 1, email: 'miracle@choplife.com', access: AccessType.Owner },
        { id: 2, email: 'owen@choplife.com', access: AccessType.Viewer },
        { id: 3, email: 'newdawn@choplife.com', access: AccessType.CoOwner }
    ]
    
    return (
        <Dialog
            opened={opened}
            classNames={{
                root: '!w-[450px] !px-0'
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

                <div className='flex flex-col gap-4 px-4'>
                    <span className='text-xs text-zinc-700'>People with access</span>

                    {people.map((person) => <InvitedPeople key={person.id} person={person} />)}
                </div>


                <Divider orientation='horizontal' className='!border-slate-100' />

                <div className='flex px-4 justify-between items-center'>
                    <AccessOptionsSelect />
                    <div className='flex items-center gap-2 hover:bg-zinc-50 cursor-pointer px-2 rounded-md h-5'>
                        <Link className='w-3 h-3 text-zinc-400' />
                        <span className='text-sm text-zinc-700'>Copy link</span>
                    </div>
                </div>
            </div>
      </Dialog>
    )
}

export default ShareDocument
