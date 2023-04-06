import React, { useState } from 'react';
import './As2.css';
import WishListItem from './WishList';

const WishList = () => {
  const [list, setList] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemPriority, setItemPriority] = useState('medium');

  const handleAddItem = () => {
    if (itemName) {
      const newItem = { name: itemName, priority: itemPriority };
      setList([...list, newItem]);
      setItemName('');
      setItemPriority('medium');
    }
  };

  const handleRemoveItem = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleUpdatePriority = (index, newPriority) => {
    const newList = [...list];
    newList[index].priority = newPriority;
    setList(newList);
  };

  const handleMoveToTop = (index) => {
    const newList = [...list];
    const itemToMove = newList.splice(index, 1)[0];
    newList.unshift(itemToMove);
    setList(newList);
  };

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setItemPriority(e.target.value);
  };

  return (
    <div className="mydiv">
      <h1 className="h" >This is My Wish List</h1>
      <div>
        <input className="text" type="text" value={itemName} onChange={handleNameChange} placeholder="Item name" />
        <label  className="mylabel"><b>Choose priority:</b></label>
        <select className="select" value={itemPriority} onChange={handlePriorityChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button className="b" onClick={handleAddItem}>Add Item</button>
      </div>
      <div>
        {list.map((item, index) => (
          <WishListItem
            key={index}
            item={item}
            index={index}
            onRemoveItem={handleRemoveItem}
            onUpdatePriority={handleUpdatePriority}
            onMoveToTop={handleMoveToTop}
          />
        ))}
      </div>
    </div>
  );
};

export default WishList;