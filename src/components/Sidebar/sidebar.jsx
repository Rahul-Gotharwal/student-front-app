import { Bolt, Book, CircleGauge, CircleHelp, School,TowerControl } from 'lucide-react';
import React from 'react';
const Sidebar = () => {
  return (
    <div className="w-[248px] h-[750px] flex flex-col justify-between p-[30px_12px] gap-0  bg-white">
      <div className="flex flex-col w-[224px]  h-auto gap-[10px] ">
      
      <div className="w-[98px] h-[42px] mb-9 ">
        <img
          src="/Vector.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>
        <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] cursor-pointer">

        <CircleGauge className='w-[24px] h-[24px] text-gray-400  object-contain'></CircleGauge>
          <span style={{color:"#6F767E"}} className=" w-[108px] h-[24px] font-serif "> Dashboard</span>
        </div>
        <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] bg-gray-200 cursor-pointer">
        <School className='w-[24px] h-[24px] text-gray-400 object-contain'></School>
          <span style={{color:"#6F767E"}} className="w-[108px] h-[24px] font-serif ">Students</span>
        </div>
        <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] cursor-pointer">
        <Book className='w-[24px] h-[24px] object-contain text-gray-400 '></Book>
          <span style={{color:"#6F767E"}} className="w-[108px] h-[24px] font-serif ">Chapter</span>
        </div>

        <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] cursor-pointer">
        <CircleHelp className='w-[24px] h-[24px] object-contain text-gray-400 '></CircleHelp>
          <span style={{color:"#6F767E"}} className=" w-[108px] h-[24px] font-serif ">Help</span>
        </div>
        <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] cursor-pointer">
        <TowerControl className='w-[24px] h-[24px] object-contain text-gray-400 '></TowerControl>
          <span style={{color:"#6F767E"}} className=" w-[108px] h-[24px] font-serif  ">Report</span>
        </div>
       
         <div className="w-[224px] h-[48px] flex items-center gap-2 p-[12px_89px_12px_12px] rounded-tl-[6px] cursor-pointer">
        <Bolt className='w-[24px] h-[24px] object-contain text-gray-400 '></Bolt>
          <span style={{color:"#6F767E"}} className=" w-[108px] h-[24px] font-serif ">Setting</span>
        </div>
     
      </div>

    </div>
  );
};

export default Sidebar;
