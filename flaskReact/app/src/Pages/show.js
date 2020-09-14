import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Card/card';
import { useParams, Link } from 'react-router-dom';
import { Delete } from "../Components/Delete/delete";
import { Edit } from "../Components/Edit/edit";

export const Show = ()=> {
  const { id } = useParams()
  const [todo, setTodo] = useState([])

  useEffect(() => {
    fetch(`/api/${id}`,{
      method: 'GET'
    }).then(response => response.json())
      .then(data => setTodo(data))
  }, [id])

  return(
    <div>
      {todo.length > 0 && todo.map(data => <div key={id}>{data.content}</div>)}
      < Delete id={id}/> <Edit />
      <hr></hr>
      <Link to='/'>
        Back to todos
      </Link>
    </div>
  )
}