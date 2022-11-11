import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

const CountryDetail = () => {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB8w6KEFGUpqQs9iDrehXEZylMUflo-auk",
  });

  const params = useParams();
  const [countryInfo, setCountryInfo] = useState<any>();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${params.name}`)
      .then((res) => res.json())
      .then((val) => {
        console.log("vall ==>", val);
        setCountryInfo(val[0]);
      });
  }, []);

  const languages = useMemo(() => {
    if (countryInfo) {
      const langkeys = Object.keys(countryInfo.languages);

      return langkeys;
    }
  }, [countryInfo]);

  const currencies = useMemo(() => {
    if (countryInfo) {
      return Object.keys(countryInfo.currencies);
    }
  }, [countryInfo]);

  if (!countryInfo) {
    return <CircularProgress />;
  }

  return (
    <Box display={"flex"} flexDirection={"column"} sx={{ flexGrow: "1" }} px="2rem">
      <Box display={"flex"}  mt="2rem">
        <img src={countryInfo.flags.png} alt="" />
        <Box display={"flex"} flexDirection="column" flexGrow={"1"} px="2rem">
          <Box
            display={"flex"}
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
            borderBottom={".5px solid gray"}
          >
            <Typography variant="h4" fontWeight={"bold"} color="#497174">
              {countryInfo.name.common}
            </Typography>
          </Box>
          <Box
            display={"grid"}
            gridTemplateColumns="1fr 1fr 1fr"
            gap={"1rem"}
            height="100%"
          >
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Population : {countryInfo.population.toLocaleString()}
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Capital : {countryInfo.capital[0]}
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Region : {countryInfo.continents[0]}
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Languages :{" "}
              {languages ? countryInfo.languages[languages[0]] : null}
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Currency :{" "}
              {currencies ? countryInfo.currencies[currencies[0]].name : null}
            </Typography>
            <Typography
              variant="h5"
              color="gray"
              fontWeight={"bold"}
              display="flex"
              alignItems={"center"}
            >
              Area : {countryInfo.area} km²
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexGrow: "1",marginTop:"2rem",marginBottom:"1rem",backgroundColor:"red" }}>
        {isLoaded ? (
          <GoogleMap
            zoom={10}
            center={{ lat: countryInfo.latlng[0], lng: countryInfo.latlng[1] }}
            mapContainerClassName="map-container"
          />
        ) : null}
      </Box>

    </Box>
  );
};

export default CountryDetail;
