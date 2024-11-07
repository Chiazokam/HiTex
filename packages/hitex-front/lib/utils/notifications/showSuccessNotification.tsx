import { notifications } from '@mantine/notifications'
import { CheckCircleIcon } from '@/components/Icons'

type Props = {
  title?: string | null
  message: string
}

const showSuccessNotification = ({ title, message }: Props) => {
  notifications.show({
    id: 'success-notification',
    message,
    title,
    icon: <CheckCircleIcon className="w-6 h-6 text-green-500" />,
    classNames: {
      root: 'z-[var(--z-toast)] shadow-xl px-4 py-3 rounded-lg w-[384px] mx-auto before:content-none flex items-center',
      icon: 'm-0 w-6 h-6 bg-transparent mr-3',
      body: 'mr-4 flex flex-col gap-1 [&>div:nth-child(1)]:text-sm [&>div:nth-child(1)]:leading-5 [&>div:nth-child(1)]:font-medium [&>div:nth-child(1)]:text-primary [&>div:nth-child(1)]:m-0',
  }
})
}

export default showSuccessNotification
