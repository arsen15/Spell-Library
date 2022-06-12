/**
 * Authors: Ryan Montoya, Arsen Shintemirov, Roman Antipov
 * TCSS 445
 * Spring 2022
 */

import React,{useState,useEffect} from "react";
import logo from "./logo.png";
import Axios from 'axios';

function Home() {

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
    const [user,setUser] = useState('')

   
    const[spellList, setspellList]= useState([]) 
    var[buttonType,setButtonType] = useState('')
    var[buttonLevel,setButtonLevel] = useState('') 
    var[buttonSchool,setButtonSchool] = useState('')   
    var[buttonConcentration,setButtonConcentration] = useState('') 
    var[buttonUser,setButtonUser] = useState('')
     
    let filterArray = [ 
      buttonType, 
      buttonLevel, 
      buttonSchool,
      buttonConcentration,
      buttonUser 
     ];  
     
   useEffect(() => { 
     Axios.get('http://localhost:3001/api/get').then((response) => { 
       setspellList(response.data) 
      
     });
   }, []);
   
    const typeFilter = () => {   
     
     Axios.get(`http://localhost:3001/api/filterArray${filterArray}`).then((response) => {  
       console.log(buttonType+"beans test beans");
       setspellList(response.data);
      }); 
    }
   
    const submitSpell = () => {  
   
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
       spelltype:spelltype, 
       user:user
    
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

    return(
        <div className="App">
            <h1>Welcome to the D&D Spell Organizer!</h1>

                <div > 
                    <img src={logo} height ="200" width ="400" alt="Logo" /> 
                </div> 
                <div className="form1">
                <label>Spell Name</label>
                <input type="text" name="spell Name" onChange={(e) => {
                    setSpellName(e.target.value);
                } } />
                <label> Spell Level</label>
                <input type="text" name="spell level" onChange={(e) => {
                    setSpelllevel(e.target.value);
                } } />
                <label> Spell School</label>
                <input type="text" name="spell school" onChange={(e) => {
                    setSpellSchool(e.target.value);
                } } />
                <label> Ritual</label>
                <input type="text" name="spell ritual casting" onChange={(e) => {
                    setRitual(e.target.value);
                } } />
                </div>

                <div className="form2">
                <label> Spell Casting Time </label>
                <input type="text" name="spell casting time" onChange={(e) => {
                    setCastingTime(e.target.value);
                } } />
                <label> Spell Components</label>
                <input type="text" name="spell components" onChange={(e) => {
                    setComponents(e.target.value);
                } } />
                <label> Spell Duration</label>
                <input type="text" name="spell duration" onChange={(e) => {
                    setDuration(e.target.value);
                } } />
                <label> Spell Range</label>
                <input type="text" name="spell range" onChange={(e) => {
                    setSpellRange(e.target.value);
                } } /> 
                <button onClick={submitSpell} className = "button">submit</button>
                </div>

                <div className="form3">
                    <label> Concentration</label>
                    <input type="text" name="concentration" onChange={(e) => {
                        setConcentration(e.target.value);
                    } } />
                    <label> Book Source</label>
                    <input type="text" name="booksource" onChange={(e) => {
                        setBookSource(e.target.value);
                    } } />
                    <label> Spell Text</label>
                    <input type="text" name="spell text" onChange={(e) => {
                        setSpellText(e.target.value);
                    } } />
                    <label> Spell Type</label>
                    <input type="text" name="spell type" onChange={(e) => {
                        setSpellType(e.target.value);
                    } } /> 
                        <label> User Name</label>
                    <input type="text" name="spell type" onChange={(e) => {
                        setUser(e.target.value);
                    } } />  
                       
                
                </div> 

                <div className="sortingButtons">
                <label> Type Filter</label>
                <input type="text" name="type" onChange={(e) => { 
                    setButtonType(e.target.value); 
                }}/> 
                <label> Level Filter</label>
                <input type="text" name="level" onChange={(e) => {  
                    setButtonLevel(e.target.value);
                }}/>  
                <label> School Filter</label>
                <input type="text" name="school" onChange={(e) => {  
                    setButtonSchool(e.target.value);
                }}/> 

                <label> Concentration filter</label>
                <input type="text" name="concentration" onChange={(e) => {  
                    setButtonConcentration(e.target.value);
                }}/> 

                <label> User filter</label>
                <input type="text" name="user" onChange={(e) => {  
                    setButtonUser(e.target.value);
                }}/>

                <button onClick={typeFilter} className = "filterButton">Filter</button>   
                
                </div> 
                  
            <div className = "form3"> 
            {spellList.map((val) => {   
                return(
                <div className = "card">  
                <h1> {val.spellName}</h1>  

                <label> Spell Level: {val.spelllevel}</label> 
                <label> School: {val.school}</label> 
                <label> Ritual: {val.ritual}</label> 
                <label> Casting Time: {val.castingtime}</label> 
                <label> Components: {val.components}</label> 
                <label> Duration: {val.duration}</label> 
                <label> Spell Range: {val.spellrange}</label> 
                <label> Concentration: {val.concentration}</label>  
                <label> Book Source: {val.booksource}</label> 
                <label> Spell Type: {val.spelltype}</label> 
                <p>Spell Text: {val.spelltext}</p>    
                </div>
                );
            })}   
            </div>
        </div>
    );
}

export default Home;