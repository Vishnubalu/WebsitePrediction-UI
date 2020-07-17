import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './nav.css'

import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    title: {
        flexGrow: 1,
        fontFamily:"Times",
        color:"rgb(23,235,0)",
        marginLeft: theme.spacing(4),

    },
    logo: {
        position: "relative",
        maxWidth: 120,
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            WEBSITE PREDICTION
                        </Typography>
                        <Link to="/home">
                            <li>
                                HOME
                            </li>
                        </Link>
                        <Link to="/about">
                            <li>
                                ABOUT
                            </li>
                        </Link>
                        <Link to="/main">
                            <li>
                                UPLOAD
                            </li>
                        </Link>

                        <Link to="/download">
                            <li>
                                SAMPLE_DATA
                            </li>
                        </Link>
                    </Toolbar>
                </AppBar>
        </div>
);
}
