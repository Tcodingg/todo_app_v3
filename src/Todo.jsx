import React, { useState } from 'react';
import './index.css';

export default function Todo() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const inputValues = event.target.value;
    setItem(inputValues);
  }

  function addBtn(event) {
    event.preventDefault();
    setItemList((preValue) => [...preValue, item]);
    setItem('');
  }
  function handleDelete(index) {
    setItemList(itemList.filter((todoItems, i) => i !== index));
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='head-wrapper'>
          <div className='logo'>
            <h1>todo app</h1>
          </div>
          <div className='input-wrapper'>
            <input value={item} onChange={handleChange} type='text' />
            <button onClick={addBtn}>add</button>
          </div>
        </div>
        <div className='todo-list'>
          {itemList
            .map((todos, index) => {
              return (
                <li
                  onClick={() => {
                    handleDelete(index);
                  }}
                  key={index}
                  id={index}
                >
                  {todos}
                </li>
              );
            })
            .reverse()}
        </div>
      </div>
    </div>
  );
}
