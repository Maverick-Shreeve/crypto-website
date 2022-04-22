import React from 'react';
import dashboard from '../assets/dashboard.jpg';

const Dashboard = () => {
  return (
    <div className='w-full bg-white py-16 px-6'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[600px] mx-auto my-4' src={dashboard}  />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00B74A] font-bold '> DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-3'>Manage  from your phone</h1>
          <p>
            Manage your whole account from the comfort of your living room!
            Our simple website makes everything a breeze.
            Thinking about joining?        
            Join now and get a free BitCoin!
          </p>
          <button className='bg-black text-[#00B74A] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-1 py-4'>Join Now </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;