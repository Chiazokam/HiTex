import React from "react";
import UserAvatar from "@/components/UserAvatar";

const AuthorBox = () => {
    return (
        <div className="flex flex-col">
            <div className="text-5xl font-medium tracking-wide leading-tight">
                Seven Fundamental Design Principles
            </div>
            <UserAvatar image="" />
        </div>
    )
}

export default AuthorBox;
