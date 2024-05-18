import { useState } from "react";

import Header from "../../components/Header/Header";
import OrderForm from "../../components/OrderForm/OrderForm";

import './OrderPage.css'
import menuData from "../../assets/fakeData";
import Footer from "../Footer/Footer";

export default function OrderPage(props) {
  // Ürün seçimi için props belirledim. İterasyon 2 için Anasayfadan gelen ürün bilgisi 
  // Burada ilgili props 'a aktarılmalı. 

const {gettingOrder,product}=props
  return (
    <>
 <main className="Order-Main-Wrapper">
        <Header />
        <OrderForm 
        product={product}
        gettingOrder={gettingOrder}

        />
        </main>
        <Footer/>
    </>
  );
}
