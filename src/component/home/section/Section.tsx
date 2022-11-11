import React from 'react';

type Props = {
    children: React.ReactNode;
    style?: string,
}

const Section = ({children, style}: Props) => {
    return (
        <div className={`flex items-center ${style}`}>
            {children}
        </div>
    );
};

export default Section;