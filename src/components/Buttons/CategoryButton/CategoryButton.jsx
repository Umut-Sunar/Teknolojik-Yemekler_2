import { useEffect,useState } from "react";

import './CategoryButton.css'


export default function CategoryButton(props) {
  const { imgUrl, navOnClickAction, buttonName,activeCategory } = props;
  const [isActive, setIsActive] = useState(false);

  function activeAction() {
    navOnClickAction(buttonName);
  }

  useEffect(() => {
   
    if (activeCategory === buttonName) {
      
      setIsActive(true)
    }else {

      setIsActive(false)

    }
  }, [activeCategory]);

  const activeStyle = {

backgroundColor: isActive ?  '#292929' : 'transparent',
color: isActive? 'white': 'Black'

  }

  return (
    <>
      <a style={activeStyle} className="CategoryBtn"  onClick={activeAction}>
      <img src={imgUrl} alt={buttonName} className="CategoryImg" />
        <p className="CategoryName">{buttonName}</p>
      </a>
    </>
  );
}
