import { showNotification } from '@mantine/notifications'
import { CheckCircleIcon } from '@/components/Icons'

type Props = {
  title?: string | null
  message: string
}

const showSuccessNotification = ({ title, message }: Props) => {
  showNotification({
        id: 'success-notification',
        icon: <CheckCircleIcon className='!h-12 !w-12 !text-green-600' />,
        title,
        message,
        classNames: {
          icon: 'h-12 w-12 !text-green-600 !bg-green-50 rounded-md rounded-lg',
          root: 'bg-red-400'
      }
      })
}

export default showSuccessNotification
