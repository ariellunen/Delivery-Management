import React from 'react';
import Delivery from './Delivery';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles({
    tableStyle:{
        width:550,
        height:594,
        backgroundColor:"white",
        borderRadius:10,
        boxShadow: "0px 20px 40px rgba(238, 77, 71, 0.1)",        
    },
})
const DeliveryList = (props) =>{
    const classes = useStyles();
    return(
        <TableContainer className={classes.tableStyle}>
            <Table>
                {props.deliveries.map((delivery, i) => (
                    <Delivery 
                        key={i} 
                        index={++i} 
                        data={delivery}
                        editDelivery={props.editDelivery} 
                        deleteDelivery={props.deleteDelivery} 
                    >
                    </Delivery>
                ))
                }
            </Table>
        </TableContainer>            
    )
}

export default DeliveryList;