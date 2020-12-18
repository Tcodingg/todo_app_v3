import React from 'react';
import './index.css';

export default function Todo() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='head-wrapper'>
          <div className='logo'>
            <h1>todo app</h1>
          </div>
          <div className='input-wrapper'>
            <input type='text' />
            <button>add</button>
          </div>
        </div>

        <div className='todo-list'>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
          <li>first todo</li>
        </div>
      </div>
    </div>
  );
}
