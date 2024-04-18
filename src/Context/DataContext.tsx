import React from "react";
import useFetchGhaphic from "../hooks/useFetch";

type IDataContext = {
  loading: boolean;
  error: string | null | undefined;
  data: SaleForCustomer[] | null;
  inicio: string;
  final: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

export type SaleForCustomer = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

// function for export my context for used
export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("userData precisa estar dentro de DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n); // pega o dia da semana
  const dd = String(date.getDate()).padStart(2, "0"); // coloca o zero qaundo for numeros unicos EX: 1-9
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = String(date.getFullYear());
  return `${yyyy}-${mm}-${dd}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [inicio, setInicio] = React.useState(getDate(30));
  const [final, setFinal] = React.useState(getDate(0));

  const { data, loading, error } = useFetchGhaphic<SaleForCustomer[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );
  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, final, setInicio, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
