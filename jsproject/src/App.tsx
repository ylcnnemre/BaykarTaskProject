import React, { useEffect, useState } from "react";

const App = () => {
  const [result, setResult] = useState<Array<{ name: string; count: number }>>(
    []
  );

  const cities: string[] = [
    "istanbul",
    "ankara",
    "izmir",
    "istanbul",
    "ankara",
  ];

  useEffect(() => {
    /* cities.forEach(item =>{

         let data=result.map<{name:string,count:number}>((el,index) => {

              
              if(el.name===item)
              {
                 return {
                   name : item,
                   count : el.count  + 1
                 }

              }
              else{
                 return {
                  name : item,
                  count : 1
                 }
              }

          } )

          setResult([...data])
     }) */

    let data = [...result];

    cities.map((el) => {
      let index = data.findIndex((item) => item.name === el);

      if (index === -1) {
        data.push({
          name: el,
          count: 1,
        });
      } else {
        data[index] = {
          count: data[index].count + 1,
          name: el,
        };
      }
    });

    setResult(data);
  }, []);

  return (
    <div>
      {result.map((item) => (
        <>
          <p> {item.name} </p>
          <p>{item.count}</p>
        </>
      ))}
    </div>
  );
};

export default App;
