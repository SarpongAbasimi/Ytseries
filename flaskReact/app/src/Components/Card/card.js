import React from 'react';
import { Link } from "react-router-dom";

export const Card = ({ listOfTodos }) => {
  return (
  <div>
    {
    listOfTodos.length > 0 && listOfTodos.map(
      todo => 
      <ul key={todo.id}>
        <li>
          <Link to={`show/${todo.id}`}>{todo.content}</Link>
        </li>
      </ul>
      )
    }
  </div>)
}