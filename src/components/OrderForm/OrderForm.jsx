import { Breadcrumbs } from "@mui/material";
import OrderFormSelectionField from "../OrderFormSelections/OrderFormSelectionField";
import "./OrderForm.css";
import BasicBreadcrumbs from "../BreadCrumbs/BreadCrumbs";




export default function OrderForm(props) {
  const {product,gettingOrder} = props;

  return (
    <>
    {/* Bu sectionda ürün ismi , açıklaması,fiyatı , puanı ve yorumu fakedata'dan alınmaktadır
    PArent ilgili ürünü props olarak gönderir */}
      
      <article className="Product-Informations">
        <img style={{width:'720px'}} src="../../../Assets/mile2-aseets/pictures/form-banner.png" alt="" />
        <div className="OrderBody">
        <BasicBreadcrumbs/>
          <h1 className="">{product.name}</h1>

          <div className="Product-Stars-Price-Comment">
            <p className="Product-Price">
              {product.price} <span>&#8378;</span>
            </p>
            <div className="Product-Stars-Comment">
              <p className="Product-Stars">{product.star}</p>
              <p className="Product-Comment">
                <span>({product.commentNumber})</span>
              </p>
            </div>
          </div>

          <p className="Product-Details">{product.title}</p>
          </div>
        </article>
      <section className="OrderBody">
       
      

        {/* Sipariş formuj bir component olarak ilgili product seçimiyle gerçekleşir
        Props OrderPage yani parent'tan gelir */}

        <section className="Order-Form">
          <h1 className=""></h1>

          <OrderFormSelectionField 
          product={product}
          gettingOrder={gettingOrder}
          />
        </section>

        <section className="Order-Summary"></section>
      </section>
    </>
  );
}
