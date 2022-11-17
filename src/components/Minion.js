import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedMinion } from "../store/selectedMinion";

//get a minion 
const getAMinion = async (id)=>{
  try{
      const response = await fetch(`http://localhost:4001/minions/${id}`);
      if(response.ok){
          const minion = await response.json();
          return minion
      }else{
          console.log('request to get a minion failed');
      }
  }catch(err){
      console.log(err);
  }
};

export default function Minion() {
  const {minionId} = useParams();
  const selectedMinion = useSelector((state)=>({...state.selectedMinion}));
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('useEffect/load a minion with id: ' + minionId);
    getAMinion(minionId)
      .then((minion)=>{dispatch(setSelectedMinion(minion))});
  },[]);

  return (
    <div className="Minion">
      <p>{selectedMinion? selectedMinion.id : "loading"} </p>
      <p>{selectedMinion? selectedMinion.name : "loading"} </p>
      <p>{selectedMinion? selectedMinion.title : "loading"} </p>
      <p>{selectedMinion? selectedMinion.weaknesses : "loading"} </p>
      <p>{selectedMinion? selectedMinion.salary : "loading"} </p>

    </div>
  );
}

