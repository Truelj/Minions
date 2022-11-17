import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { setMinions } from "../store/minions";


async function loadData(){
  try{
      const response = await fetch('http://localhost:4001/minions');
      const minions = await response.json();
      return minions;
  }catch(err){
      console.log(err);
  }
}

export default function AllMinions() {
  const minions = useSelector((state)=>([...state.minions]));
  const dispatch = useDispatch();

  useEffect(()=>{
    //to load all minions
    console.log('useEffect/load all minions...');
    loadData().then((minions)=>{dispatch(setMinions(minions))});
  }, []);


  return (
    <div className="AllMinions">
      <h1>all minions</h1>
      {minions.map((minion)=>{
        return <Link to={`/minions/${minion.id}`} key={minion.id}> {minion.name}</Link>
      })}
    </div>
  );
}


