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
} from "@mui/material";
import React, { Fragment, useState } from "react";
import { onBoardingChecklist } from "../../json/response/onBoardingChecklist";

const tableHeader = [
  "On-Boarding Checklist",
  "Date Verified",
  "Yes/No or N/A",
  "Comments",
];

const CheckListTable = () => {
  const [tableValues, setTableValues] = useState(onBoardingChecklist);
  console.log(tableValues);

  const handleChange = (event, id, column) => {
    // console.log(event.target.value);
    // const upatedValue = {
    //   id,
    //   answer: event.target.value,
    // };
    const updatedValues = tableValues;
    updatedValues[id][column] = event.target.value;
    // console.log("Before setState", updatedValues);
    setTableValues(updatedValues);
    // console.log("After setState", tableValues);
    // console.log(tableValues[id][column]);
    // console.log(onBoardingChecklist[id]);
    // onBoardingChecklist[id][column] = event.target.value;
    // console.log(onBoardingChecklist[id]);
  };

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
                        id="standard-basic"
                        variant="standard"
                        value={tableValue.date}
                        onChange={(e) =>
                          handleChange(e, tableValue.id - 1, "date")
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Select
                        value=""
                        displayEmpty
                        onChange={(e) =>
                          handleChange(e, tableValue.id - 1, "answer")
                        }
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                        <MenuItem value="N/A">N/A</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Input
                        id="component-simple"
                        value={tableValue.comment}
                        onChange={(e) => {
                          handleChange(e, tableValue.id - 1, "comment");
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default CheckListTable;
