"use client";
import "./globals.css";
import MainCarouselModified from "./mainCarouselModified";
import MainHeaderDesktop from "./mainHeaderDesktop";
import MainHeaderMobile from "./mainHeaderMobile";
import PromotionHeader from "./promotionHeader";
import OfferCard from "./offerCard";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect, useRef } from "react";
import Banner from "./banner";
import PopularNow from "./popularNow";
import CategoriesMini from "./categoriesMini";
import './categoriesMiniContainer.css'
import CarouselProducts from "./carouselProducts";
import PromotionBanner from "./promotionBannerWithBtn";
import Footer from "./footer";

// const IMAGES_OFFER_CARD = [
//   { url: "product1.jpg", title: "Winter Hoodies", price:"" },
//   { url: "product2.jpg", title: "Adidas T-shirts" , price:""},
//   { url: "product3.jpg", title: "Adidas Heavy Hoodies" , price:""},
//   { url: "product4.jpg", title: "Men T-shirts" , price:""},
//   { url: "shoes1.jpg", title: "Original Shoes" , price:""},
//   { url: "shoes5.jpg", title: "white & Black Shoes" , price:""},
//   { url: "shirt1.jpg", title: "Summer Adidas T-shirts" , price:""},
//   { url: "shirt2.jpg", title: "50% OFF Adidas T-shirts" , price:""}
// ];
const IMAGES_OFFER_CARD2 = [
  { url: "originals-adicolor.gif", title: "EXPLORE ADICOLOR", price:"Celebrating the iconic three stripes." },
  { url: "member-adiclubbox.jpg", title: "UNBELIEVABLE OFFERS EVERY FRIDAY" , price:"Every Friday, you have a chance to win incredible deals with the adiClub box."},
  { url: "cycling.jpg", title: "ADIDAS CYCLING" , price:"Level up your ride with our cycling essentials.​"},
  { url: "alalhy-football.jpg", title: "AL AHLY 3RD KIT" , price:"Available now."},
  { url: "outdoor-terrex.jpg", title: "ADIDAS TERREX" , price:"adidas TERREX, for when adventure isn't just an activity but a lifestyle."},
  { url: "football.jpg", title: "ADIDAS FOOTBALL" , price:"Step onto every pitch with game-ready kits."},
  { url: "Gazelle.jpg", title: "GAZELLE" , price:"This classic started life as a trainer and grew into an iconic streetwear staple."},
  { url: "member-adiclubbox.jpg", title: "UNBELIEVABLE OFFERS EVERY FRIDAY" , price:"Every Friday, you have a chance to win incredible deals with the adiClub box."}];

const CAROUSEL_PRODUCTS = [
  { url: "s1.jpg", title: "Place Holder Field" , price:"119.99$", salePrice:"100$" },
  { url: "s2.jpg", title: "Place Holder Field" , price:"149.99$", salePrice:"120$"},
  { url: "s3.jpg", title: "Place Holder Field" , price:"139.99$", salePrice:"99.99$"},
  { url: "s4.jpg", title: "Place Holder Field" , price:"119.99$", salePrice:"79.99$"},
  { url: "s5.jpg", title: "Place Holder Field" , price:"114.99", salePrice:"89.99$"},
  { url: "s6.jpg", title: "Place Holder Field" , price:"89.99$", salePrice:"70.99$"},
  { url: "s7.jpg", title: "Place Holder Field" , price:"169.99$", salePrice:"129.99$"},
  { url: "s8.jpg", title: "Place Holder Field" , price:"109.99$", salePrice:"69.99$"}
];

const CAROUSEL_PRODUCTS2 = [
  { url: "b1.jpg", title: "Place Holder Field" , price:"119.99$", salePrice:"100$" },
  { url: "b2.jpg", title: "Place Holder Field" , price:"149.99$", salePrice:"120$"},
  { url: "b3.jpg", title: "Place Holder Field" , price:"139.99$", salePrice:"99.99$"},
  { url: "b4.jpg", title: "Place Holder Field" , price:"119.99$", salePrice:"79.99$"},
  { url: "b5.jpg", title: "Place Holder Field" , price:"114.99", salePrice:"89.99$"},
  { url: "b6.jpg", title: "Place Holder Field" , price:"89.99$", salePrice:"70.99$"},
  { url: "b7.jpg", title: "Place Holder Field" , price:"169.99$", salePrice:"129.99$"},
  { url: "b8.jpg", title: "Place Holder Field" , price:"109.99$", salePrice:"69.99$"}
];
const IMAGES_CAROUSEL = [
  { url: "shoes1.jpg", title: "Image 1" },
  { url: "shoes5.jpg", title: "Image 5" },
  { url: "shirt1.jpg", title: "Image 6" },
  { url: "shirt2.jpg", title: "Image 7" },
];

