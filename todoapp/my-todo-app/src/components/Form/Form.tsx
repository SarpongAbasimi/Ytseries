import React, {ChangeEvent, FormEvent} from 'react';
import {useSpring, animated} from 'react-spring';

type FromProp ={
  initialTodoValue: string,
  onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  onSubmit: (e: FormEvent) => void
};

export const Form: React.FunctionComponent<FromProp> = ({ initialTodoValue,  onHandleChange, onSubmit }) => {
  const formAnimation = useSpring({
    transform: 'translateX(30%)',
    from: {
      transform: 'translateX(-1%)'
    }
  })

  return(
    <animated.form onSubmit={onSubmit} style={formAnimation }>
      <input type='text' placeholder='Enter todo' value={initialTodoValue} onChange={onHandleChange}></input>
      <input type='submit' value='submit todo'></input>
    </animated.form>
  )
};