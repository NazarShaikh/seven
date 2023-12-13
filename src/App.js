import React from "react";
import { Home } from "./Components/Home";
import "./Components/style.css"
import { Card, CardContent } from "@mui/material";
import { Nav } from "./Components/Nav";

function App() {
  return (
    <Card sx={{bgcolor:"black"}}>
      <CardContent>
        <Nav/>
        
      <Home/>

      </CardContent>
    </Card>
  );
}

export default App;
