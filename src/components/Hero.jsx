import React from 'react';
import Typed from 'react-typed'; {/*react typed is yarn installed from npmjs.com*/}

const Hero = () => {  {/*Hero gives a lot of flexibilty for sizing text, images,  and many more things*/}
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>   {/*the brackets are used for when you want to use a custom value, like I am for a color*/}
          EXPAND YOUR CRYPTO
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'> {/*These are the breakpoints for the sizing of the words, while you decrease or increase*/}
          Grow with CRYPTO.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Use our website to buy.
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' 
            strings={['BTC', 'ETH', 'USDT', 'DOGE', 'SOL', 'SHIB']}  
            typeSpeed={120} 
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your portfolio,  increase your portfolio with BTC, ETH, USDT, DOGE, SOL.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;