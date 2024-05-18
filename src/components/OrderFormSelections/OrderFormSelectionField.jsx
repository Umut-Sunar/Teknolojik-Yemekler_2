import { useEffect, useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import RadioButton from "../RadioButton/RadioButton";
import SelectBox from "../SelectBox/SelectBox";
import CheckBox from "../CheckBox/CheckBox";

import "./OrderFormSelectionField.css";
import "react-toastify/dist/ReactToastify.css";

const initialSelections = {
  productName: "",
  additionals: [],
  orderNote: "",
  customerName: "",
  secimlerTutar: null,
  toplamTutar: null,
};

const errorQuetos = {
  size: "Tercih ettiğiniz boyutu işaretleyiniz",
  dough: "Tercih ettiğimiz hamur tipini seçiniz",
  additionals: "Minimum 4 maksimum 10 adet malzeme seçebilirsiniz",
  customerName: "İsmini en az 3 harften oluşmalıdır.",
};

const errors = {
  size: null,
  dough: null,
  additionals: null,
  customerName: null,
};

export default function OrderFormSelectionField(props) {
  const { product, gettingOrder } = props;
  const [form, setForm] = useState(initialSelections);
  const [selectedBox, setSelectedBox] = useState(null);
  const [orderquantity, setOrderQuantity] = useState(1);
  const [addPrice, setAddPrice] = useState(null);
  const [errorStates, setErrorStates] = useState(errors);
  const [checkedList, setCheckedList] = useState([]);
  const [isFormValid, setIsFormValid] = useState(null);
  const [isSubmitDiasble, setIsSubmitDisable] = useState(false);
  const [errorWarns, setErrorWarns] = useState(errorQuetos);

  const navigate = useNavigate();

  useEffect(() => {
    window.scroll({
      top: 0,
    });
  }, []);

  useEffect(() => {
    setForm({ ...form, productName: product.productType });
  }, []);

  useEffect(() => {
    checkedList.length === 0
      ? setAddPrice(0)
      : setAddPrice(product.addtionalsPrice * checkedList.length);
    checkedList.length > 3
      ? setForm({ ...form, additionals: checkedList })
      : null;
    checkedList.length > 3
      ? setErrorStates({ ...errorStates, additionals: false })
      : setErrorStates({ ...errorStates, additionals: true });
  }, [checkedList]);

  useEffect(() => {
    setForm({
      ...form,
      secimlerTutar: addPrice,
      toplamTutar: orderquantity * product.price + addPrice,
    });
  }, [addPrice, orderquantity]);

  useEffect(() => {
    const { size, dough, additionals, customerName } = errorStates;
    if (
      size === null ||
      dough === null ||
      additionals === null ||
      customerName === null
    ) {
      setIsFormValid(false);
    } else if (
      size === false &&
      dough === false &&
      additionals === false &&
      customerName === false
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [errorStates]);

  useEffect(() => {
    if (form.customerName.length < 3) {
      setErrorStates({ ...errorStates, customerName: true });
    } else {
      setErrorStates({ ...errorStates, customerName: false });
    }
  }, [form]);

  // Toastify fonksiyonun
  const notify = (text) => {
    toast.error(`${text}`, {
      position: "top-right",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  // Tüm seçimleri handleChoice ta kontrol ediyorum ve ilgili form datasını eğer error false ise günceeliyorum
  function handleChoice(event) {
    const { name, type, value, checked: isChecked } = event.target;

    // Select box alanı
    if (type === "select-one") {
      setSelectedBox(event.target.value);
      setForm({ ...form, [name]: value });
      setErrorStates({ ...errorStates, dough: false });
    }

    // Radio alanı
    else if (type === "radio") {
      setForm({ ...form, [name]: value });
      setErrorStates({ ...errorStates, size: false });
    }

    // Müşteri ismi alanı
    else if (name === "customerName") {
      setForm({ ...form, customerName: value });
    }

    //Sipariş notu alanı
    else if (name === "OrderNote") {
      setForm({ ...form, orderNote: value });
    }
    //CheckBox Alanı
    else if (type === "checkbox") {
      if (isChecked) {
        //true ise
        setCheckedList([...checkedList, name]);
      } else {
        setCheckedList(checkedList.filter((item) => item !== name));
      }
    }
  }

  function quantityDown() {
    if (orderquantity === 1) {
      return;
    } else {
      setOrderQuantity(orderquantity - 1);
    }
  }
  function quantityUp() {
    setOrderQuantity(orderquantity + 1);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(isFormValid);
    if (isFormValid) {
      console.log("Axios adımı");
      axios
        .post(" https://reqres.in/api/pizza", form)
        .then((res) => {
          toast.success("Siparişini aldık!", {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });

          setIsSubmitDisable(true);
          setTimeout(() => {
            navigate("/Success");
            gettingOrder(res.data);
          }, 2000);

          console.log(res.data);
        })
        .catch((err) => console.log("Form Gönderim Esnasında hata ", err));
    } else {
      for (let each in errorStates) {
        if (errorStates[each] === true || errorStates[each] === null) {
          notify(errorWarns[each]);
        }
      }
    }
  }

  return (
    <>
      <ToastContainer />
      <form className="Form-Area" onSubmit={handleSubmit}>
        {/* Burası dinamik  yapıldı, Boyut ve Hamur Seçimi, Datadan besleiyor, Örneğin hamburgerse
buraya fakeData'dan pişme derecesi gibi şeyler verilebilinir */}

        <section className="Form-Radio-SelectBox">
          <section className="Form-Radio-Choices">
            <p className="Form-Title">
              {" "}
              {Object.keys(product.selections)[0]} Seç{" "}
              <span style={{ color: "red" }}>*</span>
            </p>
            <div className="Radio-Button-Area">
              {product &&
                product.selections["Boyut"].map((selection, id) => {
                  return (
                    <RadioButton
                      key={id}
                      radioChoice={selection}
                      radioType={Object.keys(product.selections)[0]}
                      handleChoice={handleChoice}
                    />
                  );
                })}
            </div>
          </section>

          {/* Burası dinamik  yapıldı, Boyut ve Hamur Seçimi, Datadan besleiyor, Örneğin hamburgerse
                      buraya fakeData'dan pişme derecesi gibi şeyler verilebilinir */}
          <section className="Form-SelectBox">
            <p className="Form-Title">
              {Object.keys(product.selections)[1]} Seç
              <span style={{ color: "red" }}>*</span>
            </p>
            <select
              name={Object.keys(product.selections)[1]}
              onChange={handleChoice}
              value={selectedBox || "Hamur Kalınlığı"}
              className="Form-Selection-Area"
              required
            >
              <option value="Hamur Kalınlığı" disabled>
                Hamur Kalınlığı
              </option>
              {product &&
                product.selections["Hamur"].map((selection, id) => {
                  return <SelectBox key={id} option={selection} />;
                })}
            </select>
          </section>
        </section>
        {/* Checkbox alanı , checkbox compopnentine props olarak iletiliyor */}

        <section className="Form-CheckBox-Area">
          <p className="Form-Title">{Object.keys(product.selections)[2]}</p>
          <p className="Form-Checkbox-Warn">
            En az 4 en fazla 10 malzeme seçebilirsiniz. 5<span>&#8378;</span>{" "}
          </p>
          <div className="Form-CheckBox-SelectionArea">
            {product &&
              product.selections["Ek Malzemeler"].map((selection, id) => {
                return (
                  <CheckBox
                    selection={selection}
                    key={id}
                    handleChoice={handleChoice}
                  />
                );
              })}
          </div>
        </section>

        {/* İsim soyisim alanı */}
        <section className="Form-Name-Area">
          <label htmlFor="name" className="Form-Title">
            İsim Soyisim
          </label>
          <input
            type="text"
            name="customerName"
            id="name"
            className="Form-Name-TextArea"
            placeholder={"İsim Soyisim giriniz "}
            value={form.customerName}
            onChange={handleChoice}
          />
        </section>

        {/* Sipariş Notu  */}
        <section className="Form-Note">
          <label htmlFor="OrderNote" className="Form-Title">
            Sipariş Notu
          </label>
          <input
            type="text"
            name="OrderNote"
            id="OrderNote"
            className="Form-Note-TextArea"
            placeholder={product.orderFormNotePlaceHolder}
            value={form.orderNote}
            onChange={handleChoice}
          />
        </section>

        <hr className="divider" />

        {/* Adet ve Fiyat toplamının gösterildiği alan */}
        <div className="Form-Summary-Area">
          {/* Kaç adet eklendiği bilgisi  */}
          <div className="Product-Order-Quantity">
            <button
              type="button"
              className="QuantityBtn-Left"
              onClick={quantityDown}
            >
              -
            </button>
            <p className="QuantityNumber">{orderquantity}</p>
            <button
              type="button"
              className="QuantityBtn-Right"
              onClick={quantityUp}
            >
              +
            </button>
          </div>

          {/* Sipariş tutarının gösterildi alan */}
          <div className="Form-TotalPrice">
            <div className="Order-Summary-Wrapper">
              <p className="Order-Title">Sipariş Toplamı</p>
              <div className="Order-Summary-Details">
                <div className="Order-Choices-Area">
                  <p>Seçimler</p>
                  <p>{addPrice}₺</p>
                </div>
                <div className="Order-Summary-Total">
                  <p>Toplam</p>
                  <p>
                    {checkedList.length > 0
                      ? orderquantity * product.price + addPrice
                      : orderquantity * product.price}
                    ₺
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitDiasble}
              className="Order-Sent-Btn"
            >
              {" "}
              SİPARİŞ VER
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
