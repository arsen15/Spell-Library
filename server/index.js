/**
 * Authors: Ryan Montoya, Arsen Shintemirov, Roman Antipov
 * TCSS 445
 * Spring 2022
 */

const express = require("express");  
const bodyParser = require('body-parser')  
const cors = require('cors')
const app = express();  
const mysql =  require('mysql'); 

const  db =mysql.createPool({ 
    host:'localhost', 
    user: 'root' ,
    password: 'password', 
    database: 'dnd_db' 
});

app.use(cors()); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true})) 

app.get("/api/get", (req,res) => { 
 const sqlSelect = "SELECT *  FROM spells;"; 
 db.query(sqlSelect,(err,result) => { 
   res.send(result);
     console.log(err);
 });

}); 

app.get("/api/getCount", (req,res) => { 
  const sqlSelect = "SELECT distinct count(user_spells.user_name), spells.school FROM spells, user_spells WHERE spells.spellName = user_spells.spellName and spells.school = 'evocation';"; 
  db.query(sqlSelect,(err,result) => { 
    res.send(result);
      console.log(err);
  });
 
 }); 

app.get("/api/FilterArray:filterArray", (req,res) => {    
  var temp = "SELECT DISTINCT spells.spellName, spells.spelllevel, spells.school, spells.ritual, spells.castingtime, spells.components, spells.duration, spells.spellrange, spells.concentration, spells.booksource, spells.spelltext, spells.spelltype  FROM spells, user_spells where"; 
   
  var andOn = false;
  const arr = req.params.filterArray.toString().split(','); 
  const buttonType = arr[0]; 
  console.log(buttonType); 
  const buttonLevel =  arr[1];   
  const buttonSchool = arr[2];   
  const buttonConcentration = arr[3];
  const buttonUser = arr[4];
  var typebool = false; 
  var levelbool = false; 
  var schoolbool = false; 
  var concentrationbool = false;
  var userbool = false;

  if(buttonType != null && buttonType != '') {  
    if(andOn == true) { 
      temp =temp+" and"; 
    }
    temp =temp+" spells.spelltype  = ?"; 
    if(andOn == false) { 
      andOn = true;
    } 
    typebool = true;
  } 

   console.log(temp+"   after type");
  if(buttonLevel != null && buttonLevel != '') {   
    console.log(temp); 
    if(andOn == true) { 
     temp=temp+" and";

    }
      temp =temp+" spells.spelllevel = ?";

    if(andOn== false) { 
      andOn = true;
    } 
    levelbool  = true;
  } 

  console.log(temp+"   after level");
  if(buttonSchool != null && buttonSchool != '') {  
    console.log(temp);
    if(andOn == true) { 
      temp=temp+" and";
 
     }
       temp =temp+" spells.school = ?";
 
     if(andOn== false) { 
       andOn = true;
     }
     schoolbool=true;
  }    

  if(buttonConcentration != null && buttonConcentration != '') {  
    console.log(temp);
    if(andOn == true) { 
      temp=temp+" and";
 
     }
       temp =temp+" spells.concentration = ?";
 
     if(andOn== false) { 
       andOn = true;
     }
     concentrationbool=true;
  }
  
  if(buttonUser != null && buttonUser != '') {  
    console.log(temp);
    if(andOn == true) { 
      temp=temp+" and";
 
     }
       temp = temp+" user_spells.user_name = ?";
       temp = temp + "and user_spells.spellName = spells.spellName";
 
     if(andOn== false) { 
       andOn = true;
     }
     userbool=true;
  } 

  temp = temp+";";
   const sqlSelect = temp;   
   var buttonList = []; 
   
   if(typebool == true) {  
    if(buttonList.length ==0) { 
      buttonList[0] = buttonType;
    }  
  } 

  if(levelbool == true) { 
    if(buttonList.length == 0) { 
      buttonList[0] = buttonLevel;
    } else {   
       buttonList[buttonList.length]=buttonLevel;
    }
  } 

  if(schoolbool == true) { 
    if(buttonList.length ==0) { 
      buttonList[0]=buttonSchool;
    } 
    else {  
      console.log(buttonList.length);
      buttonList[buttonList.length]=buttonSchool;
    } 
  }  

  if(concentrationbool == true) { 
    if(buttonList.length ==0) { 
      buttonList[0]=buttonConcentration;
    } 
    else {  
      console.log(buttonList.length);
      buttonList[buttonList.length]=buttonConcentration;
    } 
  }

  if(userbool == true) { 
    if(buttonList.length ==0) { 
      buttonList[0]=buttonUser;
    } 
    else {  
      
      console.log(buttonList.length);
      buttonList[buttonList.length]=buttonUser;
      console.log(buttonList[buttonList.length]);
    } 
  }


   db.query(sqlSelect, buttonList, (err,result) => { 
    res.send(result);
  });

 });
 
app.post("/api/insert",(req,res)=> { 
    
    const spellName = req.body.spellName 
    const spelllevel = req.body.spelllevel  
    const school = req.body.school 
    const ritual = req.body.ritual 
    const castingtime = req.body.castingtime 
    const components = req.body.components 
    const duration = req.body.duration 
    const spellrange = req.body.spellrange 
    const concentration = req.body.concentration 
    const booksource =  req.body.booksource 
    const spelltext = req.body.spelltext 
    const spelltype = req.body.spelltype  
    const user = req.body.user

   const sqlInsert = "INSERT INTO spells (spellName,spelllevel,school,ritual,castingtime,components,duration,spellrange,concentration,booksource,spelltext,spelltype) VALUES (?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert,[spellName,spelllevel,school,ritual,castingtime,components,duration,spellrange,concentration,booksource,spelltext,spelltype], (err,result)=> { 
       console.log(err);
    });

    const sqlInsertUser = "INSERT INTO user_spells (user_name,spellName) VALUES (?,?);";
    db.query(sqlInsertUser,[user,spellName], (err,result)=> { 
      console.log(err);
   });
 

}); 


app.listen(3001, () => { 
console.log("running on  port 3001");
});