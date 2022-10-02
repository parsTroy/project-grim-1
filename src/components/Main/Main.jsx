import React from 'react';

const Main = () => {
  return (
    <div className='m-16 flex justify-center items-center text-center'>
      <div>
        <h1 className='text-6xl	font-bold'>Projects in Development</h1>
        <div className='grid grid-cols-2 mt-8'>
          <div className='p-8 m-8 mr-18 w-[600px] h-[600px] flex justify-center items-center bg-slate-500'>
            Project 1
          </div>
          <div className='p-8 m-8 ml-18 w-[600px] h-[600px] flex justify-center items-center bg-slate-500'>
            Project 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
