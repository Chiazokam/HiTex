import { Dialog, Drawer } from '@mantine/core'
import { ReactNode } from 'react';
import { useIsMobile } from '@/lib/hooks/useIsMoile'
import { useClickOutside } from '@mantine/hooks'

type Props = {
    children: ReactNode
    opened: boolean
    close: () => void
}

const CloseText = () => {
    return <span className='mr-4 text-sky-600 text-sm'>Done</span>
}

const ShareDocumentWrapper = ({ children, opened, close }: Props) => {
    const isMobile = useIsMobile()

    const closeDialog = () => {
        close()
    }

    const ref = useClickOutside(closeDialog)


    return (
        <>
            {isMobile ? 
                <Drawer
                    radius="md"
                    opened={opened}
                    onClose={close}
                    position='bottom'
                    title='Invite people to view your work'
                    offset={4}
                    closeOnClickOutside
                    closeOnEscape
                    trapFocus={false}
                    withinPortal
                    classNames={{
                        title: 'text-zinc-700 text-base font-medium my-0',
                        content: 'overflow-hidden h-full',
                        body: 'p-0'
                    }}
                    closeButtonProps={{
                        icon: <CloseText />,
                      }}
                >
                    {children}
                </Drawer> : 
                <Dialog
                    opened={opened}
                    // ref={ref}
                    classNames={{
                        root: 'w-[450px] !px-0 max-h-[120] relative',
                    }}
                    onClose={close}
                    position={{ top: 80, right: 15 }}
                >
                    {children}
                </Dialog>
            }
        </>
    )
}

export default ShareDocumentWrapper
