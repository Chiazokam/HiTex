import { cn } from '@/lib/utils'
import { memo } from 'react'
import { useClickOutside } from '@mantine/hooks'
import { Editor } from '@tiptap/react'
import { Divider } from '@mantine/core'
import { Toolbar } from '@/components/ui/Toolbar'
import { Icon } from '@/components/ui/Icon'
import { ChevronRightIcon } from '@/components/custom/Icons/heroIcons'
import UserAvatar from '@/components/custom/UserAvatar';

export const Sidebar = memo(
  ({ editor, isOpen, onClose }: { editor: Editor; isOpen?: boolean; onClose: () => void }) => {

    const ref = useClickOutside(onClose)

    const windowClassName = cn(
      'absolute top-0 left-0 bg-white lg:bg-white/30 lg:backdrop-blur-xl h-full lg:h-auto lg:relative z-[999] w-0 duration-300 transition-all',
      'dark:bg-black lg:dark:bg-black/30',
      !isOpen && 'border-r-transparent',
      isOpen && 'w-64 border-r border-r-zinc-50 shadow-inner dark:border-r-neutral-800',
    )

    return (
      <div ref={ref} className={windowClassName}>
        <div className="w-full h-full overflow-hidden">

        <nav className='h-full p-2 relative flex flex-col'>
          <div>
            <h1 className='font-black text-2xl'>HAItex</h1>

            <Divider orientation='horizontal' className='mt-4 border-[0.5px] border-zinc-100' />
            <Toolbar.Button className='flex gap-2 my-1 text-sky-600 hover:text-sky-700 px-0 hover:bg-transparent'>
              <Icon name="CirclePlus" />
              <span>New Document</span>
            </Toolbar.Button>
            <Divider orientation='horizontal' className='border-[0.5px] border-zinc-100' />
          </div>

            <div className='grow space-y-2 mt-4 overflow-x-hidden overflow-y-auto'>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium tracking-wide'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-bold tracking-wide'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium tracking-wide'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium tracking-wide'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              {/* <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button>
              <Toolbar.Button className='w-60 flex gap-2 my-1 px-0.5 py-0.5 hover:bg-zinc-50'>
                <Icon strokeWidth={1} name="FileText" />
                <span className='truncate text-zinc-500 font-medium'>Seven Fundamental Design Principles</span>
              </Toolbar.Button> */}
            </div>

            <div className="justify-self-end w-full py-2 -px-2 border-t border-zinc-100">
              <div  className='px-2 flex items-center justify-between'>
                <div className='flex gap-3'>
                  <UserAvatar image='' name='Dylan Mirror' size={18} />
                  <span className='font-extralight text-sm tracking-wide'>Eugene Madueke</span>
                </div>
                <ChevronRightIcon className='w-3 h-3 font-extralight justify-self-end cursor-pointer' />
              </div>
            </div>
        </nav>
        </div>
      </div>
    )
  },
)

Sidebar.displayName = 'TableOfContentSidepanel'
