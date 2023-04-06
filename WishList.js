import React from 'react';

const WishListItem = ({ item, index, onRemoveItem, onUpdatePriority, onMoveToTop }) => {
  const handleRemoveClick = () => {
    onRemoveItem(index);
  };

  const handlePriorityChange = (e) => {
    onUpdatePriority(index, e.target.value);
  };

  const handleMoveToTopClick = () => {
    onMoveToTop(index);
  };

  return (
    <div>
      <p><b>{item.name}</b></p>
      <label  className="mylabel"><b>Update Priority: </b></label>
      <select value={item.priority} onChange={handlePriorityChange}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={handleRemoveClick}>Remove</button>
      <button onClick={handleMoveToTopClick}>Move to Top</button>
    </div>
  );
};

export default WishListItem;