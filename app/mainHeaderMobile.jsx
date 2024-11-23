import "bootstrap-icons/font/bootstrap-icons.css";
import "./nav-icon-menu.css";
import { useEffect, useState } from "react";
import $ from 'jquery';
import './footer.css'; //for className State


export default function MainHeaderMobile() {

  // useEffect(()=>{$(document).ready(function(){
  //   $('#nav-icon3').click(function(){
  //     $(this).toggleClass('open');
  //   });
  // });})

  // useEffect(()=>{$(document).ready(function(){
  //   $('#nav-icon3').click(function(){
  //     $('.menuAfterClick').fadeIn(150);
  //   $('.slideImage').toggleClass('.slideImageOpacity');
  //   // $('.menuAfterClick').fadeIn(3000);
  //   })
  //   $('.exitIcon').click(function(){
  //     $('.menuAfterClick').fadeOut(150);
      
  //   })
  // });})

  const [style, setStyle]=useState(false)

  useEffect(()=>{
    $(document).ready(function(){
        // $('#nav-icon3').click(function(){
        //   $('.menuAfterClick').fadeIn(150);
        // });
        // $('.exitIcon').click(function(){
        //   $('.menuAfterClick').fadeOut(150);
        // });
        $('.divafterSinglesDay').click(function(){
          $('.singles-day-div-mobile').toggle(300);
        });
        $('.divafterMen').click(function(){
          $('.men-div-mobile').toggle(300);
        });
        $('.divafterWomen').click(function(){
          $('.women-div-mobile').toggle(300);
        });
        $('.divafterKids').click(function(){
          $('.kids-div-mobile').toggle(300);
        });
        $('.divafterSports').click(function(){
          $('.sports-div-mobile').toggle(300);
        });
        $('.divafterLifestyle').click(function(){
          $('.lifestyle-div-mobile').toggle(300);
        });
    })
  },[])
  
  const [arrowRotate, setArrowRotate] = useState({singesDayMenuArrow: false, menMenuArrow: false, womenMenuArrow: false, kidsMenuArrow:false, sportsMenuArrow:false, lifestyleMenuArrow:false})


  return (
    <>
    {/* MAIN MENU */}
    <div className={`menuAfterClick p-4 ${style==true? 'menuRight': ''}`}>

      {/* CONTAINER LOGO & MENU START */}
      <div className="flex flex-row justify-between">
      <i className="bi bi-x-lg text-white"></i>
      <img className="" src="adidas_logo.svg" alt="adidas logo" />
      <i onClick={()=>{
        setStyle(false);
      }} className="exitIcon bi bi-x-lg text-black cursor-pointer"></i>
      </div>
      {/* CONTAINER LOGO & MENU START */}

      <hr className="mt-4 mb-4"/>

      {/* NAV MENU START */}
      <nav className="nav-menu-mobile text-black flex flex-col items-start">


        <div className="flex flex-col items-start categories-mobile">

      <div onClick={()=>{
              setArrowRotate({...arrowRotate, singesDayMenuArrow: !arrowRotate.singesDayMenuArrow})
            }}
            className="divafterSinglesDay divafter">
      <a href="#" className="a-1 single-day-mobile font-bold">SINGLES DAY</a>
      <i className={`${arrowRotate.singesDayMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
      </div>

      <div className="singles-day-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">FEATURED</a>
        </nav>
      </div>

      <div onClick={()=>{
              setArrowRotate({...arrowRotate, menMenuArrow: !arrowRotate.menMenuArrow})
            }} className="divafterMen divafter">
      <a href="#" className="a-2 men-mobile font-bold">MEN</a>
      <i className={`${arrowRotate.menMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
      </div>

      <div className="men-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Men{`\'`}s Shoes</a>
          <a href="">Men{`\'`}s Clothing</a>
          <a href="">Accesssories</a>
        </nav>
      </div>

        <div onClick={()=>{
              setArrowRotate({...arrowRotate, womenMenuArrow: !arrowRotate.womenMenuArrow})
            }} className="divafterWomen divafter">
        <a href="#" className="a-3 women-mobile font-bold">WOMEN</a>
        <i className={`${arrowRotate.womenMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
        </div>


      <div className="women-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Women{`\'`}s Shoes</a>
          <a href="">Women{`\'`}s Clothing</a>
          <a href="">Accesssories</a>
        </nav>
      </div>

      <div onClick={()=>{
              setArrowRotate({...arrowRotate, kidsMenuArrow: !arrowRotate.kidsMenuArrow})
            }} className="divafterKids divafter">
        <a href="#" className="a-4 kids-mobile">KIDS</a>
        <i className={`${arrowRotate.kidsMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
        </div>


      <div className="kids-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">NEW & TRENDING</a>
          <a href="">Kids Sportswear</a>
          <a href="">Kids 4 to 8 Years</a>
          <a href="">Kids 8 to 16 Years</a>
        </nav>
      </div>

      <div onClick={()=>{
              setArrowRotate({...arrowRotate, sportsMenuArrow: !arrowRotate.sportsMenuArrow})
            }} className="divafterSports divafter">
        <a href="#" className="a-5 sports-mobile">SPORTS</a>
        <i className={`${arrowRotate.sportsMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
        </div>

        
      <div className="sports-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Football</a>
          <a href="">Outdoor</a>
          <a href="">Running</a>
          <a href="">Gym & Training</a>
          <a href="">Other Sports</a>
        </nav>
      </div>

      <div onClick={()=>{
              setArrowRotate({...arrowRotate, lifestyleMenuArrow: !arrowRotate.lifestyleMenuArrow})
            }} className="divafterLifestyle divafter">
        <a href="#" className="a-6 lifestyle-mobile">LIFESTYLE</a>
        <i className={`${arrowRotate.lifestyleMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
        </div>


      <div className="lifestyle-div-mobile">
        <nav className="flex flex-col justify-start items-start">
          <a href="">Brands</a>
          <a href="">Collaborations</a>
          <a href="">Originals</a>
          <a href="">Collections</a>
          <a href="">Trending Sportswear</a>
        </nav>
      </div>

        </div>

        <hr style={{width:"100%", margin:"10px 0 10px 0"}}/>

        <div className="flex flex-col items-start info-mobile">

        <a href="#">Login</a>
        <a href="#">Wishlist</a>
        <a href="#">Order Tracker</a>
        <a href="#">Returns</a>

        </div>

        <hr style={{width:"100%", margin:"10px 0 10px 0" }} />

        <div className="flex flex-col items-start help-mobile">

        <a href="#">AdiClub</a>
        <a href="#">Store Finder</a>
        <a href="#">Help</a>

        </div>

        <hr style={{width:"100%"}} />

      </nav>
      {/* NAV MENU START */}
      
    </div>


    <nav className="menuContainerMobile flex flex-row justify-between items-center bg-white p-4">

    <div className="flex flex-row justify-start items-center gap-x-1">
    <div onClick={()=>{
      setStyle(true);
    }} id="nav-icon3" className="">

    <span></span>
    <span></span>
    <span></span>
    <span></span>

    </div >
    <a href="#" className="bi bi-heart text-black"></a>
    </div>

    <div className="">
      <img className="pl-3 pb-1" src="adidas_logo.svg" alt="adidas logo" />
    </div>

    <div className="flex flex-row justify-end items-center gap-x-2">
    <a href="#" className="bi bi-person text-black"></a>
    <a href="#" className="bi bi-search text-black"></a>
    <a href="#" className="bi bi-bag text-black"></a>
    </div>

    </nav>
    </>
  );
}
