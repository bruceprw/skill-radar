import { React, useState } from "react";
import Slider from "react-slick";
import SliderCard from "./SliderCard";
import SlideData from "../data/HotEvents.json";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Box from "@mui/material/Box";

export default function SlideComponent() {
  const [open, setOpen] = useState(false);

  const modalHandler = () => {
    console.log("TEATA");
    setOpen(true);
  };

  const slides = SlideData.Events;
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box onClick={modalHandler} key={slide.text}>
            <SliderCard
              key={slide.text}
              title={slide.text}
              content={slide.description}
              image={slide.image}
            />
          </Box>
        ))}
      </Slider>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Here is some more information
          </Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            Information on this job will be displayed here.
          </Typography>
        </Sheet>
      </Modal>
    </>
  );
}
