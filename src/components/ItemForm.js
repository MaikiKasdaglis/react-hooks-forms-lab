import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  const [formData, setFormData] = useState({
    id: uuid(),
    name: "",
    category: "Produce",
  });

  function updateFormData(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value,
    })
  }


  // console.log(`thisOneCounts`, formData);
  
  return (
    <form className="NewItem" onSubmit={e => {
      e.preventDefault() 
      onItemFormSubmit(formData)
    }}>
      <label>
        Name:
        <input type="text" name="name" onChange={updateFormData}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={updateFormData}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
