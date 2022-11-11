import React from 'react';

type Props = {
    title: string, 
}

const Frequently:React.FC< React.PropsWithChildren <Props>> = ({title, children}) => {
    return (
        <div className='py-[110px]'>
            <h1 className='text-[30px] text-black leading-[42px] text-center font-medium mb-[55px]'>{title}</h1>
            <div className='w-[750px] mx-auto'>
            {children}
            </div>
        </div>
    );
};

export default Frequently;