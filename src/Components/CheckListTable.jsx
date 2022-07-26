import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  TextField,
  Input,
  Button,
} from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import { onBoardingChecklist } from "../json/response/onBoardingChecklist";

const CheckListTable = (props) => {
  const infoDetails = props.infoData;
  const tableHeader = [
    "On-Boarding Checklist",
    "Date Verified",
    "Yes/No or N/A",
    "Comments",
  ];
  if (infoDetails) {
    let today = new Date(infoDetails.onBoardingDate);
    let date =
      today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
    // eslint-disable-next-line
    onBoardingChecklist.map((data) => {
      return (data.date = date);
    });
  }

  const [tableValues, setTableValues] = useState(onBoardingChecklist);

  const handleChange = (event, id, keyName) => {
    setTableValues((prevState) => {
      const newData = prevState.map((data) => {
        if (data.id === id) {
          if (keyName === "date") return { ...data, date: event.target.value };
          if (keyName === "comment")
            return { ...data, comment: event.target.value };
          if (keyName === "status")
            return { ...data, status: event.target.value };
        }
        return data;
      });
      props.onCheckListSubmit({ infoDetails, checkListDetails: newData });
      return newData;
    });
  };

  const handleSubmit = () => {};

  return (
    <Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader &&
                tableHeader.map((header) => {
                  return <TableCell key={header}>{header}</TableCell>;
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableValues &&
              tableValues.map((tableValue) => {
                return (
                  <TableRow key={tableValue.id}>
                    <TableCell>{tableValue.questions}</TableCell>
                    <TableCell>
                      <TextField
                        variant="standard"
                        value={tableValue.date}
                        onChange={(e) => handleChange(e, tableValue.id, "date")}
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value={tableValue.status}
                        onChange={(e) =>
                          handleChange(e, tableValue.id, "status")
                        }
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="Yes">Yes</MenuItem>
                        <MenuItem value="No">No</MenuItem>
                        <MenuItem value="N/A">N/A</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        value={tableValue.comment}
                        onChange={(e) => {
                          handleChange(e, tableValue.id, "comment");
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={handleSubmit} hidden={true}>
        Submit
      </Button>
    </Fragment>
  );
};

export default CheckListTable;
