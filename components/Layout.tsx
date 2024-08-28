import React from 'react'

import Editor from '@/components/Editor'
import Header from '@/components/Header';
import AuthorBox from '@/components/AuthorBox';
import MobileNav from '@/components/MobileNav';

const Layout = () => {

    return (
        <div className='flex h-screen flex-col bg-gray-50'>
            <Header />
            <Editor />
        </div>
    )
}

export default Layout
