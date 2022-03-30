import React, { useEffect, useState } from "react"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert from "@mui/material/Alert"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const CustomizedSnackbars = ({ shouldOpen = false, message, severity = "success" }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (shouldOpen) {
            setOpen(true)
        }
    }, [shouldOpen])

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return
        }

        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
                {message}
            </Alert>
        </Snackbar>
    )
}
