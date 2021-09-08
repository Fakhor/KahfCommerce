import React from "react";
import "./App.css";
import Itemcard from "./Itemcard";
import data from "./exdata";

const Home = () => {
  return (
    <>
      <section className="main-card py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            )
          })}
        </div>
      </section>
    </>
  );
};
export default Home;
