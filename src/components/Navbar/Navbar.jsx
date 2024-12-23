import { BellDot, CircleHelp, GitPullRequestDraft,  MessageSquareMore, Search,  } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-5 left-[268px] w-[1152px] h-[48px] flex justify-between items-center gap-0">

      <div className="w-[614px] h-[48px] flex items-center justify-between px-5 py-2 bg-white rounded-tl-[12px] rounded-bl-[12px]">
      <Search className='w-[24px] h-[24px] text-gray-400'/>
        <input 

          type="text" 
          className="w-full h-full px-3 py-2 text-gray-700 bg-transparent border-none rounded-l-[12px] outline-none"
          placeholder="Search your course.."
   
        />
       
      </div>

      <div className="w-[473px] h-[48px] flex justify-center items-center">
   
        <div className="flex justify-between gap-10">
        <CircleHelp className="w-[24px] h-[24px] text-gray-400 cursor-pointer"></CircleHelp>
        <MessageSquareMore className="w-[24px] h-[24px] text-gray-400 cursor-pointer"></MessageSquareMore>
        <GitPullRequestDraft className='w-[24px] h-[24px] text-gray-400 cursor-pointer'></GitPullRequestDraft>
         <BellDot className='w-[24px] h-[24px] text-gray-400 cursor-pointer'></BellDot> 
          <div className="w-[40px] h-[40px]  cursor-pointer">
          <img style={{backgroundColor:"#FFCD66",borderRadius:"8px"}} src="https://png.pngtree.com/png-clipart/20230506/original/pngtree-teachers-day-characters-png-image_9143439.png" alt="Doctor" className="w-full h-full object-cover  " />
        </div>
        <h2 className='text-end text-base font-sans text-gray-700'>Adeline H.Dancy</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



