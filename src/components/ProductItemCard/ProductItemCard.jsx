import "./ProductItemCard.css";

export default function ProductItemCard(props) {
  const { product,productSelection } = props;

  function sendProductSelection() {

productSelection(product.name)

  }

  return (
    <>
      <div onClick={sendProductSelection} className="Product-Item-Wrapper">
        <img
          className="Product-Item-İmage"
          src={product.imgURL}
          alt={product.name}
        />
        <p className="Product-Item-Name">{product.name}</p>
        <div className="Product-Item-Details">
          <p>{product.star}</p>
          <p>{product.commentNumber}</p>
          <p>{product.price}</p>
        </div>
      </div>
    </>
  );
}
