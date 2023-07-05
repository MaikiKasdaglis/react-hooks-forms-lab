import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName, setSearchName] = useState('');
  const [preFilterItems, setPreFilterItems] = useState([...items]);

  function onItemFormSubmit(formData) {
    const updatedItems = [...preFilterItems, formData];
    setPreFilterItems(updatedItems);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setSearchName(e.target.value);
  }

  let itemsToDisplay = preFilterItems
    .filter((item) => item.name.includes(searchName))
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
