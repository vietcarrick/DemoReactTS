import React from 'react';
 
type Props = {
    image: string;
    style?: string;
}
const Left = ({image, style} : Props) => {
    return (
        <div className={`w-[50%] ${style}`}>
            <div className='px-5'>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Left;