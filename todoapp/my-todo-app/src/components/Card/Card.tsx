import React from 'react';
import { useTransition, animated } from 'react-spring';
import style from './Card.module.scss';
type CardProps = {
  listOfToDos: string[]
};

export const Card: React.FunctionComponent<CardProps> = ({ listOfToDos })=> {
  const todoTransition = useTransition(listOfToDos, null, {
    from: {opacity:0, marginLeft: -100, marginRight: 100, transform: 'translate(0%)'},
    enter: {opacity: 1, marginLeft: 0, marginRight: 0, transform: 'translate(30%)'}
  })

return(
  <>
   {todoTransition.map(({item, key, props}) => {
     return <animated.li style={props} className={style.list}>{item}</animated.li>
   })}
  </>
 )
}