import React from 'react'

import Editor from '@/components/Editor'
import Header from '@/components/Header';
import AuthorBox from '@/components/AuthorBox';

const Layout = () => {

    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <div className='mt-[64px] px-12 md:px-36 lg:px-60 xl:px-96 py-12 overflow-scroll'>
                <AuthorBox />
                <Editor />
            </div>
        </div>
    )
}

export default Layout
