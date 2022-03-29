import React from 'react';
import { Header } from '../common/Header.jsx';
import { Container } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { CollectionTable } from '../Table/TableContainer.jsx';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#F1F2F4",
        minHeight: "100vh",
        padding: "0 !important",
    },
})
export const Home=()=>{
    const classes = useStyles()
    return (
        <Container className={classes.root} maxWidth={false}>
        <Header/>
        <CollectionTable/>
        </Container>
    )
}