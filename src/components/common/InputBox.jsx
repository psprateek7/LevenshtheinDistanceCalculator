import React from "react";
import { stringUtils } from "../../utils/constants/stringUtils";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";

export const InputBox = ({
  handleCancel,
  string1,
  string2,
  handleFormValues,
  handleSubmit,
}) => {
  return (
    <Paper>
      <Card>
        <CardHeader title={stringUtils.MODAL_TITLE} sx={{ pb: "0" }} />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Divider />
          <FormControl sx={{ m: 3, mb: 1 }} variant="outlined" required>
            <InputLabel htmlFor="outlined-first-name">String 1</InputLabel>
            <OutlinedInput
              id="outlined-string1"
              label={stringUtils.STRING_LITERAL_1}
              type="text"
              inputProps={{ maxLength: 24 }}
              value={string1}
              onChange={(event) =>
                handleFormValues(stringUtils.STRING_LITERAL_1, event.target.value)
              }
            />
          </FormControl>
          <FormControl sx={{ m: 3, my: 1 }} variant="outlined" required>
            <InputLabel htmlFor="outlined-last-name">String 2</InputLabel>
            <OutlinedInput
              id="outlined-string-2"
              label={stringUtils.STRING_LITERAL_2}
              type="text"
              inputProps={{ maxLength: 24 }}
              value={string2}
              onChange={(event) =>
                handleFormValues(stringUtils.STRING_LITERAL_2, event.target.value)
              }
            />
          </FormControl>

          <Divider />
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end", pt: "0" }}>
          <Button variant="contained" disabled={false} onClick={handleSubmit}>
            {stringUtils.MODAL_ACTION_BTN}
          </Button>
          <Button variant="contained" onClick={handleCancel}>
            {stringUtils.MODAL_CANCEL_BTN}
          </Button>
        </CardActions>
      </Card>
    </Paper>
  );
};
