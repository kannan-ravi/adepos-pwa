import { Container } from "@mui/material";
import OfferImage from "../../images/offers/uplifting_anytime-cover.png";

import "./offers.scss";
import OfferBanner from "../../components/offerBanner/offerBanner";

const Offers = () => {
  return (
    <div className="gap-from-navbar">
      <Container>
        <div className="offers-container-main">
          <h1>All Offers</h1>
          <OfferBanner OfferImage={OfferImage} />
        </div>
      </Container>
    </div>
  );
};

export default Offers;
