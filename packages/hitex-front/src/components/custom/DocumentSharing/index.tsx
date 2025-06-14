import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button, TagsInput, Divider } from '@mantine/core'
import { isEmailValid } from '@/lib/utils/isEmailValid'
import AccessOptionsSelect from './AccessOptionsSelect'
import { LinkIcon, ArrowRightIcon } from '@/components/custom/Icons/heroIcons'
import InvitedPeople from './InvitedPeople'
import showSuccessNotification from '@/lib/utils/notifications/showSuccessNotification'
import showErrorNotification from '@/lib/utils/notifications/showErrorNotification'
import { useClickOutside } from '@mantine/hooks'
import { useIsMobile } from '@/hooks/useIsMoile'
import ShareDocumentWrapper from './ShareDocumentWrapper'

type ShareDocumentProps = {
    opened: boolean
    close: () => void
}

type GuestProps = {
    email: string
    access: string
    invitationStatus?: string
}

const ShareDocument = ({ opened, close }: ShareDocumentProps) => {
    const [guestEmails, setGuestEmails] = useState<string[]>([])
    const [newGuestEmails, setNewGuestEmails] = useState<GuestProps[]>([])
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const pathname = usePathname()
    const docPath = `${process.env.NEXT_PUBLIC_BASE_PATH}${pathname}`
    const isMobile = useIsMobile()

    const ref = useClickOutside(close)

    const setEmailValues = (values: string[]) => {
        if (isEmailValid(values[values.length - 1]) || values.length === 0) {
            setGuestEmails([...values])
            setError('')
        } else {
            setError('Invalid email')
        }
    }

    const handleSubmit = async () => {
        setLoading(true)

        const data = await fetch("/api/email", {
            method: "POST",
            body: JSON.stringify({
                docTitle: 'Seven FundamentalDesign Principles', // get from doc store
                ownerUsername: 'Dylan', // get from auth store
                ownerEmail: 'dylan@mirror.com', // get from auth store
                guestEmails: guestEmails,
                inviteLink: navigator.clipboard.writeText(docPath)
            }),
          })
        if (data.status === 200) {
            setLoading(false)
            showSuccessNotification({ message: 'Invitation Sent' })

            const newGuests = guestEmails.map(email => ({
                email: email,
                access: 'viewer'
            }))
            setNewGuestEmails(newGuests)
            setGuestEmails([])
        } else {
            setLoading(false)
            showErrorNotification({ message: 'Invitation not sent. Please try again later' })
        }
    }

    const people = [
        { email: 'miracle@choplife.com', access: 'owner' },
        { email: 'owen@choplife.com', access:'viewer', invitationStatus: 'pending invitation' },
        { email: 'newdawn@choplife.com', access: 'co-owner', invitationStatus: 'pending invitation' },
        { email: 'newdawn@choplife.com', access: 'editor', invitationStatus: 'pending invitation' },
        { email: 'newdawn@choplife.com', access: 'co-owner', invitationStatus: 'pending invitation' },
        { email: 'newdawn@choplife.com', access: 'co-owner', invitationStatus: 'pending invitation' },
        { email: 'newdawn@choplife.com', access: 'co-owner', invitationStatus: 'rejected' },
        { email: 'newdawn@choplife.com', access: 'co-owner', invitationStatus: 'accepted' },
        { email: 'newdawn@choplife.com', access: 'editor', invitationStatus: 'accepted' },
        { email: 'newdawn@choplife.com', access: 'reviewer', invitationStatus: 'accepted' },
    ]

    const copyToClipboard = () => {
        navigator.clipboard.writeText(docPath)
        showSuccessNotification({ message: 'Copied to clipboard' })
    }

    return (
        <ShareDocumentWrapper opened={opened} close={close}>
            <div className='flex gap-4 flex-col'>
                <div className='flex gap-2 justify-between px-4'>
                    <TagsInput
                        placeholder={!guestEmails ? "Single email or several, separated by commas" : ""}
                        classNames={{
                            root: 'w-[350px]',
                            input: 'border border-zinc-200 focus:border-sky-600'
                        }}
                        value={guestEmails}
                        onChange={(evt) => setEmailValues(evt)}
                        error={error && error}
                        clearable
                        clearButtonProps={{
                            onClick: () => setGuestEmails([])
                        }}
                        data={['flint@curry.com', 'madea@full.com', 'neo@gator.com']}
                    />

                    <Button
                        loading={loading}
                        onClick={() => handleSubmit()}
                        className='px-4 py-1 bg-sky-500 text-white text-sm font-semibold'
                    >
                        {isMobile ? <ArrowRightIcon className='w-5 h-5'/> : 'Invite'}
                    </Button>

                </div>

                <div className='flex flex-col px-4 pb-9'>
                    <span className='text-xs text-zinc-700'>People with access</span>
                    {isMobile && <span className='text-xxs text-zinc-400'>You&apos;ll be able to change a guest&apos;s access only when they accept your invitation</span>}
                    <div className='h-[29rem] xs:max-h-64 overflow-y-auto flex flex-col pt-4 gap-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:"none"] [scrollbar-width:"none"]'>
                        {[...newGuestEmails, ...people].map((person) => <InvitedPeople key={person.email} person={person} />)}
                    </div>
                </div>

            </div>
                <div className='fixed w-full bg-white left-0 bottom-0'>

                    <Divider orientation='horizontal' className='hidden sm:flex border-[0.5px] border-zinc-100' />

                    <div className='flex flex-col gap-2 xs:flex-row px-4 py-2 justify-between xs:items-center'>
                        <AccessOptionsSelect />
                        {isMobile ? <Button className='w-full px-5 py-1 bg-sky-500 text-white text-sm font-semibold'>Copy link</Button> :
                        <Button
                            className='flex items-center gap-4 hover:bg-zinc-50 hover:w-24 hover:h-9 cursor-pointer px-2 rounded-full h-5'
                            onClick={copyToClipboard}
                            variant='default'
                        >
                            <LinkIcon className='w-3 h-3 text-zinc-400 mr-2' />
                            <span className='text-sm text-zinc-700'>Copy link</span>

                        </Button>}
                        </div>
                </div>
      </ShareDocumentWrapper>
    )
}

export default ShareDocument
