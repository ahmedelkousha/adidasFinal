import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
// import $ from 'jquery';
import './mainCarousel.css'

export default function MainCarouselModified({images, imgWidth="100vw", imgHeight="100vh", autoPlayMode=false}) {

//   useEffect(()=>{$(document).ready(function(){
//     $('i').click(function(){
//       $('i').toggleClass('slideImage');
//     });
//   });
// console.log("Hello");
// })

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(autoPlayMode);
  const [opacity, setOpacity]=useState(1)
//   const [position, setposition]=useState()


  let timeOut;

  useEffect(()=>{
    timeOut = autoPlay && setTimeout(()=>{
      goToNextAuto();
    }, 3500)
  })
  
  const imgStyle = {
    width: {imgWidth},
    height: {imgHeight},
    position: "relative",
    objectFit:"cover",
    margin:"0 auto",
    opacity:`${opacity}`,
    transition:"opacity .4s",
    // left:`${position}%`

  }
  imgStyle.width=imgWidth;
  imgStyle.height=imgHeight;

  const sliderStyle = {
    height:"100%",
    margin: "0 auto",
    width:"100%",
    position:"relative"
  }
const leftArrow={
marginLeft:"50px"
}
const rightArrow={
marginRight:"50px"
}

// useEffect(()=>{
//   $(document).ready(function(){
//     $('.leftArrow').click(function(){
//       $('.slideImage').css('display','none')
//     })
//   })
// })
function goToPrevious(){
  const isFirstSlide = currentIndex ==0;
  const newIndex = isFirstSlide? images.length-1: currentIndex-1;
  setOpacity(0.1)

  setTimeout(() => {
    
setCurrentIndex(newIndex);
setOpacity(1)

  }, 200);
}


function goToNext(){
  const isLastSlide = currentIndex == images.length-1;
  const newIndex = isLastSlide? 0: currentIndex+1;
  setOpacity(0.1)

  setTimeout(() => {
    
setCurrentIndex(newIndex);
setOpacity(1)

  }, 200);

}
function goToNextAuto(){
  const isLastSlide = currentIndex == images.length-1;
  const newIndex = isLastSlide? 0: currentIndex+1;
setCurrentIndex(newIndex);
}


  return (
    <div className="slider" onMouseEnter={()=> {setAutoPlay(false); clearTimeout(timeOut);}} onMouseLeave={()=> {setAutoPlay(autoPlayMode)}} style={sliderStyle}>

<div className="absolute-container-arrows">   
<div className="carouselArrows">
      <i style={leftArrow} onClick={goToPrevious}  className="hover:cursor-pointer bi bi-caret-left-fill leftArrow"></i>
      <i style={rightArrow} onClick={goToNext} className="hover:cursor-pointer bi bi-caret-right-fill rightArrow"></i>
      </div>
</div>

      {images.map((slide, slideIndex) => (
          <>
            {currentIndex==slideIndex?
            
            <div key={slideIndex} className="buy-now-carousel">
              <h2 key={slideIndex + "h3"} className=" text-4xl text-black">FLAT 50% ON PERFORMANCE {currentIndex + 1}</h2>
              <p key={slideIndex + "p"} className="text-xl text-black">Boost your performance with flat 50% off training, running, and football gear! Limited time only.</p>
              <div className="flex flex-row w-full justify-start gap-2">
              <button key={slideIndex + "b1"} className="bg-black p-2 text-White hover:bg-zinc-400 hover:text-black">SHOP LIMITED DEALS</button>
              <button key={slideIndex + "b2"} className="bg-black p-2 text-White hover:bg-zinc-400 hover:text-black">SHOP ALL SALE</button>
              </div>
            </div>
            
            : ''}
            </>
        ))}
        <div>
             <img style={imgStyle} className="slideImage" src={`${images[currentIndex].url}`} alt="" />
        </div>
        

      <div className="flex flex-row items-center gap-4 bg-white opacity-40 rounded-xl h-6" style={{position:"absolute", margin:"0 auto",top:"95%", left:"50%", transform:"translate(-50%,-50%)", }}>
        {images.map((slide, slideIndex) => (
            <i onClick={() => {
                setOpacity(0.1);
                setTimeout(() => {
              setCurrentIndex(slideIndex);
              setOpacity(1)
                }, 200);
            }} key={slideIndex} style={{fontSize:"50px"}} className={`hover:cursor-pointer bi bi-dash hover:text-slate-300 text-black transition-all duration-300 + ${currentIndex==slideIndex? "text-slate-300":""} `}></i>
        ))}

     

      </div>
      
    </div>
  );
}