import React from 'react';

const Hero = () => {
  return (
    <div className='absolute left-1/2 transform -translate-x-1/2 w-[90%] h-[100%] rounded-t-full shadow-[0_0_20px_20px_rgba(256,256,256,0.7)] overflow-hidden'>
      <div className="relative mt-[7%] flex flex-col items-center space-y-[5%] z-50">
        <p className="w-[50%] h-[35%] text-7xl p-4 font-serif font-medium text-white text-center">
          Ride Smarter
          <br />
         Rent It Out!
        </p>

        <img
          src="/assets/car2.png"
          className="w-[60%] h-[40%] rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
