import React from 'react';
import {useEffect, useState} from 'react';

export const Hello = ()=> {
  const [initialState, setIntialState] = useState([])

  useEffect(()=>{
    fetch('/api/').then(res => {
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setIntialState(jsonResponse.hello))
  },[])

  return(<div>
    {initialState.length > 0 && initialState.map((e,i) => <li key={i}>{e}</li>)}
  </div>
  )
}