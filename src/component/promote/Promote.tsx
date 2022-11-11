import React from 'react';

type Props = {
    increase: string, 
    title: string, 
    description?: string,
}

const Promote:React.FC<React.PropsWithChildren <Props>> = ({increase, title, description, children}) => {
    return (
        <div className='py-[70px]'>
            <p className='text-[18px] text-[#4F49F5] text-center mb-4'>{increase}</p>
            <h4 className='max-w-[546px] text-center text-[26px] leading-[38px] mb-[18px] mx-auto'>{title}</h4>
            <p className='text-[15px] leading-[30px] text-center text-[#6B7280] mb-[70px] max-w-[635px] mx-auto'>{description}</p>
            <div className='flex gap-[86px]'>
                {children}
            </div>
        </div>
    );
};

export default Promote;