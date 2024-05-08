import React, { useEffect, useState } from "react";
import ḌisplayProducts from "./ḌisplayProducts"

const GetProducts = () => {
  const [productlist, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function FetchData() {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      setProductList(data.products);
    //   console.log(productlist);
    }

    FetchData();
  }, []);

  return (
    <section className="py-11">
      <article className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-3xl text-center">Products List</h1>

        <form>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="border-2 py-1 px-2"
            placeholder="Search ...."
          />
        </form>

        <ḌisplayProducts productlist={productlist} search={search}/>
            
       
      </article>
    </section>
  );
};

export default GetProducts;
