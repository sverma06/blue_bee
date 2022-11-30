import React, { useState, useEffect} from "react";

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = 'http://localhost:3000/products';

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.list);
            setList(json.list);
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData();

  }, []);

  return (
    <>
      <label>Product Entered</label>
      <ul>
        {list?.map((item) => (
          <li key={item.item}>{item.item}</li>
        ))}
      </ul>
    </>
  );
};

export default Products;
