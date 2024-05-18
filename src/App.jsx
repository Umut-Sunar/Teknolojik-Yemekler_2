import { Routes, Route,Navigate,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import MainPage from "./pages/MainPage/MainPage";
import OrderPage from "./pages/OrderPage/OrderPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import menuData from "./assets/fakeData";



function App() {

const [menuDatas,setMenuDatas] = useState(menuData);
const [finalOrderData,setFinalOrderData] =useState({});
const [product,setProduct] = useState(menuData[0]);


function gettingOrder(obj){

  setFinalOrderData(obj)
  
}

function selectedProduct(productName) {

setProduct(  () => {

const selectedProduct=  menuDatas.find( (each) => each.name===productName )
return selectedProduct


}  )

}



  return (
    <>
      {/* Burada 3 tane sayfa ve routingler olacak */}

      <Routes>

        <Route path="/" element={<Navigate replace to="/Anasayfa" /> } />
        <Route path="/Anasayfa" element={<MainPage menuDatas={menuData} selectedProduct={selectedProduct} />} />
        <Route path="/Siparis-Olustur" element={<OrderPage gettingOrder={gettingOrder} product={product} />} />
        <Route path="/Success" element={<SuccessPage finalOrderData={finalOrderData} />} />
        <Route path="*" element={<ErrorPage />} />

      </Routes>
    </>
  );
}

export default App;
