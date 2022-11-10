import { useEffect, useState } from "react";

const useGetAllCountries = () => {
  const [countries, setCountries] = useState<Array<any>>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log("data =>",data)
        setCountries(data);
        setLoading(false);
      });
  }, []);

  return {
    countries,
    loading,
  };
};

export default useGetAllCountries;
