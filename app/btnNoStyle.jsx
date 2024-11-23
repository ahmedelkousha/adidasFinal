import React from 'react'
import './categoriesMiniContainer.css'

export default function BtnNoStyle({btnText}) {
  return (
<button className={`btnMainNoStyle bg-black text-white flex flex-row justify-center items-center gap-3 w-48 font-semibold h-11 border-black`}>
    <p className='tracking-widest'>{btnText}</p>
    <i className="bi bi-arrow-right"></i>
</button>
  )
}