const POPULAR_NOW = [
  {title: "adizero", url:"#"},
  {title: "hello kitty", url:"#"},
  {title: "sales", url:"#"},
  {title: "shoes", url:"#"},
  {title: "tracksuit", url:"#"}

]

export default function App() {
  // const mainCarouselContainer = {
  //   width: "100%",
  //   height: "100%",
  //   margin: "0 auto",
  //   backgroundColor: "", //if not Full Width
  // };

  //   const ITEM_WIDTH = 330;
  //   const containerRef = useRef();
  // const [scrollPosition, setScrollPosition] = useState(0);

  //   const handleScroll = (scrollAmount)=>{
  //   const newScrollPosition = scrollPosition + scrollAmount;
  //   setScrollPosition(newScrollPosition);
  //   containerRef.current.scrollLeft += newScrollPosition;
  // }
  // const [scrollIndex, setScrollIndex] = useState(0);

  const offerCardsRef = useRef(null);
  const offerCards2Ref = useRef(null);
  const productsCardsRef = useRef(null);
  const productsCards2Ref = useRef(null);

  function ScrollToIndex(index, ref, cName) {
    const imgNode = ref.current?.querySelectorAll(
      `.offer-cards-wrapper > ${cName}`
    )[index];
    imgNode?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }

  return (
    <>
      <PromotionHeader
        title1={"FREE DELIVERY OVER 999 EGP"}
        title2={"WELCOME OFFER 15% OFF"}
        title3={"FREE RETURNS"}
      />
      <MainHeaderMobile />
      <MainHeaderDesktop />
      <div /*style={mainCarouselContainer}*/>
        
        <MainCarouselModified
          autoPlayMode={false}
          imgHeight="100vh"
          imgWidth="100vw"
          images={IMAGES_CAROUSEL}
        />
      </div>
      <div>
        <h2 className="offersHeadings text-center text-black flex flex-row justify-center items-center">SEASON{`'`}S FLASH SALE</h2>

        <div
          ref={offerCardsRef}
          /*style={{marginLeft:`${scrollPosition}px`}}*/ className="offer-cards-wrapper gap-6">
          <div
            className="offersArrows"
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              justifyContent: "space-between",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}>
            <i
              onClick={() => {
                // var min = scrollPosition ==0? min: setScrollPosition(scrollPosition +320)
                // const min =
                //   scrollIndex == 0 ? 0 : setScrollIndex(scrollIndex - 7);
                // setScrollIndex(0);
                ScrollToIndex(0, offerCardsRef, '.offerCard');
              }}
              className={`offers-cards-arrow-left bi bi-arrow-left cursor-pointer`}></i>
            <i
              onClick={() => {
                // var max = scrollPosition == -960? max : setScrollPosition(scrollPosition -320)
                // const max =
                //   scrollIndex == 7 ? 7 : setScrollIndex(scrollIndex + 7);
                // setScrollIndex(7)
                ScrollToIndex(7, offerCardsRef, '.offerCard');
              }}
              className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
          </div>
          {IMAGES_OFFER_CARD2.map((image, imageIndex) => (
            <OfferCard cNameOffers='offerCard' key={imageIndex} imageUrl={image.url} productTitle={image.title} price={image.price} />
          ))}
        </div>
      </div>
      <div className="relative"><Banner paragraph="Feel your strength" heading="DROPSET" buttonParagraph="SHOP NOW"/></div>
      <div>
        <h2 className="popularRightNowHeading">POPULAR RIGHT NOW</h2>
        <div className="popularNowContainer">
        {POPULAR_NOW.map((e, index)=>(
          <PopularNow key={index} popularNowTitle={e.title}/>
        ))}
      </div>
      </div>
      <div className="categoriesMiniContainer">
        <CategoriesMini />
      </div>
      {/* <div className="flex flex-row overflow-scroll">
      {CAROUSEL_PRODUCTS.map((image, imageIndex) => (
            <CarouselProducts key={imageIndex} imageUrl={image.url} productTitle={image.title} price={image.price} saleProductPrice={image.salePrice} salePercentage="50%" />
          ))}
      </div> */}


      <div>
        <h2 className="offersHeadings text-center text-black flex flex-row justify-center items-center">SALE - UP TO 50% OFF</h2>

        <div
          ref={productsCardsRef}
          className="offer-cards-wrapper">
          <div
            className="offersArrows"
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              justifyContent: "space-between",
              paddingLeft: "40px",
              paddingRight: "40px",
              zIndex:"1"
            }}>
            <i
              onClick={() =>{
                ScrollToIndex(0, productsCardsRef, '.productCard');
              }}
              className="offers-cards-arrow-left bi bi-arrow-left cursor-pointer"></i>
            <i
              onClick={() => {
                ScrollToIndex(7, productsCardsRef, '.productCard');
              }}
              className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
          </div>
          {CAROUSEL_PRODUCTS.map((image, imageIndex) => (
            <CarouselProducts cNameProducts='productCard' key={imageIndex} imageUrl={image.url} saleProductPrice={image.salePrice} productTitle={image.title} originalPrice={image.price} salePercentage="50%" />
          ))}
        </div>
      </div>
      

      <div className="mt-28">
        <h2 className="offersHeadings text-center text-black flex flex-row justify-center items-center">BEST OF ADIDAS</h2>

        <div
          ref={productsCards2Ref}
          className="offer-cards-wrapper">
          <div
            className="offersArrows"
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              justifyContent: "space-between",
              paddingLeft: "40px",
              paddingRight: "40px",
              zIndex:"1"
            }}>
            <i
              onClick={() =>{
                ScrollToIndex(0, productsCards2Ref, '.productCard2');
              }}
              className="offers-cards-arrow-left bi bi-arrow-left cursor-pointer"></i>
            <i
              onClick={() => {
                ScrollToIndex(7, productsCards2Ref, '.productCard2');
              }}
              className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
          </div>
          {CAROUSEL_PRODUCTS2.map((image, imageIndex) => (
            <CarouselProducts cNameProducts='productCard2' key={imageIndex} imageUrl={image.url} saleProductPrice={image.salePrice} productTitle={image.title} originalPrice={image.price} salePercentage="50%" />
          ))}
        </div>
      </div>
      <div>
        <h2 className="offersHeadings text-center text-black flex flex-row justify-center items-center">WHAT{`'`}S HOT</h2>

        <div
          ref={offerCards2Ref}
          /*style={{marginLeft:`${scrollPosition}px`}}*/ className="offer-cards-wrapper gap-6">
          <div
            className="offersArrows"
            style={{
              position: "absolute",
              flexDirection: "row",
              width: "100%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              justifyContent: "space-between",
              paddingLeft: "40px",
              paddingRight: "40px",
            }}>
            <i
              onClick={() => {
                // var min = scrollPosition ==0? min: setScrollPosition(scrollPosition +320)
                // const min =
                //   scrollIndex == 0 ? 0 : setScrollIndex(scrollIndex - 7);
                // setScrollIndex(0);
                ScrollToIndex(0, offerCards2Ref, '.offerCard2');
              }}
              className={`offers-cards-arrow-left bi bi-arrow-left cursor-pointer`}></i>
            <i
              onClick={() => {
                // var max = scrollPosition == -960? max : setScrollPosition(scrollPosition -320)
                // const max =
                //   scrollIndex == 7 ? 7 : setScrollIndex(scrollIndex + 7);
                // setScrollIndex(7)
                ScrollToIndex(6, offerCards2Ref, '.offerCard2');
              }}
              className="offers-cards-arrow-right bi bi-arrow-right cursor-pointer"></i>
          </div>
          {IMAGES_OFFER_CARD2.map((image, imageIndex) => (
            <OfferCard cNameOffers='offerCard2' key={imageIndex} imageUrl={image.url} productTitle={image.title} price={image.price} />
          ))}
        </div>
      </div>
      <PromotionBanner promotionHeading='BECOME A MEMBER & GET 15% OFF'/>
      <Footer/>
    </>
  );
}
