import React from 'react';
import { useQuery, gql } from '@apollo/client';

const FRUIT_DATA = gql`
  query fruitsQuery {
    fruits {
      id,
      fruit
    }
  }
`
export const Fruit = () => {

  const { loading, error, data } = useQuery(FRUIT_DATA);

  if (loading) return <p>Loading...🚀</p>;
  if (error)   return <p>Error 😅</p>;

  data.fruits.map(eachElementInData => console.log(eachElementInData.id))

  return(
  <div>
    <h1>Fruits</h1>
    {data.fruits.length > 0 && data.fruits.map(({id,fruit}) => {
      return(
        <div key={id}>
          <p>{fruit}</p>
        </div>
      )
    })}
  </div>
  );
};