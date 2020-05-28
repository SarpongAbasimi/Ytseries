import React, { useState, ChangeEvent, FormEvent  } from'react';
import { Card } from '../Card/Card';
import  { Form }  from '../Form/Form';


export const TodoPage : React.FunctionComponent = () => {
  const [initialTodo, setIntialTodo ] = useState('');
  const [todos, setTodos] = useState<string[]>([])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setIntialTodo(e.currentTarget.value);
  };

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setTodos(todos.concat(initialTodo))
    setIntialTodo('')
  }

  return <div>
    <Form initialTodoValue={initialTodo} onHandleChange={handleInputChange} onSubmit={handleFormSubmit} />
    <Card listOfTodos={todos}/>
  </div>
};