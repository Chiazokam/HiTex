import React from 'react'

import Editor from '@/components/Editor'
import Header from '@/components/Header';
import AuthorBox from '@/components/AuthorBox';
import MobileNav from '@/components/MobileNav';

const Layout = () => {

    return (
        <div className='flex h-screen flex-col bg-gray-50'>
            <Header />

            <div className='mt-[64px] px-8 md:px-36 lg:px-60 xl:px-96 py-12 overflow-y-auto'>
                <AuthorBox />
                <Editor />
            </div>
            {/* <Editor /> */}
        </div>
    )
}

export default Layout
