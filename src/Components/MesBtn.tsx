import React from "react";
import { useData } from "../Context/DataContext";


const btnStyleSingle: React.CSSProperties = {
    padding: "var(--gap) var(--gap-s)",
    backgroundColor: "var(--color-3)",
    border: "none",
    borderRadius: "var(--gap)",
    color: "var(--color-5)",
    fontWeight: 600,
    textTransform: 'capitalize',
}

function nomeMes(n: number){
    const date = new Date(); // pegando o dia de hoje 
    date.setMonth(date.getMonth() + n); // o primeiro  mes começa com 0 então eu soma mais 1
    return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date); // pego o dia certo conforme minha localização
}

function formatDate(date: Date) {
    const dd = String(date.getDate()).padStart(2, "0"); // coloca o zero qaundo for numeros unicos EX: 1-9
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = String(date.getFullYear());
    return `${yyyy}-${mm}-${dd}`;
  }


function MesBtn({n}: {n: number}) {
    const { setInicio, setFinal} = useData();

    function setMes(n: number){
        const date = new Date();
        date.setMonth(date.getMonth() + n);  

        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1); // pego o primeiro dia do mes 
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0); // pegando o ultimo dia do mes

        setInicio(formatDate(firstDay));
        setFinal(formatDate(lastDay));
    }
  return <button onClick={() => setMes(n)} style={btnStyleSingle}>{nomeMes(n)}</button>;
}

export default MesBtn;
