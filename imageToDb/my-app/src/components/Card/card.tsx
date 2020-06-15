import React from 'react';

type CardProps = {
  food: {
    id: number,
    name: string,
    image: string,
    Ingredients: string[]
  }[]
}


export const Card: React.FunctionComponent<CardProps> = ({ food })=> {
  return(
    <div>
      { food.length >  0 && food.map( data => {
        return(
          <div key={data.id}>
            <p>{data.name}</p>
            <img src={data.image} alt="pictures"></img>
            <ul>
              {data.Ingredients.map(ingredients => <li>{ingredients }</li>)}
            </ul>
          </div>
        )
      })}
    </div>
  )
}