import './footer.css'
import { useState } from 'react';

export default function Footer() {

  const [menuDown, setMenuDown] = useState({productsMenu: false, sportsMenu: false, categoryMenu: false, companyInfoMenu:false, supportMenu:false, followUsMenu:false})
  const [arrowRotate, setArrowRotate] = useState({productsMenuArrow: false, sportsMenuArrow: false, categoryMenuArrow: false, companyInfoMenuArrow:false, supportMenuArrow:false, followUsMenuArrow:false})



  return (
<div className='footerContainer w-full bg-black flex flex-col'>
    
    <hr className='w-full bg-white mb-10' />

    <div className='menuContainer w-full flex flex-row justify-evenly items-start gap-12'>

        <div className='rowContainer flex flex-col justify-start gap-4'>

            <div onClick={()=>{
              setMenuDown({...menuDown, productsMenu: !menuDown.productsMenu})
              setArrowRotate({...arrowRotate, productsMenuArrow: !arrowRotate.productsMenuArrow})
            }} className='iconContainer iconContainerProducts'>
            <h2 className='font-bold mb-2'>PRODUCTS</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.productsMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.productsMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer flex flex-col justify-start gap-4'>
            <a href="#">Shoes</a>
            <a href="#">Clothing</a>
            <a href="#">Accessories</a>
            </div>
            
            </div>
        </div>

        <div className='rowContainer flex flex-col justify-start gap-4'>

            <div onClick={()=>{
              setMenuDown({...menuDown, sportsMenu: !menuDown.sportsMenu})
              setArrowRotate({...arrowRotate, sportsMenuArrow: !arrowRotate.sportsMenuArrow})
            }} className='iconContainer iconContainerSports'>
            <h2 className='font-bold mb-2'>SPORTS</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.sportsMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.sportsMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer flex flex-col justify-start gap-4'>
            <a href="#">Running</a>
            <a href="#">Basketball</a>
            <a href="#">Football</a>
            <a href="#">Yoga</a>
            <a href="#">Outdoor</a>
            <a href="#">Tennis</a>
            <a href="#">Training</a>
            </div>
            </div>

        </div>

        <div className='rowContainer flex flex-col justify-start gap-4'>

            <div onClick={()=>{
              setMenuDown({...menuDown, categoryMenu: !menuDown.categoryMenu})
              setArrowRotate({...arrowRotate, categoryMenuArrow: !arrowRotate.categoryMenuArrow})
            }} className='iconContainer iconContainerCategory'>
            <h2 className='font-bold mb-2'>CATEGORY</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.categoryMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.categoryMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer flex flex-col justify-start gap-4'>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Outlet</a>
            </div>
            </div>

        </div>

        <div className='rowContainer flex flex-col justify-start gap-4'>

            <div onClick={()=>{
              setMenuDown({...menuDown, companyInfoMenu: !menuDown.companyInfoMenu})
              setArrowRotate({...arrowRotate, companyInfoMenuArrow: !arrowRotate.companyInfoMenuArrow})
            }} className='iconContainer iconContainerCompanyInfo'>
            <h2 className='font-bold mb-2'>COMPANY INFO</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.companyInfoMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.companyInfoMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer flex flex-col justify-start gap-4'>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Carbon Footprint</a>
            <a href="#">Press</a>
            <a href="#">adiClub</a>
            </div>
            </div>

        </div>

        <div className='rowContainer flex flex-col justify-start gap-4'>

            <div onClick={()=>{
              setMenuDown({...menuDown, supportMenu: !menuDown.supportMenu})
              setArrowRotate({...arrowRotate, supportMenuArrow: !arrowRotate.supportMenuArrow})
            }} className='iconContainer iconContainerSupport'>
            <h2 className='font-bold mb-2'>SUPPORT</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.supportMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.supportMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer flex flex-col justify-start gap-4'>
            <a href="">Help</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">adiClub & Newsletter</a>
            <a href="#">Vouchers</a>
            <a href="#">Size Charts</a>
            <a href="#">Contact Us</a>
            <a href="#">Accessibility</a>
            <a href="#">Storefinder</a>
            <a href="#">Give Feedback</a>
            </div>
            </div>

        </div>

        <div className='rowContainer flex flex-col justify-start gap-2'>

            <div onClick={()=>{
              setMenuDown({...menuDown, followUsMenu: !menuDown.followUsMenu})
              setArrowRotate({...arrowRotate, followUsMenuArrow: !arrowRotate.followUsMenuArrow})
            }} className='iconContainer iconContainerFollowUs'>
            <h2 className='font-bold mb-2'>FOLLOW US</h2>
            <div className='arrowContainer'>
            <i className={`${arrowRotate.followUsMenuArrow ==true? 'arrowRotated' : 'arrowBack'} bi bi-caret-down-fill`}></i>
            </div>
            </div>
            <hr className='menuLine'/>

            <div className={`${menuDown.followUsMenu ==true? 'showMenu' : 'hideMenu'}`}>
            <div className='rowContainer rowContainerFollowUs flex flex-col justify-start gap-4 pt-4'>
            <a href="#"><i className="text-xl bi-facebook"></i></a>
            <a href="#"><i className="text-xl bi-instagram"></i></a>
            <a href="#"><i className="text-xl bi-youtube"></i></a>
            </div>
            </div>

        </div>

        
    </div>
        <div className='privacyMenu flex flex-row text-white justify-center pt-20 gap-6'>
            <a href="#">Data Settings</a>
            <a href="#">Cookies Settings</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Imprint</a>
        </div>
</div>
  )
}
