import { Dialog, Drawer } from '@mantine/core'
import { ReactNode } from 'react';
import { useIsMobile } from '@/lib/hooks/useIsMoile'
import { useClickOutside } from '@mantine/hooks'

type Props = {
    children: ReactNode
    opened: boolean
    close: () => void
}

const ShareDocumentWrapper = ({ children, opened, close }: Props) => {
    const isMobile = useIsMobile()
    const ref = useClickOutside(close)

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
                    withCloseButton={false}
                    withinPortal
                    classNames={{
                        title: 'text-zinc-700 !font-medium',
                        root: 'overflow-x-hidden'
                    }}
                >
                    {children}
                </Drawer> : 
                <Dialog
                    opened={opened}
                    ref={ref}
                    classNames={{
                        root: '!w-[450px] !px-0 !max-h-[120] relative',
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
