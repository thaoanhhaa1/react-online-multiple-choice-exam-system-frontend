import React from 'react';
import Header from '~/components/Header';

const DefaultLayout = ({ children }) => {
    return (
        <div className='min-h-screen p-5 bg-[#f7f8f9]'>
            <Header />
            <div className='max-w-5xl mx-auto'>{children}</div>
        </div>
    );
};

export default DefaultLayout;
