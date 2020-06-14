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

  useEffect(()=> {
    fetch('/api').then(res => {
      return res.json()
    }).then(response =>console.log(response))
  })
  return(<Card/>)
}