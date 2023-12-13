import React,{useState,useEffect} from "react";
import { navdata } from "./data/navdata";
import { Grid, TextField,Card,CardContent, Rating, Badge } from "@mui/material";

export const Home=()=>{
    
    return(
        <Grid align="center" container spacing={2}>
            <Grid sx={{marginTop:"50px"}} item xs={12}>
                <TextField style={{backgroundColor:"white", borderRadius:"15px"}} fullWidth variant="filled" label="seach here....."/>
            </Grid>
            {
                navdata.map((item)=>
            <Grid  item xs={3}>
                <Card className="crdhov" sx={{height:"350px", width:"280px", backgroundColor:"aliceblue", boxShadow:"5px  5px  20px  cyan" }} align="center">
                    <CardContent>
                        <Badge badgeContent={`$ ${item.price}`} color="warning">
                       <img src={item.image} alt="" />
                       </Badge>
                       <br />
                       <h5>{item.title}</h5>
                       <h5>{item.category}</h5>
                     <Rating value = {item.rating.rate}></Rating>

                    </CardContent>
                </Card>
            
            </Grid>
            )
        }
            
        </Grid>
    )
}