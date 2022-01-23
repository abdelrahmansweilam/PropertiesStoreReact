import { Card } from "@mui/material";
import React from "react";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import SearchBar from "./SearchBar";

const FiltersCard = (props) => {
  return (
    <Card
      elevation={10}
      sx={{
        minHeight: "60vh",
        width: "90%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "10px",
        paddingTop: "10px",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h5">Filters</Typography>
      <SearchBar
        locality={props.localityFilter}
        setLocalityFilter={props.setLocalityFilter}
      />
      <FormControl style={{ width: "90%" }}>
        <InputLabel>Locality</InputLabel>
        <Select
          value={props.localityFilter}
          label="Locality"
          onChange={(e) => {
            props.setLocalityFilter(e.target.value);
          }}
        >
          <MenuItem value={"New Cairo"}>New Cairo</MenuItem>
          <MenuItem value={"Nasr City"}>Nasr City</MenuItem>
          <MenuItem value={"Maadi"}>Maadi</MenuItem>
          <MenuItem value={"Any"}>Any</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: "90%" }}>
        <InputLabel>Price Range</InputLabel>
        <Select
          value={props.priceRange}
          label="Price Range"
          onChange={(e) => {
            props.setPriceRange(e.target.value);
          }}
        >
          <MenuItem value={"1O,15"}>10K to 15K</MenuItem>
          <MenuItem value={"15,20"}>15K to 20K</MenuItem>
          <MenuItem value={"25,30"}>25K to 30K</MenuItem>
          <MenuItem value={"Any"}>Any</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: "90%" }}>
        <InputLabel>Bedrooms</InputLabel>
        <Select
          value={props.bedroomFilter}
          label="Bedrooms"
          onChange={(e) => {
            props.setBedroomFilter(e.target.value);
          }}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      <FormControl style={{ width: "90%" }}>
        <InputLabel>Added Date</InputLabel>
        <Select
          value={props.addedDateFilter}
          label="Added Date"
          onChange={(e) => {
            props.setAddedDateFilter(e.target.value);
          }}
        >
          <MenuItem value={"1"}>This Week</MenuItem>
          <MenuItem value={"5"}>Last 5 Weeks</MenuItem>
          <MenuItem value={"15"}>Last 15 Weeks</MenuItem>
          <MenuItem value={"Any"}>Any</MenuItem>
        </Select>
      </FormControl>
    </Card>
  );
};

export default FiltersCard;
