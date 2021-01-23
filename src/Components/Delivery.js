import React from 'react';
import {Fab, TableCell} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import { TableBody, TableRow } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    buttonSize:{
      width:36,
      height:36,
      boxShadow:"none",
      borderBottom:"none",
    },

    EditIconsSize:{
        width:18,
        heigh:18,
    },

    DeleteIconSize:{
        width:14,
        heigh:18,
    },

}));

const Delivery = (props) => {
    const classes = useStyles();
    return(
        <TableBody>
            <TableRow>
                <TableCell>{props.index}</TableCell>
                <TableCell>{props.data.date}</TableCell>
                <TableCell>{props.data.name}</TableCell>
                <TableCell>{props.data.city}</TableCell>
                <TableCell>
                    <Fab className={classes.buttonSize} color="primary"  aria-label="edit" onClick={() => props.editDelivery(props.data)} varient="round">
                        <EditIcon className={classes.EditIconsSize} />
                    </Fab>
                </TableCell>
                <TableCell>
                    <Fab className={classes.buttonSize} color="primary" aria-label="delete" onClick={() => props.deleteDelivery(props.data.id)} varient="round">
                        <DeleteIcon className={classes.DeleteIconSize} />
                    </Fab>
                </TableCell>
            </TableRow>
        </TableBody>
    )
}

export default Delivery;