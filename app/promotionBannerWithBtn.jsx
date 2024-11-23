import React from 'react'
import BtnNoStyle from './btnNoStyle'

export default function PromotionBanner({promotionHeading}) {
  return (
    <div className='w-full h-52 bg-yellow-400 flex justify-center items-center'>
        <div className='subscribeContainer flex flex-row justify-center gap-16 items-center w-full'>
            <h2 className='promotionBannerHeading text-black'>{promotionHeading}</h2>
            <BtnNoStyle btnText='SIGN UP FOR FREE'/>
        </div>
    </div>
  )
}
