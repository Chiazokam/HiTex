import { Editor } from '@tiptap/react'
import { Popover } from '@mantine/core'
import clsx from 'clsx';
import { Link } from 'lucide-react';
import { LinkInput } from '@/components/Toolbar/LinkInput';

type LinkButtonProps = {
    editor: Editor | null
}

export const LinkButton = ({ editor }: LinkButtonProps) => {
    if (!editor) {
        return null
    }

    return (
        <Popover
            classNames={{
                dropdown: '!p-0 border-none bg-transparent shadow-none'
            }}
            offset={15}
        >
            <Popover.Target>
                <button
                    className={clsx('px-1 py-1', editor.isActive('orderedList') && 'rounded bg-gray-400 text-white')}
                >
                    <Link className='w-3 h-3' />
                </button>
            </Popover.Target>
            <Popover.Dropdown>
                <LinkInput
                    onLink={(url) =>
                        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
                    }
                 />
            </Popover.Dropdown>
        </Popover>
    )
}
