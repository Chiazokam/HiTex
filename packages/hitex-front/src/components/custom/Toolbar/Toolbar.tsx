import { useState } from 'react'
import clsx from 'clsx';
import { type Editor } from "@tiptap/react";
import { BoldIcon, ItalicIcon, StrikethroughIcon, CodeBracketIcon, ListBulletIcon, NumberedListIcon, UnderlineIcon, CodeBracketSquareIcon } from '@/components/custom/Icons/heroIcons';
import { TextLevels } from '@/components/custom/TextLevels';
import { LinkButton } from '@/components/custom/Toolbar/LinkButton';

type ToolbarProps = {
    editor: Editor | null
}

const Toolbar = ({ editor }: ToolbarProps) => {
    const [] = useState(false)

    if (!editor) {
      return null
    }
  
    return (
        <div className="flex gap-4 items-center w-full">
            <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('bold') && 'rounded bg-gray-400 text-white')}
            >
            <BoldIcon className='w-3 h-3' />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
            }
            className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('italic') && 'rounded bg-gray-400 text-white')}
            >
            <ItalicIcon className='w-3 h-3' />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('underline') && 'rounded bg-gray-400 text-white')}
            >
                <UnderlineIcon className='w-3 h-3' />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
            }
            className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('strike') && 'rounded bg-gray-400 text-white')}
            >
            <StrikethroughIcon className='w-3 h-3' />
            </button>
            <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
            }
            className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('code') && 'rounded bg-gray-400 text-white')}
            >
            <CodeBracketIcon className='w-3 h-3' />
            </button>
            <TextLevels editor={editor} />
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('bulletList') && 'rounded bg-gray-400 text-white')}
            >
                <ListBulletIcon className='w-3 h-3' />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('orderedList') && 'rounded bg-gray-400 text-white')}
            >
                <NumberedListIcon className='w-3 h-3' />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('codeBlock') && 'rounded bg-gray-400 text-white')}
                >
                <CodeBracketSquareIcon className='w-3 h-3' />
            </button>

            {/* <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={clsx('px-1 py-1 hover:bg-zinc-50 hover:rounded-md', editor.isActive('blockquote') && 'rounded bg-gray-400 text-white')}
                >
                <TextQuote className='w-3 h-3' />
            </button> */}

            <LinkButton editor={editor} />
        </div>
    )
  }

  export default Toolbar
