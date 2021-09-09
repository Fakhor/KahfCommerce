import React from "react";
import './CartShop.css';
import img1 from '../../components/Pages/img/img1.jpg';
import img2 from '../../components/Pages/img/img2.jpg';

export const CartShop = () => {
    return (
        <>
            <section className="main-card container">
                <div className="justify-content-center">
                    <h1 className="title">Shopping Cart</h1>
                </div>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-8 mt-3">
                            <div class="card">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img class="img" src={img1} alt="Card image cap" />
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">KAHF DAILY PROTECTION - ENERGIZING SERIES</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <img class="img" src={img2} alt="Card image cap" />
                                    </div>
                                    <div class="card-body">
                                        <p class="card-text">ENERGIZING PACK FACEWASH, BODY WASH, AND DEODORANT</p>
                                    </div>
                                </div>
                            </div>
                            <span className='link-shop'>
                                <a href='/'>Go Back Shopping</a>
                            </span>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

