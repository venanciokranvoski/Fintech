import React from "react";
import { useParams } from "react-router-dom";
import useFetchGhaphic from "../hooks/useFetch";
import { SaleForCustomer } from "../Context/DataContext";
import Loading from "../Components/Loading";


// get prop that does not exist in the created type
type SalesNotDate = Omit<SaleForCustomer, 'data'>  


function Venda() {
  const { id } = useParams();
  const { data, loading } = useFetchGhaphic<SaleForCustomer>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if(loading) return <Loading /> 
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.nome}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
    </div>
  );
}

export default Venda;
