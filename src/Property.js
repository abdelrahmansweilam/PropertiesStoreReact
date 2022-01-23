import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import ImageSlider from "./ImageSlider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewProperty from "./ViewProperty";

const Property = (props) => {
  const [openPopup, setOpenPopup] = useState(false);
  const setViewCount = () => {
    const newIndex = props.propertiesList.length - props.index - 1;
    let newProperty = { ...props.property };
    newProperty.viewCount = newProperty.viewCount + 1;
    let newProperties = [...props.propertiesList];
    newProperties[newIndex] = newProperty;
    props.setPropertiesList(newProperties);
  };
  const favouriteProperty = () => {
    const newIndex = props.propertiesList.length - props.index - 1;
    let newProperty = { ...props.property };
    newProperty.isFavourite = !newProperty.isFavourite;
    let newProperties = [...props.propertiesList];
    newProperties[newIndex] = newProperty;
    props.setPropertiesList(newProperties);
  };
  return (
    <Box>
      <ViewProperty
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        property={props.property}
        propertiesList={props.propertiesList}
        setPropertiesList={props.setPropertiesList}
        recentlyVisited={props.recentlyVisited}
        index={props.index}
        setRecentlyVisited={props.setRecentlyVisited}
      />
      <Card
        style={{ margin: "10px", padding: "10px" }}
        color="default"
        elevation={10}
      >
        <ImageSlider images={props.property.images} />

        <Typography variant="h5">{props.property.title} </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">
            {props.property.address} <br />{" "}
          </Typography>
          <Typography variant="caption">
            Locality/Area: {props.property.locality} <br />{" "}
          </Typography>
        </Box>
        <Typography variant="caption">
          Price: {props.property.price} <br />{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "start",
          }}
        >
          <Typography variant="caption">
            Area: {props.property.area} {props.property.areaUnit}
            <br />{" "}
          </Typography>
          <Typography variant="caption">
            {props.property.bedroom} Bedroom(s) <br />{" "}
          </Typography>
          <Typography variant="caption">
            {props.property.bath} Bath(s) <br />{" "}
          </Typography>
        </Box>
        <Typography variant="caption">
          Description:
          <br /> {props.property.description} <br />{" "}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">
            {props.property.viewCount} people viewed this listing <br />{" "}
          </Typography>

          {props.property.isFavourite ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Marked as Favourite</Typography>
              <IconButton
                size="small"
                aria-label="upload picture"
                component="span"
                onClick={() => {
                  favouriteProperty();
                }}
              >
                <FavoriteIcon color="error" fontSize="small" />
              </IconButton>
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="caption">Mark as Favourite</Typography>
              <IconButton
                size="small"
                color="error"
                aria-label="upload picture"
                component="span"
                onClick={() => {
                  favouriteProperty();
                }}
              >
                <FavoriteBorderIcon color="error" fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
        <Box
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#5D3FD3", color: "white" }}
            onClick={() => {
              setViewCount();
              setOpenPopup(true);
            }}
          >
            View
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default Property;
