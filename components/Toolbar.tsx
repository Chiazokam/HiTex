import clsx from 'clsx';
import { type Editor } from "@tiptap/react";
import { Bold, Italic, Strikethrough, Code, List, ListOrdered, Underline, Link } from 'lucide-react';
import { TextLevels } from '@/components/TextLevels';

type ToolbarProps = {
    editor: Editor | null
}

const Toolbar = ({ editor }: ToolbarProps) => {

    if (!editor) {
      return null
    }
  
    return (
        <div className="flex w-fit gap-4 items-center mb-4 border-solid border border-gray-100 bg-white shadow-lg px-3 py-2 rounded-md">
            <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={clsx('px-1 py-1', editor.isActive('bold') && 'rounded bg-gray-400 text-white')}
            >
            <Bold className='w-3 h-3' />
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
            className={clsx('px-1 py-1', editor.isActive('italic') && 'rounded bg-gray-400 text-white')}
            >
            <Italic className='w-3 h-3' />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={clsx('px-1 py-1', editor.isActive('underline') && 'rounded bg-gray-400 text-white')}
            >
                <Underline className='w-3 h-3' />
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
            className={clsx('px-1 py-1', editor.isActive('strike') && 'rounded bg-gray-400 text-white')}
            >
            <Strikethrough className='w-3 h-3' />
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
            className={clsx('px-1 py-1', editor.isActive('code') && 'rounded bg-gray-400 text-white')}
            >
            <Code className='w-3 h-3' />
            </button>
            <TextLevels editor={editor} />
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={clsx('px-1 py-1', editor.isActive('bulletList') && 'rounded bg-gray-400 text-white')}
            >
                <List className='w-3 h-3' />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={clsx('px-1 py-1', editor.isActive('orderedList') && 'rounded bg-gray-400 text-white')}
            >
                <ListOrdered className='w-3 h-3' />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={clsx('px-1 py-1', editor.isActive('orderedList') && 'rounded bg-gray-400 text-white')}
            >
                <Link className='w-3 h-3' />
            </button>
        </div>
    )
  }

  export default Toolbar
