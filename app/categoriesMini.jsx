import Btn from "./btn";

import React from 'react'

const CAT_IMAGES = [
    { url: "2.1.jpeg", title: "SHOES" },
    { url: "2.2.jpeg", title: "SHORTS" },
    { url: "2.3.jpeg", title: "T-SHIRTS" },
    { url: "2.4.jpeg", title: "HOODIES" },
    { url: "3.2.jpeg", title: "TIGHTS" },
    { url: "3.3.jpeg", title: "TRAINING" }
  ];

export default function CategoriesMini() {
  return (
   <>
        {CAT_IMAGES.map((image, index)=>(
            <div key={index} className="categoriesMiniBox">
            <img className="object-cover" src={image.url} alt="" />
            <Btn btnPosition='absolute' key={image.title} btnText={image.title}/>
            </div>
        ))}
        </>
   
  )
}
