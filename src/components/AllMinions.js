import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { deleteMinionThunk, setMinions } from "../store/minions";

import minionImg from "../img/minion.png";
import xButton from "../img/x_button.svg";
import addButton from "../img/add_button.svg";
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

  const deleteMinion = (id) =>{
    dispatch(deleteMinionThunk(id));
  }

  return (
    <div id="all-minions">
      {minions.map((minion)=>{
        return (
          <div className="minion-grid" key={minion.id}> 
            <Link to={`/minions/${minion.id}`} > 
              <img className="button minion-thumbnail" src={minionImg}></img>
              
              <p>ID #{minion.id}</p>
            </Link>
            <img onClick={() => deleteMinion(minion.id)}  className="button x-button" src={xButton} alt="" />
          </div>
        )
      })}
      <div id="add-minion-button-grid" className="minion-grid">
            <Link to="/minions/new">
              <img id="add-minion-button" className="button" src={addButton} alt="" />
            </Link>
      </div>
    </div>
  );
}


