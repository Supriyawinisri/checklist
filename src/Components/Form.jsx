import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Box } from "@mui/system";

const Form = (props) => {
  const sendInfo = props.sendInfo;
  const data = {
    employeeName: sendInfo.employeeName ? sendInfo.employeeName : "",
    onBoardingDate: sendInfo.onBoardingDate
      ? sendInfo.onBoardingDate
      : new Date(),
    coordinatorName: sendInfo.coordinatorName ? sendInfo.coordinatorName : "",
    onBoardingCompletionDate: sendInfo.onBoardingCompletionDate
      ? sendInfo.onBoardingCompletionDate
      : new Date(),
    isIBMNewHire: sendInfo.isIBMNewHire ? sendInfo.isIBMNewHire : "Y/N",
  };
  const [info, setInfo] = useState(data);
  const [isButtonHidden, setIsButtonHidden] = useState(false);
  const handleChange = (e, keyName) => {
    if (keyName === "onBoardingDate")
      return setInfo({ ...info, onBoardingDate: e });
    else if (keyName === "employeeName")
      return setInfo({ ...info, employeeName: e.target.value });
    else if (keyName === "coordinatorName")
      return setInfo({ ...info, coordinatorName: e.target.value });
    else if (keyName === "isIBMNewHire")
      return setInfo({ ...info, isIBMNewHire: e.target.value });
    else if (keyName === "onBoardingCompletionDate")
      return setInfo({ ...info, onBoardingCompletionDate: e });
  };
  const handleSubmit = () => {
    setIsButtonHidden(true);
    props.onInfoSubmit(info);
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={8} md={6} lg={3}>
            <InputLabel id="employeeName">Employee Name</InputLabel>
            <TextField
              variant="outlined"
              id="employeeName"
              value={info.employeeName}
              fullWidth
              onChange={(e) => handleChange(e, "employeeName")}
            />
          </Grid>
          <Grid item xs={8} md={6} lg={3}>
            <InputLabel id="coordinatorName">
              On-Boarding Coordinator Name
            </InputLabel>
            <TextField
              id="coordinatorName"
              variant="outlined"
              value={info.coordinatorName}
              fullWidth
              onChange={(e) => handleChange(e, "coordinatorName")}
            />
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <InputLabel id="isIBMNewHire">New Hire to IBM(Y/N)</InputLabel>
            <FormControl fullWidth>
              <Select
                id="isIBMNewHire"
                value={info.isIBMNewHire}
                onChange={(e) => handleChange(e, "isIBMNewHire")}
                //   inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="Y/N">
                  None
                </MenuItem>
                <MenuItem value="Yes">Y</MenuItem>
                <MenuItem value="No">N</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <InputLabel id="onBoardingDate">On-Boarding Date</InputLabel>
            <FormControl fullWidth>
              <DatePicker
                id="onBoardingDate"
                inputFormat="MM/dd/yyyy"
                value={info.onBoardingDate}
                onChange={(e) => handleChange(e, "onBoardingDate")}
                renderInput={(params) => <TextField {...params} />}
                minDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                }
                disableFuture
                maxDate={new Date()}
              />
            </FormControl>
          </Grid>
          <Grid item xs={8} md={4} lg={2}>
            <InputLabel id="onBoardingCompletionDate">
              On-Boarding Activities Completion Date
            </InputLabel>
            <FormControl fullWidth>
              <DatePicker
                id="onBoardingCompletionDate"
                inputFormat="MM/dd/yyyy"
                value={info.onBoardingCompletionDate}
                onChange={(e) => handleChange(e, "onBoardingCompletionDate")}
                renderInput={(params) => <TextField {...params} />}
                minDate={
                  new Date(new Date().setFullYear(new Date().getFullYear() - 1))
                }
                disableFuture
                maxDate={new Date()}
              />
            </FormControl>
          </Grid>
        </Grid>
        {!isButtonHidden && (
          <Box sx={{ mb: 2 }}>
            <div>
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 1, mr: 1 }}
              >
                Continue
              </Button>
            </div>
          </Box>
        )}
      </LocalizationProvider>
    </>
  );
};

export default Form;
