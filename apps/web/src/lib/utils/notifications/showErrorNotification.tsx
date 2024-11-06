import { notifications } from '@mantine/notifications'
import { ExclamationTriangleIcon } from '@/components/Icons'

type Props = {
  title?: string | null
  message: string
}

const showErrorNotification = ({ title, message }: Props) => {
  notifications.show({
    id: 'error-notification',
    message,
    title,
    icon: <ExclamationTriangleIcon className="w-6 h-6 text-red-700" />,
    classNames: {
      root: 'z-[var(--z-toast)] shadow-xl px-4 py-3 rounded-lg w-[384px] mx-auto before:content-none flex items-center',
      icon: 'm-0 w-6 h-6 bg-transparent mr-3',
      body: 'mr-4 flex flex-col gap-1 [&>div:nth-child(1)]:text-sm [&>div:nth-child(1)]:leading-5 [&>div:nth-child(1)]:font-medium [&>div:nth-child(1)]:text-primary [&>div:nth-child(1)]:m-0',
    }
  })
}

export default showErrorNotification
