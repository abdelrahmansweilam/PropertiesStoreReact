import "./App.css";
import { Box, Button, AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddProperty from "./AddProperty";
import Property from "./Property";
import FiltersCard from "./FiltersCard";
import RecentVisit from "./RecentVisit";

function App() {
  const [id, setId] = useState(0);
  const [propertiesList, setPropertiesList] = useState([]);
  const [filteredPropertiesList, setFilteredPropertiesList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [bedroomFilter, setBedroomFilter] = useState(3);
  const [addedDateFilter, setAddedDateFilter] = useState("Any");
  const [priceRange, setPriceRange] = useState("Any");
  const [localityFilter, setLocalityFilter] = useState("Any");
  const [recentlyVisited, setRecentlyVisited] = useState([]);

  useEffect(() => {
    const priceRangeBounds = priceRange.split(",");
    let minPrice = 0;
    let maxPrice = 10000000000;
    let minDate = new Date(1970, 1, 1);
    if (priceRangeBounds.length > 1) {
      minPrice = parseInt(priceRangeBounds[0]) * 1000;
      maxPrice = parseInt(priceRangeBounds[1]) * 1000;
    }
    if (addedDateFilter !== "Any") {
      let currentDate = new Date();
      minDate = new Date(
        currentDate.setDate(
          currentDate.getDate() - parseInt(addedDateFilter) * 7
        )
      );
    }
    setFilteredPropertiesList(
      propertiesList.filter((element) => {
        let localityName = element.locality;
        if (localityFilter !== "Any") {
          localityName = localityFilter;
        }
        return (
          element.bedroom <= bedroomFilter &&
          element.time_created >= minDate &&
          parseInt(element.price) >= minPrice &&
          parseInt(element.price) <= maxPrice &&
          element.locality === localityName
        );
      })
    );
  }, [
    propertiesList,
    bedroomFilter,
    addedDateFilter,
    priceRange,
    localityFilter,
  ]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: "linear-gradient(to bottom right, #5D3FD3, #C3B1E1)",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ width: "100vw" }}>
        <AppBar position="static" />
        <Toolbar elevation={10} sx={{ justifyContent: "center" }}>
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            Properties Store
          </Typography>
        </Toolbar>
      </Box>
      <AddProperty
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        id={id}
        setId={setId}
        propertiesList={propertiesList}
        setPropertiesList={setPropertiesList}
      />
      <Box
        sx={{
          minHeight: "100vh",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            padding: "5px",
            maxHeight: "5vh",
            maxWidth: "12vw",
            margin: "10px",
            color: "#5D3FD3",
            backgroundColor: "white",
          }}
          onClick={() => {
            setOpenPopup(true);
          }}
        >
          Add Property
        </Button>
        <FiltersCard
          bedroomFilter={bedroomFilter}
          setBedroomFilter={setBedroomFilter}
          addedDateFilter={addedDateFilter}
          setAddedDateFilter={setAddedDateFilter}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          localityFilter={localityFilter}
          setLocalityFilter={setLocalityFilter}
        />
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          width: "40%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {filteredPropertiesList
          .slice(0)
          .reverse()
          .map((property, index, array) => {
            return (
              <Property
                propertiesList={propertiesList}
                setPropertiesList={setPropertiesList}
                property={property}
                index={index}
                key={index}
                recentlyVisited={recentlyVisited}
                setRecentlyVisited={setRecentlyVisited}
              />
            );
          })}
      </Box>
      <Box
        sx={{
          minHeight: "100vh",
          width: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" style={{ color: "white" }}>
          Recently Visited
        </Typography>
        {recentlyVisited
          .slice(0)
          .reverse()
          .map((recentVisit, index) => (
            <RecentVisit recentVisit={recentVisit} key={index} />
          ))}
      </Box>
    </Box>
  );
}

export default App;
