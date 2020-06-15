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
  console.log(food)
  return(
    <div>
      { food.length > 0 && food.map(data => {
        return(
          <div key={data.id}>
            <p>{data.name}</p>
              {data.Ingredients.map(ig => <li>{ig}</li>)}
          </div>
        )
      })}
    </div>
  )
}