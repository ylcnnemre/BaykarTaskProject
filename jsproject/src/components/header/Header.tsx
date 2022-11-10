import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 , paddingLeft:"1rem" }}>
            Country Info
          </Typography>
        </Toolbar>
      </AppBar>
      
    </Box>
  );
};

export default Header;
