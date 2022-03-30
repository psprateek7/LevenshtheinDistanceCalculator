import React from "react"
import { TableHead } from "@mui/material"
import { CustomTableRow } from "./TableRow.jsx"

export const CustomTableHead = (props) => {
    return (
        <TableHead>
            <CustomTableRow {...props} />
        </TableHead>
    )
}
