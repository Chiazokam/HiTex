import { Editor } from '@tiptap/react'
import { Popover } from '@mantine/core'
import clsx from 'clsx';
import { LinkIcon } from '@/components/Icons';
import { LinkInput } from '@/components/Toolbar/LinkInput';
import { useState } from 'react';

type LinkButtonProps = {
    editor: Editor | null
}

export const LinkButton = ({ editor }: LinkButtonProps) => {
    const [opened, setOpened] = useState(false)

    if (!editor) {
        return null
    }

    return (
        <Popover
            classNames={{
                dropdown: 'p-0 border-none bg-transparent shadow-none'
            }}
            offset={15}
            opened={opened}
        >
            <Popover.Target>
                <button
                    className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('orderedList') && 'rounded bg-gray-400 text-white')}
                    onClick={() => setOpened(!opened)}
                >
                    <LinkIcon className='w-3 h-3' />
                </button>
            </Popover.Target>
            <Popover.Dropdown>
                <LinkInput
                    onLink={(url) =>
                        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
                    }
                    setOpened={setOpened}
                 />
            </Popover.Dropdown>
        </Popover>
    )
}
