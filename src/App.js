import { Typography } from "@mui/material";
import React, { useState } from "react";
import CheckListTable from "./Components/CheckListTable";
import Form from "./Components/Form";
import TemplateSummary from "./Components/TemplateSummary";
import VerticalLinearStepper from "./Components/VerticalLinearStepper";

const App = () => {
  const [info, setInfo] = useState("");
  const handleInfoDetails = (data) => {
    setInfo(data);
  };
  return (
    <>
      <TemplateSummary />
      <br />
      <br />
      {/* <Form onInfoSubmit={handleInfoDetails} sendInfo={info} />
      <CheckListTable infoData={info} /> */}
      <Typography variant="h6" color="red" sx={{ textDecoration: "underline" }}>
        Prudential Retirement Services On-boarding Checklist
      </Typography>
      <br />
      <br />
      <VerticalLinearStepper />
    </>
  );
};

export default App;
