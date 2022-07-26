import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import React from "react";
import { templateSummary } from "../json/response/templateSummary";

const tableHeader = [
  "Version #",
  "Veresion Date",
  "Author",
  "Nature of Change",
];

const TemplateSummary = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const useStyles = makeStyles((theme) => ({
    tableContainer: {},
  }));
  const classes = useStyles();
  return (
    <>
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              {tableHeader &&
                tableHeader.map((header) => {
                  return (
                    <TableCell key={header}>
                      <Typography varient="h6">
                        <strong>{header}</strong>
                      </Typography>
                    </TableCell>
                  );
                })}
            </TableRow>
          </TableHead>
          <TableBody>
            {templateSummary &&
              templateSummary.map((tableValue) => {
                return (
                  <TableRow key={tableValue.version}>
                    <TableCell>{tableValue.version}</TableCell>
                    <TableCell>{tableValue.versionDate}</TableCell>
                    <TableCell>{tableValue.author}</TableCell>
                    <TableCell>{tableValue.natureOfChange}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TemplateSummary;
