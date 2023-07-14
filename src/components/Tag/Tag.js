import React from 'react';

const Tag = ({ children, color }) => {
    return (
        <div className="flex gap-2 items-center">
            <span
                style={{ backgroundColor: color }}
                className="block w-4 h-4 rounded-full"
            ></span>
            <span className="text-sm">{children}</span>
        </div>
    );
};

export default Tag;
