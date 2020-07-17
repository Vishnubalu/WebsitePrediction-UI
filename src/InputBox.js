import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 'auto',
      minWidth:'35ch'
    },
  },
}));


export default function BasicTextFields(props) {
  const classes = useStyles();



  return (
    <form className={classes.root} autoComplete="off">
        {
            props.label.map(lable=>{
               return <TextField id={lable} label={lable}  variant="outlined" onChange={props.getdata}/>
        })
        }
    </form>

  );
}