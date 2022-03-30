import React, { useContext, useState } from "react"
import { makeStyles } from "@mui/styles"
import { STRING_UTILS } from "../../utils/constants/stringUtils"
import { Button, FormControl, InputLabel, OutlinedInput, Grid, Container } from "@mui/material"
import { AppContext } from "../context/AppContext.js"
import { executeMacrometaRestQl } from "../../utils/services/macrometaCollectionsOperation"

const useStyles = makeStyles({
    root: {
        padding: "1rem",
        paddingLeft: "2rem",
    },
})

export const InputBox = () => {
    const { STRING_LITERAL_1, STRING_LITERAL_2, CLEAR, CALCULATE, INSERT_QUERY } = STRING_UTILS
    const defaultValues = {
        string1: "",
        string2: "",
    }
    const classes = useStyles()
    const { refreshData, setRefreshData } = useContext(AppContext)
    const [inputStrings, setInputStrings] = useState(defaultValues)

    const clearInput = () => {
        setInputStrings(defaultValues)
    }

    const handleSubmit = async () => {
        try {
            await executeMacrometaRestQl(INSERT_QUERY, inputStrings)
            clearInput()
        } catch (error) {
            console.error(error)
        }

        setRefreshData(!refreshData)
    }

    const handleInputChange = (key, value) => {
        setInputStrings({ ...inputStrings, [key]: value })
    }

    return (
        <Container className={classes.root}>
            <Grid alignItems="center" container={true} direction="row" wrap="nowrap">
                <FormControl sx={{ mr: 2 }} variant="outlined" required>
                    <InputLabel htmlFor="outlined-first-name">String 1</InputLabel>
                    <OutlinedInput
                        id="outlined-string1"
                        label={STRING_LITERAL_1}
                        type="text"
                        value={inputStrings.string1}
                        onChange={(event) => handleInputChange("string1", event.target.value)}
                    />
                </FormControl>
                <FormControl variant="outlined" required>
                    <InputLabel htmlFor="outlined-last-name">String 2</InputLabel>
                    <OutlinedInput
                        id="outlined-string-2"
                        label={STRING_LITERAL_2}
                        type="text"
                        value={inputStrings.string2}
                        onChange={(event) => handleInputChange("string2", event.target.value)}
                    />
                </FormControl>
                <div style={{ display: "flex" }}>
                    <Button
                        sx={{ mx: 1, textTransform: "none" }}
                        variant="contained"
                        disabled={!inputStrings.string1 || !inputStrings.string2}
                        onClick={handleSubmit}
                    >
                        {CALCULATE}
                    </Button>
                    <Button sx={{ textTransform: "none" }} variant="contained" disabled={false} onClick={clearInput}>
                        {CLEAR}
                    </Button>
                </div>
            </Grid>
        </Container>
    )
}
