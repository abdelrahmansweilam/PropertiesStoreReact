import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import ImageUpload from "./ImageUpload";

export default function AddProperty(props) {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [locality, setLocality] = useState("");
  const [bedroom, setBedroom] = useState(1);
  const [bath, setBath] = useState(1);
  const [area, setArea] = useState(100);
  const [areaUnit, setAreaUnit] = useState("");
  const [images, setImages] = useState([]);
  return (
    <Dialog open={props.openPopup}>
      <DialogTitle>Add Property</DialogTitle>
      <DialogContent
        style={{ width: "35vw", padding: "20px 20px", alignItems: "center" }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "70vh",
          }}
        >
          <TextField
            label="Title"
            variant="outlined"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <TextField
            label="Address"
            variant="outlined"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <TextField
            label="Description"
            variant="outlined"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              style={{ width: "50%" }}
              label="Price"
              variant="outlined"
              onChange={(e) => {
                setPrice(parseInt(e.target.value));
              }}
            />
            <TextField
              style={{ width: "50%" }}
              label="Locality/Area"
              variant="outlined"
              onChange={(e) => {
                setLocality(e.target.value);
              }}
            />
          </Box>

          <Box style={{ display: "flex", flexDirection: "row" }}>
            <FormControl fullWidth>
              <InputLabel>Bedroom</InputLabel>
              <Select
                value={bedroom}
                label="Bedroom"
                onChange={(e) => {
                  setBedroom(e.target.value);
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Bath</InputLabel>
              <Select
                value={bath}
                label="Bath"
                onChange={(e) => {
                  setBath(e.target.value);
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row" }}>
            <FormControl fullWidth>
              <InputLabel>Carpet Area</InputLabel>
              <Select
                value={area}
                label="Carpet Area"
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              >
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={300}>300</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Area Unit</InputLabel>
              <Select
                value={areaUnit}
                label="Area Unit"
                onChange={(e) => {
                  setAreaUnit(e.target.value);
                }}
              >
                <MenuItem value={"Sq Ft"}>Sq Ft</MenuItem>
                <MenuItem value={"Sq Yd"}>Sq Yd</MenuItem>
                <MenuItem value={"Sq Mt"}>Sq Mt</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <ImageUpload setImages={setImages} />
          <Box
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              onClick={() => {
                let id = props.id;
                props.setPropertiesList([
                  ...props.propertiesList,
                  {
                    id,
                    title,
                    address,
                    description,
                    price,
                    locality,
                    bedroom,
                    bath,
                    area,
                    areaUnit,
                    images,
                    isFavouite: false,
                    viewCount: 0,
                    time_created: Date.now(),
                  },
                ]);
                props.setId(props.id + 1);
                props.setOpenPopup(false);
              }}
            >
              Add
            </Button>
            <Button
              onClick={() => {
                props.setOpenPopup(false);
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
