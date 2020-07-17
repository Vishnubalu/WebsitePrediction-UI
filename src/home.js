import React from 'react';
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div style={{textAlign:"center", marginTop:"20%"}}>
            <h1 >
                WEBSITE PREDICTION :
            </h1>
            <p style={{fontSize:"28px"}}>
                To predict malicious and benign websites based on their web characteristics.
            </p>
            <Link to="/about">
            <Button variant="outline-primary" style={{backgroundColor:"#0c7b00"}}>Get Started</Button>
            </Link>


        </div>
    );
}

export default Home;