import { Cancel } from "@mui/icons-material";
import { Backdrop, Box, Fade, Modal, Stack, Typography } from "@mui/material";
import "./itemsCardModel.scss";

const ItemsCardModel = ({ handleClose, open }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open} sx={{ border: "none" }}>
        <Box className="item-card-modal">
          <Stack
            paddingBottom={1}
            borderBottom="1px solid black"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              fontWeight="bold"
            >
              Lorem Ipsum
            </Typography>
            <Cancel sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Stack>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ItemsCardModel;
