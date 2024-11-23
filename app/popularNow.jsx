import React from 'react'

export default function PopularNow({popularNowTitle}) {
  return (

    <a href='#' className='popularNowDiv bg-white w-96 flex flex-col p-3'>
    <div className='popularNow'>{popularNowTitle}</div>
    <span className='line'></span>
    </a>
  )
}
