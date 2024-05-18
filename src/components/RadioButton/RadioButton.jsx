import "./RadioButton.css";

export default function RadioButton(props) {
  const { radioChoice ,radioType,handleChoice} = props;

  return (
    <>
      <div className="RadioButton-Component">
        <label htmlFor={radioChoice}>{radioChoice}</label>
        <input  type="radio" name={radioType} id={radioChoice} value={radioChoice} onChange={handleChoice} />
      </div>
    </>
  );
}
