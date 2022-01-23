import React, { useState } from "react";
import { Button, MobileStepper } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const IMG = (imgName) => {
  return require(`/src/property_images/${imgName}`);
};

const ImageSlider = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  const goToNextPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <img
        src={IMG(props.images[activeStep].name)}
        style={{
          height: 255,
          width: "100%",
          display: "block",
          overflow: "hidden",
        }}
        alt={props.images[activeStep].name}
      />
      <MobileStepper
        variant="text"
        position="static"
        index={activeStep}
        activeStep={activeStep}
        steps={props.images.length}
        nextButton={
          <Button
            size="small"
            onClick={goToNextPicture}
            disabled={activeStep === props.images.length - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={goToPrevPicture}
            disabled={activeStep === 0}
          >
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
};

export default ImageSlider;
