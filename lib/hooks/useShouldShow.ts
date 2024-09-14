import { useCallback, useState } from 'react'
import { isTextSelected } from '@/lib/isTextSelected'
import { type Editor } from "@tiptap/react";
import { ShouldShowProps } from '@/lib/types';

export const useShouldShow = ( editor: Editor | null) => {
    const [showBubbleMenu, setShowBubbleMenu] = useState(false)

    const shouldShow = useCallback(
        ({ view }: ShouldShowProps) => {
            if (!view || !editor) {
                return false
            }

            // if (!showBubbleMenu && isTextSelected({ editor })) {
            //     return false
            // }

            return isTextSelected({ editor }) || showBubbleMenu
        },
        [editor, showBubbleMenu]
    )

    return {
        shouldShow,
        setShowBubbleMenu
    }
}
