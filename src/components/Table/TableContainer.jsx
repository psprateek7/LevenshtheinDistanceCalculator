import React, { useEffect, useState, useContext } from "react"
import { Button, Container, Paper, Table, TableBody, TableContainer, TablePagination } from "@mui/material"
import { CloseRounded } from "@mui/icons-material"
import { executeMacrometaRestQl } from "../../utils/services/macrometaCollectionsOperation"
import { STRING_UTILS } from "../../utils/constants/stringUtils"

import { CustomizedSnackbars } from "../common/Alerts.jsx"
import { CustomTableHead } from "../common/TableHead.jsx"
import { CustomTableRow } from "../common/TableRow.jsx"
import { AppContext } from "../context/AppContext.js"

export const CollectionTable = () => {
    const {
        ID,
        STRING_LITERAL_1,
        STRING_LITERAL_2,
        LEVENSHTEIN_DISTANCE,
        ACTION,
        EMPTY_RECORD_MSG,
        REMOVED_SUCCESSFULLY,
        REMOVE_QUERRY,
        ERROR_MSG,
        REMOVE_ACTION,
    } = STRING_UTILS
    const { refreshData, setRefreshData, lDistanceData, setLDistanceData } = useContext(AppContext)
    const [message, setMessage] = useState("")
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [severity, setSeverity] = useState("success")
    const [shouldOpen, setShouldOpen] = useState(false)

    const getLevenshteinDistanceRecords = async () => {
        const response = await executeMacrometaRestQl("getLevenshteinRecords")
        setLDistanceData(() => [...response.result])
    }

    useEffect(() => {
        getLevenshteinDistanceRecords()
    }, [refreshData])

    const handlePageChange = (event, newPage) => {
        setPage(newPage)
    }

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(event.target.value)
        setPage(0)
    }

    const showAlert = (message, severity) => {
        setMessage(message)
        setSeverity(severity)
        setShouldOpen(true)
    }

    const removeRecord = async (data) => {
        try {
            await executeMacrometaRestQl(REMOVE_QUERRY, {
                _key: data.key,
            })
            setRefreshData(!refreshData)
            showAlert(REMOVED_SUCCESSFULLY, "success")
        } catch (error) {
            showAlert(ERROR_MSG, "error")
        }
    }

    const returnRemoveButton = (_data) => (
        <Button
            sx={{ textTransform: "none" }}
            size="small"
            variant="text"
            color="error"
            onClick={() => removeRecord(_data)}
        >
            <CloseRounded sx={{ pr: "5px" }} />
            {REMOVE_ACTION}
        </Button>
    )

    return (
        <Container sx={{ maxWidth: "100% !important", px: "8rem !important" }}>
            <Paper>
                <TableContainer>
                    <Table>
                        <CustomTableHead
                            ID={ID}
                            STRING_LITERAL_1={STRING_LITERAL_1}
                            STRING_LITERAL_2={STRING_LITERAL_2}
                            LEVENSHTEIN_DISTANCE={LEVENSHTEIN_DISTANCE}
                            ACTION={ACTION}
                        />
                        <TableBody>
                            {lDistanceData.length > 0 ? (
                                lDistanceData
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((_data, index) => (
                                        <CustomTableRow
                                            key={index.toString()}
                                            ID={_data.id}
                                            string1={_data.string1}
                                            string2={_data.string2}
                                            levenshtein_distance={_data.levenshtein_distance}
                                            returnRemoveButton={returnRemoveButton(_data)}
                                        />
                                    ))
                            ) : (
                                <CustomTableRow
                                    ID={""}
                                    string1={""}
                                    string2={EMPTY_RECORD_MSG}
                                    levenshtein_distance={""}
                                    returnRemoveButton={""}
                                />
                            )}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[rowsPerPage]}
                        component="div"
                        count={lDistanceData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handlePageChange}
                        onRowsPerPageChange={handleRowsPerPageChange}
                    />
                </TableContainer>
            </Paper>
            <CustomizedSnackbars shouldOpen={shouldOpen} message={message} severity={severity} />
        </Container>
    )
}
