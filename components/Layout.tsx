import React from 'react'

import Editor from '@/components/Editor'
import Header from '@/components/Header';

const Layout = () => {

    return (
        <div className='flex h-screen flex-col'>
            <Header />
            <div className='mt-40 px-44'>
                <Editor />
            </div>
        </div>
    )
}

export default Layout
