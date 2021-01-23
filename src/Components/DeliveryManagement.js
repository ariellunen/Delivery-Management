import React, { useState } from 'react';
import DeliveryList from './DeliveryList';
import DeliveryForm from './DeliveryForm';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import scene from './scene.png';
import mobel from './mobel.png';
import InitDeliveries from '../Data/deliveries.json';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Rubik',
            'sans-serif',
        ].join(','),
        fontSize:18,
        fontWeightRegular:300,
        lineHeigh:40,
    },
    palette:{
        primary:{
            main: "#ED4D47"
        },
        secondary:{
            main: "#EE4D47"
        },
    },
    overrides: {
        MuiTableCell: {
            root: {
                borderBottom:'none',
            },
            body:{
                paddingTop:14,
            }
        },
    },
});

const useStyles = makeStyles(() => ({
    background:{
        backgroundImage:`url(${scene})`,
        height:955.07,
        marginRight:0,
        width:"100%",
        marginTop:0,
        backgroundRepeat: 'no-repeat',
    },

    dataStyles:{
        width:998,
        height:594,
        top:116,
        position:'relative',
        left:183,
    },

    mobel:{
        backgroundImage:`url(${mobel})`,
        width:881,
        height:394.55,
        backgroundRepeat: 'no-repeat',
        position:'absolute',
        left: "0%",
        right: "49.44%",
        top: 746,
        bottom: "0.04%",
    }
}));

const DeliveryManagement = () => {
    const classes = useStyles();
    const [deliveries, setDeliveries] = useState(InitDeliveries);
    const [editing, setEditing] = useState(false);
    const initialFormState = { id: null, date:'' ,name: '', city: '' };
    const [currentDelivery, setCurrentDelivery] = useState(initialFormState);

    const addDelivery = (delivery) => {
        delivery.id = nextId();
        setDeliveries([...deliveries, delivery]);
    }

    const nextId = ()  => {
        let max = deliveries.reduce((prev, curr) => prev.id > curr.id ? prev.id : curr.id , 0);
        return ++max;
    }

    const editDelivery = (delivery) => {
        setEditing(true);
        setCurrentDelivery({ id: delivery.id , date: delivery.date, name: delivery.name, city: delivery.city });
    }

    const deleteDelivery = (id) => {
        setDeliveries(deliveries.filter((delivery) => delivery.id !== id));
    }

    const updateDelivery = (id, updateDelivery) => {
        setEditing(false);
        setDeliveries(deliveries.map((delivery) => (delivery.id === id ? updateDelivery : delivery)));
    }


    return(
        <ThemeProvider theme={theme} >
            <Container className={classes.background}>
                <Grid container className={classes.dataStyles} >
                    <Grid item>        
                        <DeliveryForm 
                            addDelivery={addDelivery}
                            editing={editing}
                            setEditing={setEditing}
                            currentDelivery = {currentDelivery}
                            updateDelivery = {updateDelivery}
                        />
                    </Grid>
                    <Grid item>
                        <DeliveryList deliveries={deliveries} deleteDelivery={deleteDelivery} editDelivery={editDelivery} />
                    </Grid>
                </Grid>
            </Container>
            <Grid container className={classes.mobel}></Grid>            
        </ThemeProvider>
    )
}

export default DeliveryManagement