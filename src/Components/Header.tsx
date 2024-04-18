import React from "react";
import DateRange from "./DateRange";
import Meses from "./Meses";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = React.useState("Resumo");
  const loc = useLocation();
  React.useEffect(() => {
    if (loc.pathname === "/") {
      document.title = "Fintech | Resumo";
      setTitle("Resumo");
    } else if (loc.pathname === "/vendas") {
      document.title = "Fintech | Vendas";
      setTitle("Vendas");
    }
  }, [loc]);
  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Meses />
    </header>
  );
};

export default Header;
