import React, { useMemo, useState,useContext } from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import {useNavigate} from "react-router-dom"


const CountryCard: React.FC<{ data?: any }> = ({ data }) => {
  const currency = useMemo(() => {
    let veri = Object.keys(data.currencies ?? "")[0];
    return veri;
  }, [data]);




  const navigate=useNavigate()



  
  return (
    <Card sx={{ width: "90%",cursor:"pointer" }} onClick={()=>navigate(`/country/${data.name.common}`)}  >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {data.altSpellings[0]}
          </Avatar>
        }
        title={data.name.common}

        subheader={data.continents[0]}
        
      />
      <CardMedia
        component="img"
        height="194"
        image={data?.flags.png}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" fontWeight={"bold"}>
          Capital : {data.capital}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight={"bold"}>
          Currency : {currency ? data.currencies[currency].name : ""}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
