import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { SaleForCustomer } from "../../Context/DataContext";



type SaleForDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

  // function for transformation and manipulation of date coming from API
  function transformData(data: SaleForCustomer[]): SaleForDay[] {    
    // colocando o tipo do reduce para dizer ao types... o que ele esta pegando 
    const dias = data.reduce((acc: {[key: string]: SaleForDay}, item) => {

      
      const dia = item.data.split(" ")[0]; /// pega o primeiro item da array e limpa
      console.log('d', dia);
      
      if (!acc[dia]) {
        acc[dia] = {
          data: dia,
          pago: 0,
          processando: 0,
          falha: 0,
        };
      }
      acc[dia][item.status] += item.preco;
      console.log(acc);
      
      return acc;
    }, {});
    console.log('valores', Object.values(dias));
    return Object.values(dias);
  }


function Graphic({ data }: { data: SaleForCustomer[] }) { 
  const transformedData =  transformData(data);


  
  return (
    <div>
      <ResponsiveContainer width="99%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={transformedData}
          syncId={'data'}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="data"/>
          <YAxis />
          <Tooltip label={'teste'} />
          <Area type="monotone" dataKey="pago" stroke="#2BCBBD" fill="#135953" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Graphic;
