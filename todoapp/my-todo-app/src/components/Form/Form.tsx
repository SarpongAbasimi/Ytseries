import React, {ChangeEvent, FormEvent} from 'react';

type FromProp ={
  initialTodoValue: string,
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: FormEvent) => void
};

export const Form: React.FunctionComponent<FromProp> = ({ initialTodoValue,  onHandleChange, onSubmit }) => {
  return(
    <form onSubmit={onSubmit}>
      <input type='text' placeholder='Enter todo' value={initialTodoValue} onChange={onHandleChange}></input>
      <input type='submit' value='submit todo'></input>
    </form>
  )
};