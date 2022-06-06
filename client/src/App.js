//import React,{useState, useEffect} from "react";  
import React,{useState,useEffect} from "react"; 
import './App.css'; 
import logo from './logo.png';
import Axios from 'axios';
function App() { 

 const [spellName,setSpellName]= useState('') 
 const [spelllevel,setSpelllevel]= useState('')
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


 const[spellList, setspellList]= useState([]) 
 var[buttonType,setButtonType] = useState('')
 var[buttonLevel,setButtonLevel] = useState('') 
 var[buttonSchool,setButtonSchool] = useState('')   
 var[buttonConcentration,setButtonConcentration] = useState('')  
  
 let filterArray = [ 
   buttonType, 
   buttonLevel, 
   buttonSchool,buttonConcentration ];  
  
useEffect(() => { 
  Axios.get('http://localhost:3001/api/get').then((response) => { 
    setspellList(response.data) 
   
  });
}, []);
 /*
useEffect(() => { 
  Axios.put('http://localhost:3001/api/ButtonType').then((response) => {  
    setspellList(response.data)  

  });
}, [filterByTypeTrigger]); 
 */
 const typeFilter = () => {   

  // Axios.get('http://localhost:3001/api/buttonType', {params: {filterArray}}).then((response) => {  
    Axios.get(`http://localhost:3001/api/filterArray${filterArray}`).then((response) => {  
    console.log(buttonType+"beans test beans");
    setspellList(response.data);
   }); 
 }

 /*
const submitType  = () => { 
  setButtonType([...spellList, {spellName:spellName,spelllevel:spelllevel,school:school, 
    ritual:ritual, 
    castingtime:castingtime, 
    components:components, 
    duration:duration, 
    spellrange:spellrange, 
    concentration:concentration, 
    booksource:booksource, 
    spelltext:spelltext, 
    spelltype:spelltype}]);
 
}
*/
 const submitSpell = () => {  
   /*
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
    setspellList([...spellList, {spellName:spellName,spellLevel:spellLevel },]);
    alert("successful insert")
  })  */

  Axios.post('http://localhost:3001/api/insert',{ 
    spellName:spellName, 
    spelllevel:spelllevel, 
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
    
 
   }); 
   setspellList([...spellList, {spellName:spellName,spelllevel:spelllevel,school:school, 
    ritual:ritual, 
    castingtime:castingtime, 
    components:components, 
    duration:duration, 
    spellrange:spellrange, 
    concentration:concentration, 
    booksource:booksource, 
    spelltext:spelltext, 
    spelltype:spelltype}]); 

 


 };
  return (  
    
    <div className="App"> <h1>spellorganizer</h1> 
    <div className logoform> 
        <img src={logo} height ="200" width ="400" alt="Logo" /> 
        </div> 
      <div className="form1">
        <label>Spell Name</label>
        <input type="text" name="spell Name" onChange={(e) => {
          setSpellName(e.target.value);
        } } />
        <label> spell level</label>
        <input type="text" name="spell level" onChange={(e) => {
          setSpelllevel(e.target.value);
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

      <div className="form2">
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
         <button onClick={submitSpell}>submit</button>
      </div>

      <div className="form3">
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
           <label> user name</label>
        <input type="text" name="spell type" onChange={(e) => {
          //setSpellType(e.target.value);
        } } />  
          <label> password</label>
        <input type="text" name="spell type" onChange={(e) => {
         // setSpellType(e.target.value);
        } } /> 
       
      </div> 
      <div className="sortingButtons">
        <label> type filter</label>
        <input type="text" name="type" onChange={(e) => { 
            setButtonType(e.target.value); 
           // console.log(e.target.value); 
         //   console.log("beans"+buttonType);
         // setConcentration(e.target.value);
        }}/> 
        <label> level filter</label>
        <input type="text" name="level" onChange={(e) => {  
            setButtonLevel(e.target.value);
        }}/>  
        <label> school filter</label>
        <input type="text" name="school" onChange={(e) => {  
            setButtonSchool(e.target.value);
        }}/> 
        <label> Concentration filter</label>
        <input type="text" name="concentration" onChange={(e) => {  
            setButtonConcentration(e.target.value);
        }}/> 
         <button onClick={typeFilter}>typeSubmit</button>   
       
          </div> 
         
      
    <div className = "form3"> 
    {spellList.map((val) => {   
      return(
      <div className = "card">  
      <h1> {val.spellName}</h1>  

      <label> spelllevel: {val.spelllevel}</label> 
      <label> school: {val.school}</label> 
      <label> ritual: {val.ritual}</label> 
      <label> castingtime: {val.castingtime}</label> 
      <label> components: {val.components}</label> 
      <label> duration: {val.duration}</label> 
      <label> spellrange: {val.spellrange}</label> 
      <label> concentration: {val.concentration}</label>  
      <label> booksource: {val.booksource}</label> 
      <label> spelltype: {val.spelltype}</label> 
      <p>spelltext: {val.spelltext}</p>    
      </div>
      );
    })}   
    </div>
    </div> 
  
    
    
  
    
  
    
  
    /*
  <div className="App"><h1>spellorganizer </h1>  
    <div className = "form">  
    <label>Spell Name</label>
    <input type="text" name= "spell Name" onChange={(e)=> { 
     setSpellName(e.target.value)
    }}/> 
    <label> spell level</label> 
    <input type="text" name= "spell level"onChange={(e)=> { 
     setSpellLevel(e.target.value)
    }}/>   
       <label> spell school</label> 
    <input type="text" name= "spell school"onChange={(e)=> { 
     setSpellSchool(e.target.value)
    }}/>  
    <label> ritual</label> 
    <input type="text" name= "spell ritual casting"onChange={(e)=> { 
     setRitual(e.target.value)
    }}/>   
    <label> spell casting time </label> 
    <input type="text" name= "spell casting time"onChange={(e)=> { 
     setCastingTime(e.target.value)
    }}/>  
    <label> spell components</label> 
    <input type="text" name= "spell components"onChange={(e)=> { 
     setComponents(e.target.value)
    }}/>  
     <label> spell duration</label> 
    <input type="text" name= "spell duration"onChange={(e)=> { 
     setDuration(e.target.value)
    }}/>  
     <label> spell range</label> 
    <input type="text" name= "spell range"onChange={(e)=> { 
     setSpellRange(e.target.value)
    }}/>  
     <label> concentration</label> 
    <input type="text" name= "concentration"onChange={(e)=> { 
     setConcentration(e.target.value)
    }}/>  
     <label> book source</label> 
    <input type="text" name= "booksource"onChange={(e)=> { 
     setBookSource(e.target.value)
    }}/>  
     <label> spell text</label> 
    <input type="text" name= "spell text"onChange={(e)=> { 
     setSpellText(e.target.value)
    }}/>  
     <label> spell type</label> 
    <input type="text" name= "spell type"onChange={(e)=> { 
     setSpellType(e.target.value)
    }}/> 
    <button onClick={submitSpell}class = "text-left">submit</button>  
       
     


      {spellList.map((val) => {   
        return(
        <div className = "card">  
        <h1> {val.spellName}</h1> 
        <label> spellLevel: {val.spellLevel}</label> 
        <label> school: {val.school}</label> 
        <label> ritual: {val.ritual}</label> 
        <label> castingtime: {val.castingtime}</label> 
        <label> components: {val.components}</label> 
        <label> duration: {val.duration}</label> 
        <label> spellrange: {val.spellrange}</label> 
        <label> concentration: {val.concentration}</label>  
        <label> booksource: {val.booksource}</label> 
        <label> spelltype: {val.spelltype}</label>
        <p>spelltext: {val.spelltext}</p>    
        </div>
      
        );
      })} 

    </div>   
  </div>   */ 
  
  );
}

export default App;
