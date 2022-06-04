//import React,{useState, useEffect} from "react";  
import React,{useState} from "react"; 
import './App.css';
import Axios from 'axios';
function App() { 

 const [spellName,setSpellName]= useState('') 
 const [spellLevel,setSpellLevel]= useState('')
 const [school,setSpellSchool] = useState('')  
 const [ritual,setRitual] = useState('')  
 const [castingtime,setCastingTime] = useState('')  
 const [components,setComponents] = useState('')  
 const [duration,setDuration] = useState('')  
 const [spellrange,setSpellRange] = useState('')  
 const [concentration,setConcentration] = useState('')  
 const [booksource,setBookSource] = useState('')  
 const [spelltext,setSpellText] = useState('')  
 const [spelltype,setSpellType] = useState('') 

 const submitSpell = () => { 
 Axios.post('http://localhost:3001/api/insert',{ 
   spellName:spellName, 
   spellLevel:spellLevel, 
   school:school, 
   ritual:ritual, 
   castingtime:castingtime, 
   components:components, 
   duration:duration, 
   spellrange:spellrange, 
   concentration:concentration, 
   booksource:booksource, 
   spelltext:spelltext, 
   spelltype:spelltype 


  }).then(()=> { 
    alert("successful insert")
  })
 };
  return ( 
  <><div className="App"> <h1>spellorganizer</h1>

      <div className="form1">
        <label>Spell Name</label>
        <input type="text" name="spell Name" onChange={(e) => {
          setSpellName(e.target.value);
        } } />
        <label> spell level</label>
        <input type="text" name="spell level" onChange={(e) => {
          setSpellLevel(e.target.value);
        } } />
        <label> spell school</label>
        <input type="text" name="spell school" onChange={(e) => {
          setSpellSchool(e.target.value);
        } } />
        <label> ritual</label>
        <input type="text" name="spell ritual casting" onChange={(e) => {
          setRitual(e.target.value);
        } } />
      </div>

      <div className="form1">
        <label> spell casting time </label>
        <input type="text" name="spell casting time" onChange={(e) => {
          setCastingTime(e.target.value);
        } } />
        <label> spell components</label>
        <input type="text" name="spell components" onChange={(e) => {
          setComponents(e.target.value);
        } } />
        <label> spell duration</label>
        <input type="text" name="spell duration" onChange={(e) => {
          setDuration(e.target.value);
        } } />
        <label> spell range</label>
        <input type="text" name="spell range" onChange={(e) => {
          setSpellRange(e.target.value);
        } } />
      </div>

      <div className="form1">
        <label> concentration</label>
        <input type="text" name="concentration" onChange={(e) => {
          setConcentration(e.target.value);
        } } />
        <label> book source</label>
        <input type="text" name="booksource" onChange={(e) => {
          setBookSource(e.target.value);
        } } />
        <label> spell text</label>
        <input type="text" name="spell text" onChange={(e) => {
          setSpellText(e.target.value);
        } } />
        <label> spell type</label>
        <input type="text" name="spell type" onChange={(e) => {
          setSpellType(e.target.value);
        } } />
      </div>

    </div>

    <div className="button">
        <button onClick={submitSpell}>submit</button>
    </div></>
  );
}

export default App;