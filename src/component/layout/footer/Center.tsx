import React from 'react';

const Center = () => {
    return (
        <div className='flex gap-[110px]'>
            <ul>
                <li className='mb-4'>Home</li>
                <li className='mb-4'>About</li>
                <li className='mb-4'>Contact Us</li>
            </ul>
            <ul>
                <li className='mb-4'>Terms & Conditions</li>
                <li className='mb-4'>Privacy Policy</li>
                <li className='mb-4'>Refund Policy</li>
            </ul>
        </div>
    );
};

export default Center;