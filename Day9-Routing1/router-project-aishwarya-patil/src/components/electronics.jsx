import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export const Electronics = ()=>{
    const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      let res = await fetch("http://localhost:8080/electronics");
      let data = await res.json();
      setData(data);
    }
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Electronics</h1>

      <div>
        {data.map((e) => {
          return (<Link to={`/electronics/${e.id}`} className="products">
          <h2 className="name">{e.name}</h2>
          <img src={e.image} alt="" className="productImg"/>
          </Link>
          )
        })}
      </div>
    </div>
  );
}