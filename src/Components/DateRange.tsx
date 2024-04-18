import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

function DateRange() {
  const { inicio, final, setFinal, setInicio } = useData();
  return (
    <form className="box flex">
      <DateInput
        label="Inicio"
        onChange={({ target }) => setInicio(target.value)}
        value={inicio}
      />

      <DateInput
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
}

export default DateRange;
