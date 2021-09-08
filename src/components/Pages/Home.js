import React from "react";
import "./Home.css";
import Itemcard from "./Itemcard";
import data from "./data";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
import { Fragment } from "react";

export const Home = () => {
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
        <Fragment>
          <CartProvider>
            <Cart />
          </CartProvider>
        </Fragment>
      </section>
    </>
  );
};