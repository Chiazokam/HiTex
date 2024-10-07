import { showNotification } from '@mantine/notifications'
import { ExclamationTriangleIcon } from '@/components/Icons'

type Props = {
  title?: string | null
  message: string
}

const showErrorNotification = ({ title, message }: Props) => {
  showNotification({
        id: 'error-notification',
        icon: <ExclamationTriangleIcon className='!h-12 !w-12 !text-red-600' />,
        title,
        message,
        classNames: {
          icon: 'h-12 w-12 !text-red-600 !bg-red-50 rounded-md rounded-lg',
      }
      })
}

export default showErrorNotification
