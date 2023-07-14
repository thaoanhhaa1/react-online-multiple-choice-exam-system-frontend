import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='max-w-5xl mx-auto flex justify-between mb-5 p-4 bg-white rounded-md shadow-md'>
            <Link to='/'>
                <img className='max-h-[76px]' src='/logo-iuh.png' alt='' />
            </Link>
            <div className='flex items-center gap-2'>
                <Link className='font-semibold' to='/'>
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Header;
