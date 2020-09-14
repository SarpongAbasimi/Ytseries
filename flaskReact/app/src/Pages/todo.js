import React,{useState, useEffect} from 'react';
import { Card } from '../Components/Card/card'
import { Form } from '../Components/Form/form'
import {useTrail, animated} from 'react-spring'

export const TodoPage = () => {

  const [todo, setTodo] = useState([])
  const [addtodo, setAddTodo] = useState('')

  useEffect(()=>{
    fetch('api/').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setTodo(data))
  },[])

  const getLatestTodos = () => {
    fetch('api/').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setTodo(data))
  }
  
  const handleFormSubmit = ()=> {
    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content: addtodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => response.json())
      .then(message => {
        setAddTodo('')
        getLatestTodos()
        console.log([...todo, {
          content:addtodo,
          id: todo.length
        }])
        console.log(message)
      })
  }

  const handleFormChange = (inputValue)=> {
    setAddTodo(inputValue)
  }
  
  return(
    <>
      <Form userInput={addtodo} onFormsumbit={handleFormSubmit} onFormChange={handleFormChange}/>
      <Card listOfTodos={todo}/>
    </>
  )
}