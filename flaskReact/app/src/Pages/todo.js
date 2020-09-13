import React,{useState, useEffect} from 'react';
import { Card } from '../Components/Card/card'
import { Form } from '../Components/Form/form'

export const TodoPage = () => {
  const [todo, setTodo] = useState([])
  const [addtodo, setAddTodo] = useState('')
  // check what the user has input

  useEffect(()=>{
    fetch('api/').then(response => {
      if(response.ok){
        return response.json()
      }
    }).then(data => setTodo(data))
  },[])

  // useEffect(()=> {
  //   fetch('/api/create', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       content: addtodo,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     }
  //   })
  // }, [addtodo])
  
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