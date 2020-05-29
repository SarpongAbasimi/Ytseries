import React, { useState,FormEvent, ChangeEvent }  from'react';
import { Card } from '../Card/Card';
import  { Form }  from '../Form/Form';


export const TodoPage : React.FunctionComponent = () => {
  const [initialTodo, setInitialTodo] = useState('');
  const [todos, setToDos] = useState<string[]>([])

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInitialTodo(e.currentTarget.value)
  };

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setToDos(todos.concat(initialTodo));
    setInitialTodo('');
  };

  return <div>
    <Form initialTodoValue={initialTodo} onHandleChange={handleInputChange} onSubmit={ handleFormSubmit }/>
    <Card listOfToDos={todos}/>
  </div>
}