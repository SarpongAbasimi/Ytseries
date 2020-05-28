import React from 'react';


type CardProps = {
  listOfTodos: string[]
}

export const Card: React.FunctionComponent<CardProps> = ({ listOfTodos })=> {
return <div>{listOfTodos.map((eachTodo,index) => <ul><li key={index}>{eachTodo}</li></ul>)}</div>
}