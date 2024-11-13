import React from "react";
import { type Editor } from "@tiptap/react";
import Toolbar from "@/components/custom/Toolbar/Toolbar";

type MobileNavProps = {
    editor: Editor | null
}

const MobileNav = ({ editor }: MobileNavProps) => {
    return (
        <div className="px-8 left-0 fixed overflow-x-auto flex h-14 bottom-0 bg-white w-full border-gray-600 shadow-lg sm:hidden">
            < Toolbar editor={editor} />
        </div>
    )
}

export default MobileNav
