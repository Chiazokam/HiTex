import { isTextSelection } from '@tiptap/core'
import { Editor } from '@tiptap/react'

export const isTextSelected = ({ editor }: { editor: Editor }) => {
    const {
        state: {
            doc,
            selection,
            selection: { empty, from, to }
        }
    } = editor

    // const isEmptyTextBlock =
    //     !doc.textBetween(from, to).length && isTextSelection(selection)

    if (isTextSelection(selection) || !editor.isEditable) {
        return false
    }

    return true
}
