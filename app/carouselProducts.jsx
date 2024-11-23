import React from 'react';

export default function CarouselProducts({imageUrl, salePercentage, productTitle, originalPrice, saleProductPrice, cNameProducts}) {
  return (
    <div className={`${cNameProducts}`}>
    <div className='flex flex-col'>
        {/*PICTURE, BAG, & SALE-PERCENTAGE START*/}

        <div className='relative'>

        <a className='absolute top-5 left-5 max-sm:w-5 max-sm:h-5' href="">
            <img src="QuickView Icon.png" alt="" /> 
        </a>

        <img src={imageUrl} alt="" />

        <span className='bg-white text-black absolute bottom-5 left-5 select-none text-xs'>
            {salePercentage}
        </span>
        
        </div>

        {/*PICTURE, BAG, & SALE-PERCENTAGE END*/}

        {/*PRODUCT TITLE, PRICE, & SALE-PRICE START*/}
 
        <div className='text-black flex flex-col pl-3 pt-3'>
            <div className='pb-3 text-sm'>
                {productTitle}
            </div>
            <div className='text-black flex flex-row gap-4'>
                <p className='text-red-600 text-sm'>{saleProductPrice}</p>
                <p className='text-decoration-line: line-through opacity-75 text-sm'>{originalPrice}</p>
            </div>
        </div>

        {/*PRODUCT TITLE, PRICE, & SALE-PRICE START*/}

    </div>
    </div>
    )
}
