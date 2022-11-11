import React from 'react';

type Props = {
    style?: string,
}


const Container:React.FC<React.PropsWithChildren <Props>>= ({children, style}) => {
    return (
        <div className={`max-w-[1200px] mx-auto px-4 ${style}`}>
            {children}
        </div>
    );
};

export default Container;