import React from "react"
import { TableCell, TableRow } from "@mui/material"

export const CustomTableRow = (props) => {
    return (
        <TableRow sx={{ backgroundColor: "#ffffff" }}>
            {Object.values(props).map((element, index) => (
                <TableCell width={"20%"} align="left" key={index.toString()}>
                    {element}
                </TableCell>
            ))}
        </TableRow>
    )
}
