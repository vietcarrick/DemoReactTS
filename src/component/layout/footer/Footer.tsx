import React from 'react';
import Container from '../Container';
import Full from '../Full';
import Center from './Center';
import Left from './Left';
import Right from './Right';

const Footer = () => {
    return (
        <Full style={"bg-[#F7F7FB] py-[50px]"}>
            <Container>
            <div className='mb-5'>
                <img src="https://vrocket.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvrocket.cd8816fb.png&w=128&q=75" alt="" />
            </div>
            <div className='flex gap-[107px] mb-7'>
            <Left/>
            <Center/>
            <Right/>
            </div>
            <hr />
            <p className='text-[15px] opacity-80 text-center mt-8'>VRocket is not affiliated with YouTube or Google. Trademarks videos and descriptive texts are owned by their respective owner</p>
        </Container>
        </Full>
    );
};

export default Footer;