import "./offercard.css";

export default function OfferCard({imageUrl, productTitle, price, cNameOffers, buttonPress='SHOP NOW'}){

    return(
    <div className={`${cNameOffers} flex flex-col justify-center items-center text-center`}>
    <img className="offerCardImg" src={imageUrl} />
    <div className={`${cNameOffers} divText flex flex-col justify-center items-center text-center`}>
    <h2 style={{fontSize:"12px", fontWeight:"bold"}}>{productTitle}</h2>
    <p style={{fontSize:"12px"}}>{price}</p>
    <a style={{textDecoration:"underline", fontSize:"12px", fontWeight:"bold"}} href="#">{buttonPress}</a>
    </div>
    </div>
    )
}