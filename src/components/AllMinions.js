import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



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
  const [allMinions, setAllMinions] = useState([]);

  useEffect(()=>{
    //to load all minions
    console.log('useEffect/load all minions...');
    loadData().then((minions)=>{setAllMinions((prev)=>(minions))});
  }, []);


  return (
    <div className="AllMinions">
      <h1>all minions</h1>
      {allMinions.map((minion)=>{
        return <Link to={`/minions/${minion.id}`} key={minion.id}> {minion.name}</Link>
      })}
    </div>
  );
}


