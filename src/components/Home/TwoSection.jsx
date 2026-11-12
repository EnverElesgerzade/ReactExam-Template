import React from 'react'

const TwoSection = () => {
  return (
    <div className='relative top-[100px] w-[80%] mx-auto'>
        <div className="tektxt">
            <h2 className='text-[#21313C] text-[1.6rem] font-[600]'>Featured Categories</h2>
        </div>
        <div className="products flex gap-[20px] relative top-[16px]">
            <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-tea-coffee-drinks.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Tea, Coffee & Drinks</p>
                </div>
            </div>


             <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-atta-rice-dal.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Atta, Rice & Dal</p>
                </div>
            </div>

             <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-baby-care.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Baby Care</p>
                </div>
            </div>


             <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-chicken-meat-fish.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Chicken, Meat & Fish</p>
                </div>
            </div>

             <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-cleaning-essentials.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Cleaning Essentials</p>
                </div>
            </div>

             <div className="product border-[2px] gap-[10px] border-[#ecf0ef] w-[199px] h-[213px] flex items-center flex-col justify-center">
                <img src="https://preview.themewagon.com/freshcart/assets/images/category/category-pet-care.jpg" alt="" />
                <div className="txt">
                    <p className='text-[#5C6C75]'>Pet Care</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TwoSection