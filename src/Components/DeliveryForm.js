import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';



const useStyles = makeStyles(() => ({
    formStyles:{
        left:588,
        width:400,
        height:284,
        position:'absolute',
    },

    button:{
        width:158,
        height:60,
        borderRadius:5,
        marginLeft:115,
        fontWeight:'bold',
        fontSize:16,
        lineHeight:19,
        letterSpacing:"0.05em"
    },
    bold:{
        fontWeight:'bold'
    },

    input:{
        width:400,
        height:60,
        background:"white",
        marginBottom:14,
        borderRadius:5,
        boxShadow: "0px 20px 40px rgba(238, 77, 71, 0.2)",
        border: "2px solid #EE4D47",
    }
}));


const DeliveryForm = (props) => {
    const buttonCon = props.editing ? 'Update' : 'Save';
    const classes = useStyles();
    const initialFormState = { id: null, date:'' ,name: '', city: '' }
    const[delivery, setDelivery] = useState(initialFormState);

    useEffect(() => {
        if(props.editing){
            setDelivery(props.currentDelivery);
        }
    }, [props])

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        setDelivery({...delivery,[name]:value });
    }

    const onSave = (event) => {
        event.preventDefault();
        if(props.editing){
            props.updateDelivery(delivery.id, delivery);            
        }
        else{
            if (!delivery.date || !delivery.name || !delivery.city) return;
            props.addDelivery(delivery);
            setDelivery(initialFormState);
        }
        setDelivery(initialFormState);
    }    
    
    return(
        <FormControl className={classes.formStyles} onSubmit={onSave}>
            <TextField variant="outlined" className={classes.input} type="text" name="date" value={delivery.date} onChange={handleInputChange} InputProps={{classes:{input:classes.bold}}}></TextField>
            <TextField variant="outlined" className={classes.input} type="text" name="name" value={delivery.name} onChange={handleInputChange} InputProps={{classes:{input:classes.bold}}}></TextField>
            <TextField variant="outlined"  className={classes.input} type="text" name="city" value={delivery.city} onChange={handleInputChange} InputProps={{classes:{input:classes.bold}}}></TextField>
            <Button className={classes.button} variant="contained" color="secondary" onClick={onSave}>{buttonCon}</Button>
        </FormControl>
    )
}
export default DeliveryForm;
