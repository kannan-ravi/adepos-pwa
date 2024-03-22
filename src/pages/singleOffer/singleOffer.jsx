import { useState } from "react";
import Items from "../../components/items/items";
import { Container } from "@mui/material";

const SingleOffer = () => {
  const [isGridView, setIsGridView] = useState(false);
  const demoItemCard = [1, 2, 3];

  return (
    <div className="gap-from-navbar">
      <Container>
        <Items
          isGridView={isGridView}
          setIsGridView={setIsGridView}
          demoItemCard={demoItemCard}
          gridListOption={true}
          heading="Uplifting Anytime"
        />
      </Container>
    </div>
  );
};

export default SingleOffer;
