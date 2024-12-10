import React from "react";
//import Nav from "./components/Nav";
//import Nav from "./components/Footer";
import Footer from "./Footer";
 function Home(props){
    return(
        <>
         <Navbar></Navbar>
         <content></content>
         <h1>this is{props.car.model}</h1>
           <h1> {props.bike[1]}</h1>
        </>
    )
 }
 export default Home;