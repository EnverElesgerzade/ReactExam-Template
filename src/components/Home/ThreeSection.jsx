import React from 'react'
import bannerimg from '../../assets/images/grocery-banner.png';
import bannerimg2 from '../../assets/images/grocery-banner-2.jpg';
const ThreeSection = () => {
  return (
    <div className='relative top-[150px]'>
        <div className="twodivs flex gap-[30px] items-center justify-center">
            <div className="onediv h-[207px] w-[600px] rounded-[8px] bg-no-repeat bg-cover bg-size-[auto] bg-center " style={{backgroundImage: `url(${bannerimg})`}}>
                <div className="txtdiv w-[80%] mx-auto relative top-[30px]">

                  <h2 className='text-[#21313C] font-[700] text-[1.75rem]'>Fruits & Vegetables</h2>
                  <p className='text-[#5C6C75]'>Get Upto <span className='font-bold text-gray-800'>30%</span> Off</p>
                      <button className='flex items-center gap-[8px] w-[137px] text-[17px] justify-center relative top-[30px] text-[white] font-[500] p-[1.2rem] h-[40px] rounded-[8px] bg-[#21313C]'>Shop Now</button>
                </div>
            </div>


             <div className="onediv h-[207px] w-[600px] rounded-[8px] bg-no-repeat bg-cover bg-size-[auto] bg-center " style={{backgroundImage: `url(${bannerimg2})`}}>
                <div className="txtdiv w-[80%] mx-auto relative top-[30px]">

                  <h2 className='text-[#21313C] font-[700] text-[1.75rem]'>Freshly Baked Buns</h2>
                  <p className='text-[#5C6C75]'>Get Upto <span className='font-bold text-gray-800'>25%</span> Off</p>
                      <button className='flex items-center gap-[8px] w-[137px] text-[17px] justify-center relative top-[30px] text-[white] font-[500] p-[1.2rem] h-[40px] rounded-[8px] bg-[#21313C]'>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThreeSection