import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const theme = createTheme({
  fontFamily: 'Mons Sans, sans-serif',
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
      <MantineProvider theme={theme}>
        <Notifications position="bottom-center"  autoClose={5000} />
        {children}
      </MantineProvider>
  )
}
