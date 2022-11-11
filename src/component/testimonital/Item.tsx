import React from 'react';

type Props = {
    avatar: string,
    name: string,
    comment: string,
}

const Item = ({avatar, name, comment}: Props) => {
    return (
        <div className='max-w-[340px] shadow shadow-xl p-7'>
            <div className='flex gap-4 mb-7 items-center'>
                <img src={avatar} alt="" className='w-11 h-11 rounded-full'/>
                <div>
                    <p className='text-[18px] leading-[28px]'>{name}</p>
                    <img src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frate.3ec5faef.png&w=128&q=75" alt="" />
                </div>
            </div>
            <p className={"text-base leading-[28px] text-[#0F2137]"}>{comment}</p>
        </div>
    );
};

export default Item;