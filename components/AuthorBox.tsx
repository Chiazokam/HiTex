import React from "react";
import UserAvatar from "@/components/UserAvatar";

const AuthorBox = () => {
    return (
        <div className="flex flex-col gap-4 mb-12">
            <div className="text-4xl md:text-5xl font-medium tracking-wide leading-tight">
                Seven Fundamental Design Principles
            </div>

            <div className="flex items-center gap-4">
                <UserAvatar image="" name="Dylan Mirror" />
                <span className="text-xs tracking-wide text-blue-600">Dylan Mirror</span>
                <span className="text-xs text-gray-500">Updated 5 minutes ago</span>
            </div>
        </div>
    )
}

export default AuthorBox;
