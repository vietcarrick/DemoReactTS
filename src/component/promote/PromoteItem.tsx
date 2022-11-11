import React from 'react';

type Props = {
    image: string, 
    title: string,
    content: string
}

const PromoteItem:React.FC<Props> = ({image, title, content}) => {
    return (
        <div className='max-w-[376px]'>
            <div className='w-full mb-[60px]'>
                <img src={image} alt="" className='mx-auto'/>
            </div>
            <div>
                <h5 className='mb-4 text-center text-[20px] leading-[25px] text-[#0F2137] font-medium'>{title}</h5>
                <p className='text-center text-[15px] text-[#6B7280]'>{content}</p>
            </div>
        </div>
    );
};

export default PromoteItem;