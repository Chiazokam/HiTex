import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <MantineProvider>
        <Notifications position="top-center"  autoClose={false} />
        {children}
      </MantineProvider>
  )
}
