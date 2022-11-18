import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { createMinionThunk,updateMinionThunk } from "../store/minions";
import MinionEdit from "./MinionEdit";
import MinionDescription from './MinionDescription';
import arrowImg from "../img/arrow.svg";
//get a minion 
const getAMinion = async (id)=>{
  try{
      const response = await fetch(`http://localhost:4001/minions/${id}`);
      if(response.ok){
          const minion = await response.json();
          return minion
      }else{
          console.log('request to get a minion failed');
          throw new Error('request to get a minion failed');
      }
  }catch(err){
      console.log(err);
  }
};

export default function Minion({newMinion}) {
  const {minionId} = useParams();

  const dispatch = useDispatch();
  const [selectedMinion, setSelectedMinion] = useState({});
  
  const [editing, setEditing] = useState(newMinion);

  useEffect(()=>{
    if(newMinion){
      console.log('useEffect/create a minion');
      const newMinionInstance = {
        name: '',
        title: '',
        weaknesses: '',
        salary: ''
      }
      setSelectedMinion(newMinionInstance);
    }else{
      console.log('useEffect/load a minion with id: ' + minionId);
      getAMinion(minionId)
        .then((minion)=>{
          if(minion){
            setSelectedMinion((prev)=>(minion));
          }else{
            setSelectedMinion((prev)=>(minion));
          }
        })

    }
    
  },[ ]);
  const handleChange = (e)=>{
    setSelectedMinion((prev)=>{
      return {...prev, [e.target.name]: e.target.value};
    })
  };

  const toggleEdit = ()=>{
    //hanle saving editing
    if(editing){
      if(newMinion){
        dispatch(createMinionThunk(selectedMinion));
      }else{
        dispatch(updateMinionThunk(selectedMinion));
      }
    }
    setEditing(!editing);
  };
  return (
    <div id="single-minion-landing">
      <div className="minion-details">
            <div className="label meetings-label">
              { 
                newMinion
                ? `New Minion`
                : `Minion Id #${selectedMinion.id}`
              }
            </div>
            <div className="minion-description">
              { 
                editing
                ? <MinionEdit {...selectedMinion} handleChange={handleChange} />
                : <MinionDescription {...selectedMinion}/>
              }
            </div>
            <div className="button minion-save-button" onClick={toggleEdit} style={{color: 'blue'}}> 
              { editing ? 'Save' : 'Edit' }
            </div>
      </div>
      <div className="button back-button">
          <Link to="/minions">
            <img className="button" src={arrowImg} />
          </Link>
      </div>
    </div>
  );
}

