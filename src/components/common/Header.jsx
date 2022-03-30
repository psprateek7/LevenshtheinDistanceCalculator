import { Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { STRING_UTILS } from "../../utils/constants/stringUtils"

const useStyles = makeStyles({
    heading: {
        color: "#1664C0",
        fontSize: "4rem",
    },
})

export const Header = () => {
    const classes = useStyles()
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            wrap="nowrap"
            marginBottom={"20px"}
            marginTop={"20px"}
        >
            <Typography variant="h2" className={classes.heading}>
                {STRING_UTILS.HEADER_TITLE}
            </Typography>
        </Grid>
    )
}
