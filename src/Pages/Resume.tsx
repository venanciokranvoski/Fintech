import React from "react";
import { useData } from "../Context/DataContext";
import Graphic from "../Components/graphic/Graphic";

function Resume() {
  const { data } = useData();
  if(data === null) return  null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              ?.reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              ?.filter((value) => value.status === "pago")
              .reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              ?.filter((value) => value.status === "processando")
              .reduce((ac, item) => ac + item.preco, 0)
              .toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <Graphic data={data} />
      </div>
    </section>
  );
}

export default Resume;
