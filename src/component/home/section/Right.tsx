import React, { PropsWithChildren } from 'react';

type Props = {
    title: string,
    description?: string,
    style?: string,
    number?: string,
}

const Right:React.FC< PropsWithChildren <Props>>  = ({style, children, title, description, number}) => {
    return (
        <div className={`w-[50%]`}>
            <div className={`px-5 ${style}`}>
                { number && <div className='w-[50px] h-[50px] rounded-full bg-[#F2A438] text-white text-[24px] mb-4'>
                    <p className='text-center leading-[50px]'>{number}</p>
                </div>}
                <h1 className={`font-bold text-4xl leading-[46px] mb-5`}>{title}</h1>
                <p className='text-[17px] leading-8 text-[#6B7280] mb-[30px]'>{description}</p>
                {children}
            </div>
        </div>
    );
};

export default Right;