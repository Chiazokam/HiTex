import { cn } from '@/lib/utils'
import { memo, useCallback } from 'react'
import { useClickOutside } from '@mantine/hooks'
import { Editor } from '@tiptap/react'
import { TableOfContents } from '../TableOfContents'
import { Divider } from '@mantine/core'
import { Toolbar } from '@/components/ui/Toolbar'
import { Icon } from '@/components/ui/Icon'

export const Sidebar = memo(
  ({ editor, isOpen, onClose }: { editor: Editor; isOpen?: boolean; onClose: () => void }) => {

    const ref = useClickOutside(onClose)
    const handlePotentialClose = useCallback(() => {
      if (window.innerWidth < 1024) {
        onClose()
      }
    }, [onClose])

    const windowClassName = cn(
      'absolute top-0 left-0 bg-white lg:bg-white/30 lg:backdrop-blur-xl h-full lg:h-auto lg:relative z-[999] w-0 duration-300 transition-all',
      'dark:bg-black lg:dark:bg-black/30',
      !isOpen && 'border-r-transparent',
      isOpen && 'w-64 border-r border-r-zinc-50 shadow-inner dark:border-r-neutral-800',
    )

    return (
      <div ref={ref} className={windowClassName}>
        <div className="w-full h-full overflow-hidden">

        <div className='p-4'>
            <h1 className='font-black text-2xl'>HAItex</h1>

            <Divider orientation='horizontal' className='mt-4 border-[0.5px] border-zinc-100' />
            <Toolbar.Button className='flex gap-2 my-1 text-sky-600 hover:text-sky-700 px-0 hover:bg-transparent'>
              <Icon name="CirclePlus" />
              <span>New Document</span>
            </Toolbar.Button>
            <Divider orientation='horizontal' className='border-[0.5px] border-zinc-100' />

            <div className='w-56 mt-4'>
              <Toolbar.Button className='flex gap-2 my-1 px-0'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='w-52 truncate text-zinc-500'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='flex gap-2 my-1 px-0'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='w-52 truncate text-zinc-700'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='flex gap-2 my-1 px-0'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='w-52 truncate text-zinc-500'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='flex gap-2 my-1 px-0'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='w-52 truncate text-zinc-500'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
            </div>

            <div className="w-full h-full p-6 overflow-auto">
              {/* Include sidebar content */}
            </div>
        </div>
        </div>
      </div>
    )
  },
)

Sidebar.displayName = 'TableOfContentSidepanel'
