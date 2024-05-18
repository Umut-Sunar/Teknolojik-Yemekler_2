import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "./MainPage.css";
import CategoryButton from "../../components/Buttons/CategoryButton/CategoryButton";
import CTAButton from "../../components/Buttons/CTA_Button/CTAButton";
import ProductItemCard from "../../components/ProductItemCard/ProductItemCard";
import Footer from "../Footer/Footer";

import { categories } from "../../assets/fakeData";

function MainPage(props) {
  const { menuDatas,selectedProduct } = props;
  const navigation = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Pizza");

  function routeToOrder() {
    navigation("/Siparis-Olustur");
  }

  function productSelection(name) {
    selectedProduct(name)
    navigation("/Siparis-Olustur");
  }

  function navOnClickAction(categoryName) 
{
  setActiveCategory(categoryName)
  // scroollHeight body'nin en altına in demekmiş 
  window.scroll({
    top: document.body.scrollHeight,
    behavior: 'smooth' 
});
    
  }

  return (
    <>
      <header className="Header-Wrapper">
        <section className="Hero-Section">
          <img
            src="../../../Assets/mile1-assets/home-banner.png"
            alt="BackgroundPizza"
            className="Hero-Section-Background"
          />
          <header className="Hero-Section-Header">
            <h1 className="Hero-Section-BrandName">Teknolojik Yemekler</h1>
            <p className="Hero-Section-CallToAction-Title">fırsatı kaçırma</p>
            <h2 className="Hero-Section-Slogan">
              KOD ACIKTIRIR
              <br /> PİZZA,DOYURUR
            </h2>
          </header>
          <button onClick={routeToOrder} className="RouteOrderBtn ">
            ACIKTIM
          </button>
        </section>
        <section className="MenuNavigation-Section">
          <nav className="MenuNavigation">
            {categories &&
              categories.map((category, id) => {
                return (
                  <CategoryButton
                    key={id}
                    imgUrl={`Assets/mile2-aseets/icons/${id + 1}.svg`}
                    isActive={isActive}
                    buttonName={category}
                    navOnClickAction={navOnClickAction}
                    
                    // imgUrl,isActive, onClickAction,buttonName,doSmthnh
                  />
                );
              })}
          </nav>
        </section>
      </header>
      <main className="Main-Content-Wrapper">
        <section className="Campaing-Area">
          <div className="Campaing-Area-Content">
            <div className="Left-Content-Area">
              <div className="Left-Content">
                <div className="Content-Leftİtems">
                  <h2 style={{ color: "white", fontSize: "50px", margin: "0" }}>
                    Özel
                    <br />
                    Lezzetus
                  </h2>
                  <p>Position Absolute Acı Pizza</p>
                  <CTAButton 
                  
                  />
                </div>
                <div className="Content-Rightİtems">
                  <img
                    src="../../../Assets/mile2-aseets/cta/kart-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="Right-Content-Area">
              <div className="Right-Content">
                <div className="Content-Leftİtems">
                  <h2
                    style={{
                      color: "white",
                      fontSize: "24px",
                      marginBottom: "10px",
                    }}
                  >
                    Hackathlon
                    <br /> Burger Menü
                  </h2>
                  <CTAButton />
                </div>
                <div className="Content-Rightİtems">
                  <img
                    src="../../../Assets/mile2-aseets/cta/kart-2.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="Right-Content">
                <div className="Content-Leftİtems">
                  <h2 style={{ fontSize: "18px" }}>
                    <span style={{ color: "red" }}>Çoooooook </span>hızlı
                    <br />
                    npm gibi kurye
                  </h2>
                  <CTAButton />
                </div>
                <div className="Content-Rightİtems">
                  <img
                    src="../../../Assets/mile2-aseets/cta/kart-3.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="Main-Slogan-Area">
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Satisfy,cursive",
              color: "var(--Kırmızı)",
              margin: "0",
            }}
          >
            en çok paketlenen menüler
          </p>
          <h2
            style={{
              fontSize: "48px",
              margin: "0",
              fontFamily: "Quattrocento,cursive",
            }}
          >
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>
        </section>
        <section className="Main-Product-Listing">
          <nav className="MenuNavigation">
            {categories &&
              categories.map((category, id) => {
                return (
                  <CategoryButton
                    key={id}
                    imgUrl={`Assets/mile2-aseets/icons/${id + 1}.svg`}
                    buttonName={category}
                    navOnClickAction={navOnClickAction}
                    activeCategory={activeCategory}
                    // imgUrl,isActive, onClickAction,buttonName,doSmthnh
                  />
                );
              })}
          </nav>
          <section className="Menu-Items-Container">
            {menuDatas
              .filter((each) => each.productType === `${activeCategory}`)
              .map((eachProduct,id) => {
                return (
                  <ProductItemCard
                  key={id}
                    productSelection={productSelection}
                    product={eachProduct}
                  />
                );
              })}
          </section>
        </section>
      </main>

      <Footer productSelection={productSelection} />
    </>
  );
}

export default MainPage;
