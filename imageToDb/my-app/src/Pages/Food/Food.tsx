import React, { useEffect, useState } from  'react';
import { Card } from '../../components/Card/card';

interface FoodApi {
  id: number,
  name: string,
  image: string,
  Ingredients: string[]
}

export const FoodPage: React.FunctionComponent = ()=> {

  const [state, setState] = useState<FoodApi[]>([])
  console.log(state)
  useEffect(()=> {
    fetch('/api').then(res => {
      return res.json()
    }).then(response => setState(response[0].Ghana))
  }, [])
  return(<Card food={state}/>)
}