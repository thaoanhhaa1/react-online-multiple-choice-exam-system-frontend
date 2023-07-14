import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between mb-5 p-4 bg-white rounded-md'>
            <div>Logo</div>
            <div className='flex items-center gap-2'>
                <Link to='/'>Home</Link>
            </div>
        </div>
    );
};

export default Header;
