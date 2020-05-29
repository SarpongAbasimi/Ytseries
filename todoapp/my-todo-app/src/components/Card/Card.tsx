import React from 'react';


type CardProps = {
  listOfToDos: string[]
};

export const Card: React.FunctionComponent<CardProps> = ({ listOfToDos })=> {
return <div>{listOfToDos.map((eachTodo, index)=> <ul><li key={index}>{eachTodo}</li></ul>)}</div>
}