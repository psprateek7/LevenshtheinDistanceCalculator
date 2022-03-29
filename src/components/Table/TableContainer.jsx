import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import { executeMacrometaRestQl } from "../../utils/services/macrometaCollectionsOperation";
import { stringUtils } from "../../utils/constants/stringUtils";
import { makeStyles } from "@mui/styles";
import { CustomizedSnackbars } from "../common/Alerts.jsx";
import { FloatingActionButtons } from "../common/FloatingActionButton.jsx";
import { InputModal } from "../common/Modal.jsx";
const useStyles = makeStyles({
  tableCell: {
    textTransform: "uppercase",
    fontWeight: "600 !important",
  },
});

export const CollectionTable = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [message, setMessage] = useState("");
  const [shouldOpen, setShouldOpen] = useState(false);
  const [severity, setSeverity] = useState("success");
  const [modalOpen, setModalOpen] = useState(false);
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");

  const handleOpen = () => setModalOpen(true);

  const handleClose = () => {
    setString1("");
    setString2("");
    setModalOpen(false);
  };

  const getCollectionData = async () => {
    const response = await executeMacrometaRestQl("getLevenshteinRecords");
    setData(() => [...response.result]);
  };

  useEffect(() => {
    getCollectionData();
  }, [shouldOpen]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleFormValues = (formLabel, formValue) => {
    switch (formLabel) {
      case stringUtils.STRING_LITERAL_1:
        setString1(formValue);
        break;
      case stringUtils.STRING_LITERAL_2:
        setString2(formValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    await executeMacrometaRestQl(stringUtils.INSERT_QUERRY, {
      string1: string1,
      string2: string2,
    });

    setString1("");
    setString2("");
    setShouldOpen(true);
    setMessage(stringUtils.SUCCESSFUL_UPDATE_MSG);
    setModalOpen(false);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const removeRecord = async (data) => {
    try {
      await executeMacrometaRestQl(stringUtils.REMOVE_QUERRY, {
        _key: data.key,
      });
      setShouldOpen(true);
      setMessage(stringUtils.REMOVED_SUCCESSFULLY);
      setSeverity("success");
    } catch (error) {
      setShouldOpen(true);
      setMessage(stringUtils.ERROR_MSG);
      setSeverity("error");
    }
  };
  
  const handleCalculateLevenshteinDistance = () => {
    setModalOpen(true);
  };

  return (
    <Container sx={{ maxWidth: "100% !important", px: "8rem !important" }}>
      <Paper>
        <TableContainer>
          <Table className={classes.table}>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f4f6f8" }}>
                <TableCell
                  width={"12%"}
                  className={classes.tableCell}
                  align="left"
                >
                  {stringUtils.ID}
                </TableCell>
                <TableCell
                  width={"20%"}
                  className={classes.tableCell}
                  align="left"
                >
                  {stringUtils.STRING_LITERAL_1}
                </TableCell>
                <TableCell
                  width={"20%"}
                  className={classes.tableCell}
                  align="left"
                >
                  {stringUtils.STRING_LITERAL_2}
                </TableCell>
                <TableCell
                  width={"26%"}
                  className={classes.tableCell}
                  align="left"
                >
                  {stringUtils.LEVENSHTEIN_DISTANCE}
                </TableCell>
                <TableCell
                  width={"22%"}
                  className={classes.tableCell}
                  align="left"
                >
                  {stringUtils.ACTION}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.length > 0 ? (
                data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((_data, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:hover, &:focus, &:active": {
                          backgroundColor: "rgba(145, 158, 171, 0.08)",
                        },
                      }}
                    >
                      <TableCell>{_data.id}</TableCell>
                      <TableCell align="left">{_data.string1}</TableCell>
                      <TableCell align="left">{_data.string2}</TableCell>
                      <TableCell align="left">
                        {_data.levenshtein_distance}
                      </TableCell>
                      <TableCell align="left">
                        <Button
                          size="small"
                          variant="text"
                          color="error"
                          onClick={() => removeRecord(_data)}
                        >
                          <CloseRounded sx={{ pr: "5px" }} />
                          {stringUtils.REMOVE_ACTION}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontSize: "1rem", fontWeight: "600" }}>
                    {stringUtils.EMPTY_RECORD_MSG}
                  </TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[rowsPerPage]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </TableContainer>
      </Paper>
      <CustomizedSnackbars
        shouldOpen={shouldOpen}
        message={message}
        severity={severity}
      />
      <FloatingActionButtons
        handleCalculateLevenshteinDistance={handleCalculateLevenshteinDistance}
      />
      <InputModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={modalOpen}
        string1={string1}
        string2={string2}
        handleFormValues={handleFormValues}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
};
