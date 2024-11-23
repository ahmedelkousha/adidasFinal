import React from 'react'
import './categoriesMiniContainer.css'

export default function Btn({btnText, btnPosition}) {
  return (
<button className={`btnMain bg-white text-black flex flex-row justify-center items-center gap-24 w-48 font-semibold h-11 border-black ${btnPosition}`}>
    <p>{btnText}</p>
    <i className="bi bi-arrow-right"></i>
</button>
  )
}
