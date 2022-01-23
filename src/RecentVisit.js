import { Card, Typography } from "@mui/material";
import React from "react";

const IMG = (imgName) => {
  return require(`/src/property_images/${imgName}`);
};

const RecentVisit = (props) => {
  return (
    <Card
      style={{
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "60%",
        height: "20vh",
      }}
      color="default"
      elevation={10}
    >
      <img
        src={IMG(props.recentVisit.images[0].name)}
        style={{
          height: "100%",
          width: "100%",
          display: "block",
          overflow: "hidden",
        }}
        alt={props.recentVisit.images[0].name}
      />
      <Typography variant="h5">{props.recentVisit.title} </Typography>
    </Card>
  );
};

export default RecentVisit;
