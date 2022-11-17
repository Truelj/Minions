import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const [selectedMinion, setSelectedMinion] = useState(null);

  useEffect(()=>{
    console.log('useEffect/load a minion with id: ' + minionId);
    getAMinion(minionId)
      .then((minion)=>{setSelectedMinion(minion)});
  },[]);

  return (
    <div className="Minion">
      <p>{selectedMinion? selectedMinion.id : "loading"} </p>

    </div>
  );
}

