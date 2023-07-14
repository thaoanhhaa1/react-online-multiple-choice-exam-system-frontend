import React from 'react';
import { Link } from 'react-router-dom';
import classNames from '~/utils/classNames';

const Button = ({
    to,
    children,
    backgroundColor,
    fontWeight = '400',
    disabled = false,
    ...props
}) => {
    let Element = 'button';
    const prop = {};
    if (to) {
        Element = Link;
        prop.to = to;
    }

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on')) delete props[key];
        });
    }

    return (
        <Element
            style={{ backgroundColor, fontWeight }}
            className={classNames(
                'text-center px-6 py-3 rounded text-white text-sm disabled:opacity-80 select-none',
                disabled ? 'opacity-50 pointer-events-none' : '',
            )}
            {...prop}
            {...props}
        >
            {children}
        </Element>
    );
};

export default Button;
