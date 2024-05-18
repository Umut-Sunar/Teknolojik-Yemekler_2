import './SelectBox.css'



export default function SelectBox(props){
              const {option} = props


return(<>
<option value={option} >{option}</option>

</>)

}