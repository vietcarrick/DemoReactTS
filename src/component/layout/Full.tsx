import React from 'react';

type Props = {
    children: React.ReactNode,
    style?: string,
}

const Full = ({children, style} : Props) => {
    return (
        <div className={`w-full px-4 ${style}`}>
            {children}
        </div>
    );
};

export default Full;