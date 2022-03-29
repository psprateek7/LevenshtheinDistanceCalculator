import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { stringUtils } from "../../utils/constants/stringUtils";
const useStyles = makeStyles({
  container: {
    backgroundColor: "#fff",
    borderBottom: "1px solid rgba(197, 200, 209, .5)",
    padding: "0.5rem 1rem",
  },
  logo: {
    height: "40px",
    margin: "0 1rem 0 0",
    padding: "0 0 0.25rem",
    width: "150px",
  },
  heading: {
    color: "#4D4DAD",
    fontSize: "4rem",
    fontWeight: "700 !important",
    lineHeight: "6np2px",
    margin: "0 0.5rem 0 0",
    whiteSpace: "nowrap",
  },
  aboutButton: {
    textTransform: "none",
    whiteSpace: "nowrap",
    backgroundColor: "#E1E1FA !important",
    color: "#4D4DAD !important",
    boxShadow: "none !important",
    "&:hover, &:focus, &:active": {
      backgroundColor: "#C2C2F5 !important",
      boxShadow: "0 2px 5px rgba(133, 133, 235, .35) !important",
      color: "#343473 !important",
    },
  },
});

export const Header = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center" alignItems="center" wrap="nowrap">
      <Typography variant="h2" className={classes.heading}>
        {stringUtils.HEADER_TITLE}
      </Typography>
    </Grid>
  );
};
