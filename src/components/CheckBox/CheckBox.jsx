
import './CheckBox.css'

export default function CheckBox(props){
              const {selection,handleChoice,isChecked} = props


return(<>


<div className="Form-CheckBox-EachOne">
<input type="checkbox" name={selection} id={selection} onChange={handleChoice}    />
<span className="custom-checkbox"></span>
<label htmlFor={selection}>{selection} </label>
</div>
</>)

}