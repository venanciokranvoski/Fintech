import React from "react";

function useFetchGhaphic<T>(url: RequestInfo | URL) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // function of request API
  async function GetlistAPI() {
    try {
      setLoading(true);
      const requestAPI = await fetch(url);
      if (!requestAPI.ok) throw new Error(`Error ${requestAPI.status}`);
      const response = (await requestAPI.json()) as T;
      setData(response);
      console.log(response);
      
    } catch (error) {
      if (error && error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    GetlistAPI();
  }, [url]);

  return { data, loading, error };
}

export default useFetchGhaphic;
