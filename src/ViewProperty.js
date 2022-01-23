import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ImageSlider from "./ImageSlider";

const isPresent = (item, list) => {
  for (let i in list) {
    if (item.id === list[i].id) return true;
  }
  return false;
};

const ViewProperty = (props) => {
  const [area, setArea] = useState(props.property.area);
  console.log(area);
  const [areaUnit, setAreaUnit] = useState(props.property.areaUnit);
  useEffect(() => {
    switch (props.property.areaUnit) {
      case "Sq Mt":
        if (areaUnit === "Sq Mt") {
          setArea(props.property.area);
        } else if (areaUnit === "Sq Ft") {
          setArea(parseInt(props.property.area * 10.7639));
        } else if (areaUnit === "Sq Yd") {
          setArea(parseInt(props.property.area * 1.19599));
        }
        break;

      case "Sq Ft":
        if (areaUnit === "Sq Mt") {
          setArea(parseInt(props.property.area * 0.092903));
        } else if (areaUnit === "Sq Ft") {
          setArea(props.property.area);
        } else if (areaUnit === "Sq Yd") {
          setArea(parseInt(props.property.area * 0.111111));
        }
        break;
      case "Sq Yd":
        if (areaUnit === "Sq Mt") {
          setArea(parseInt(props.property.area * 0.836127));
        } else if (areaUnit === "Sq Ft") {
          setArea(parseInt(props.property.area * 9));
        } else if (areaUnit === "Sq Yd") {
          setArea(props.property.area);
        }
        break;
    }
  }, [areaUnit]);
  return (
    <Dialog open={props.openPopup}>
      <DialogTitle>{props.property.title}</DialogTitle>
      <DialogContent style={{ width: "35vw", padding: "20px 10px" }}>
        <ImageSlider images={props.property.images} />
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
            justifyContent: "space-between",
            alignItems: "start",
          }}
        >
          <Typography variant="caption">
            Area: {area} {areaUnit}
            <br />{" "}
          </Typography>
          <FormControl size="small" style={{ width: "40%", height: "5%" }}>
            <InputLabel>Area Unit</InputLabel>
            <Select
              value={areaUnit}
              label="Area Unit"
              onChange={(e) => {
                setAreaUnit(e.target.value);
              }}
            >
              <MenuItem value={"Sq Mt"}>Sq Mt</MenuItem>
              <MenuItem value={"Sq Ft"}>Sq Ft</MenuItem>
              <MenuItem value={"Sq Yd"}>Sq Yd</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
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
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="caption">
            Views:{props.property.viewCount} <br />{" "}
          </Typography>
          {props.property.isFavourite ? (
            <FavoriteIcon color="error" fontSize="small" />
          ) : (
            <FavoriteBorderIcon color="error" fontSize="small" />
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
              if (!isPresent(props.property, props.recentlyVisited))
                props.setRecentlyVisited([
                  ...props.recentlyVisited,
                  props.property,
                ]);
              props.setOpenPopup(false);
            }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default ViewProperty;
