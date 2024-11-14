import { EditorContent } from '@tiptap/react'
import React, { useRef } from 'react'

import { LinkMenu } from '@/components/menus'

import { useBlockEditor } from '@/hooks/useBlockEditor'

import '@/styles/index.css'

import { Sidebar } from '@/components/Sidebar'
import ImageBlockMenu from '@/extensions/ImageBlock/components/ImageBlockMenu'
import { ColumnsMenu } from '@/extensions/MultiColumn/menus'
import { TableColumnMenu, TableRowMenu } from '@/extensions/Table/menus'
// import { EditorHeader } from './components/EditorHeader'
import EditorHeader from '@/components/custom/Header'
import { TextMenu } from '../menus/TextMenu'
import { ContentItemMenu } from '../menus/ContentItemMenu'
import { useSidebar } from '@/hooks/useSidebar'
import * as Y from 'yjs'
import { TiptapCollabProvider } from '@hocuspocus/provider'
import AuthorBox from '@/components/custom/AuthorBox';

export const TiptapEditor = ({
  aiToken,
  ydoc,
  provider,
}: {
  aiToken?: string
  hasCollab: boolean
  ydoc: Y.Doc
  provider?: TiptapCollabProvider | null | undefined
}) => {
  const menuContainerRef = useRef(null)

  const leftSidebar = useSidebar()
  const { editor, users, collabState } = useBlockEditor({ aiToken, ydoc, provider })

  if (!editor || !users) {
    return null
  }

  return (
    <div className="flex h-full" ref={menuContainerRef}>
      <Sidebar isOpen={leftSidebar.isOpen} onClose={leftSidebar.close} editor={editor} />
      <div className='relative flex flex-col flex-1 h-full overflow-hidden'>
        <EditorHeader
          isSidebarOpen={leftSidebar.isOpen}
          toggleSidebar={leftSidebar.toggle}
          editor={editor}
          users={users}
        />
        <div className='flex w-full justify-center overflow-y-auto'>
          <div className='flex flex-col lg:max-w-4xl w-full mt-8'>
            {/* <AuthorBox /> */}
            <EditorContent editor={editor} className="mt-6" />
            <ContentItemMenu editor={editor} />
            <LinkMenu editor={editor} appendTo={menuContainerRef} />
            <TextMenu editor={editor} />
            <ColumnsMenu editor={editor} appendTo={menuContainerRef} />
            <TableRowMenu editor={editor} appendTo={menuContainerRef} />
            <TableColumnMenu editor={editor} appendTo={menuContainerRef} />
            <ImageBlockMenu editor={editor} appendTo={menuContainerRef} />

            {/* The citations go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
