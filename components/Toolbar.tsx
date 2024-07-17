import clsx from 'clsx';
import { type Editor } from "@tiptap/react";

type ToolbarProps = {
    editor: Editor | null
}

const Toolbar = ({ editor }: ToolbarProps) => {

    if (!editor) {
      return null
    }
  
    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
            }
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('bold') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Bold
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
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('italic') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Italic
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
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('strike') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Strike
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
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('code') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Code
            </button>
            <button
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('paragraph') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Paragraph
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { level: 1 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H1
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { level: 2 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H2
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { level: 3 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H3
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { level: 4 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H4
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { levele: 5 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H5
            </button>
            <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('heading', { level: 6 }) && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            H6
            </button>
            <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('bulletList') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Bullet list
            </button>
            <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('orderedList') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Ordered list
            </button>
            <button
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('codeBlock') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Code block
            </button>
            <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={clsx('border rounded-3xl px-2 text-xs', editor.isActive('blockquote') && 'border-blue-200 bg-blue-200 text-slate-600')}
            >
            Blockquote
            </button>
        </div>
    )
  }

  export default Toolbar
