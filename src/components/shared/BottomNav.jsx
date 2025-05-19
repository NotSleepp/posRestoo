import React from "react";
import { BiSolidDish } from "react-icons/bi";
import { CiCircleMore } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 flex justify-around h-16">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px]" ><FaHome className="inline mr-2 size={20}" /> <p>Home</p> </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]" ><MdOutlineReorder className="inline mr-2 size={20}" /> <p>Ordenes</p> </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]" ><MdTableBar className="inline mr-2 size={20}" /> <p>Mesas</p> </button>
      <button className="flex items-center justify-center text-[#ababab] w-[200px]" ><CiCircleMore className="inline mr-2 size={20}" /> <p>Más</p> </button>

      <button className="bg-[#f6b100] rounded-full p-3 text-[#f5f5f5] w-[60px] h-[60px] flex items-center justify-center absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <BiSolidDish size={40}/>
        
        </button>
    </div>
  );
};

export default BottomNav;
