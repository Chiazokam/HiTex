import React from 'react'

import Editor from '@/components/custom/Editor'
import Header from '@/components/custom/Header';
import AuthorBox from '@/components/custom/AuthorBox';
import MobileNav from '@/components/custom/MobileNav';

const Layout = () => {

    return (
        <div className='flex h-screen flex-col bg-gray-50'>
            <Header />

            <div className='mt-[64px] px-8 md:px-36 lg:px-60 xl:px-96 py-12 overflow-y-auto'>
                <AuthorBox />
                <Editor />
            </div>
        </div>
    )
}

export default Layout
