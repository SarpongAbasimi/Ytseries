import React from 'react';
import { useTransition, animated} from 'react-spring'
import { Link } from "react-router-dom";

export const Card = ({ listOfTodos }) => {

  const transition = useTransition(listOfTodos, listOfTodos => listOfTodos.id, {
    from:{
      opacity: 1,
      width: '4%',
      marginLeft: -100,
      marginRight: 100
    },
    enter: {
      opacaity:0,
      width: '100%',
      padding:'5px 0',
      marginLeft: 0,
      marginRight:0
    }
  })
  
  return transition.map(({ item, key, props })=> (
    <animated.ul key={item.id} style={props}>
      <li>
        <Link to={`${item.id}`}>{item.content}</Link>
       </li>
    </animated.ul>
  ))
  
}