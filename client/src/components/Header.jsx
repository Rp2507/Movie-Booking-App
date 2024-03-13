import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const dummyArray = ["eMemory", "Brahmastra", "yodha"];

const Header = () => {

    const [value, setvalue] = useState(0)

  return (
    <>
      <AppBar sx={{bgcolor: "#2b2d42"}} >
        <Toolbar>
          <Box width={"20%"}>
            <MovieIcon />
          </Box>
          <Box width={"30%"} margin={"auto"}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={dummyArray.map((option) => option)}
              renderInput={(params) => (
                <TextField
                sx={{input: {color: "white"}}}
                  variant="standard"
                  {...params}
                  placeholder="Search Acroos Multiple Movie"
                />
              )}
            />
          </Box>
          <Box display={"flex"}>
            <Tabs textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setvalue(val) } >
              <Tab label="Movie" />
              <Tab label="admin" />
              <Tab label="auth" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
