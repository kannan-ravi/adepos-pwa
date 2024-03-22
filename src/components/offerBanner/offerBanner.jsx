import React from "react";
import { Link } from "react-router-dom";
import "./offerBanner.scss";

const OfferBanner = ({ OfferImage }) => {
  return (
    <div className="offers-images">
      <Link to="/offers/single-offer">
        <img src={OfferImage} alt="Offers" />
      </Link>
      <Link to="/offers/single-offer">
        <img src={OfferImage} alt="Offers" />
      </Link>
    </div>
  );
};

export default OfferBanner;
