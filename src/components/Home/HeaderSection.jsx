import React from 'react'
import { FaTh } from 'react-icons/fa'
import { FaChevronDown} from 'react-icons/fa6'

const HeaderSection = () => {
  return (
    <div className='flex items-center  gap-[25px] relative top-[30px] relative w-[80%] mx-auto border-b border-[#ecf0ef] '>
        <div className="greenbox bg-[#0AAD0A] w-[185px] h-[47px] flex items-center gap-[10px] p-[1rem] rounded-[8px]">
            <FaTh className='text-[white]'/>
           
                                    <p className='text-[white] font-[500]'>All Departments</p>
        </div>
        <div className="hom">
            <p>Home</p>
        </div>
        <div className="drop flex items-center gap-[8px]">
            <p>Dropdown Menu</p>
            <FaChevronDown className='text-[13px]'/>
            
        </div>
        <div className="mega">
            <p>Mega Menu</p>
        </div>
        <div className="dash">
            <p>Dashboard</p>
        </div>
    </div>
  )
}

export default HeaderSection