import React, { PropsWithChildren } from 'react';

type Props = {
    style?: string,
}

const Full:React.FC< PropsWithChildren <Props>>  = ({children, style}) => {
    return (
        <div className={`w-full px-4 ${style}`}>
            {children}
        </div>
    );
};

export default Full;