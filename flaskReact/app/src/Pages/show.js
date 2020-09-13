import React, { useEffect, useState } from 'react';
import { Card } from '../Components/Card/card';
import { useParams, Link } from 'react-router-dom'

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
      <Link to='/'>
        Back to todos
      </Link>
    </div>
  )
}