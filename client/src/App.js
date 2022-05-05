import React,{useState, useEffect} from "react"; 
import './App.css';
import Axios from 'axios';
function App() { 

 const [spellName,setSpellName]= useState('') 
 const [spellLevel,setSpellLevel]= useState('')

 const submitSpell = () => { 
 Axios.post('http://localhost:3001/api/insert',{ 
   spellName:spellName, 
   spellLevel:spellLevel,  
  }). then(()=> { 
    alert("successful insert")
  })
 };
  return ( 
  <div className="App"><h1>spellorganizer</h1>  
    

    <div className = "form"> 
    <label>Spell Name</label>
    <input type="text" name= "spell Name" onChange={(e)=> { 
     setSpellName(e.target.value)
    }}/> 
    <label> spell level</label> 
    <input type="text" name= "spell level"onChange={(e)=> { 
     setSpellLevel(e.target.value)
    }}/>  
    <button onClick={submitSpell}>submit</button>
    </div>
  </div>  
  );
}

export default App;
