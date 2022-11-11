import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FormControl, InputLabel, Link, MenuItem, Select } from "@mui/material";
import {useNavigate} from "react-router-dom"

const Header = () => {

  const navigate=useNavigate()

  return (
    <Box>
      <AppBar position="static">
        <Toolbar  >
          <Typography
            variant="h5"
            sx={{ flexGrow: 1 , cursor:"pointer" }}
            onClick={()=>navigate("/")}
          >
              Country Info
        
          </Typography>
          <Box display="flex" alignItems={"center"} paddingRight={"1.5rem"} >
            <Typography
              variant="h6"
              textAlign={"right"}
              onClick={()=>navigate("/table")}
              sx={{cursor:"pointer"}}
            >
             
                Table
        
            </Typography>
         
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
