import React from "react";
import { SaleForCustomer } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

function VendaItem({ venda }: { venda: SaleForCustomer }) {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
}

export default VendaItem;
