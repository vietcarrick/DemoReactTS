import React, { PropsWithChildren } from 'react';

type Props = {
    title: string, 
    description: string,
}

const CreatorsBusiness:React.FC< PropsWithChildren <Props>> = ({title, description, children}) => {
    return (
        <div className='py-[80px]'>
            <h4 className='max-w-[480px] text-[26px] leading-[38px] text-center mb-4 mx-auto font-medium'>{title}</h4>
            <p className='text-[15px] leading-[30px] text-center text-[#6B7280] mb-[50px] max-w-[627px] mx-auto'>{description}</p>
            <div className='flex justify-center'>
            {children}
            </div>
        </div>
    );
};

export default CreatorsBusiness;