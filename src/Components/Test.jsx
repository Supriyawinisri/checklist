import { TextField } from "@mui/material";
import React, { useState } from "react";
import { onBoardingChecklist } from "../json/response/onBoardingChecklist";

const Test = () => {
  const [value, setValue] = useState(onBoardingChecklist);
  const handleChange = (e, id, a) => {
    setValue((prevState) => {
      const newData = prevState.map((data) => {
        if (data.id === id) return { ...data, date: e.target.value };
        return data;
      });
      return newData;
    });
  };

  return (
    <>
      {value &&
        value.map((data, i) => {
          return (
            <TextField
              id="standard-basic"
              variant="standard"
              value={data.date}
              onChange={(e) => handleChange(e, data.id, "data")}
            />
          );
        })}
    </>
  );
};

export default Test;
