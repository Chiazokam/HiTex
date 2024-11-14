import React from "react";
import UserAvatar from "@/components/custom/UserAvatar";
import { Button, TagsInput, Divider } from '@mantine/core'

const AuthorBox = () => {
    return (
        <div className="flex flex-col gap-5 mx-12">
            <div className="flex items-center gap-4">
                <UserAvatar image="" name="Dylan Mirror" />
                <span className="text-xs tracking-wide text-blue-600">Dylan Mirror</span>
                <span className="text-xs text-gray-500">Updated 5 minutes ago</span>
            </div>
            <Divider orientation='horizontal' className='hidden sm:flex border-[0.5px] border-zinc-100' />
            </div>
    )
}

export default AuthorBox;
