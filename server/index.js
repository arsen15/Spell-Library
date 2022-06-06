const express = require("express");  
const bodyParser = require('body-parser')  
const cors = require('cors')
const app = express();  
const mysql =  require('mysql'); 

const  db =mysql.createPool({ 
    host:'localhost', 
    user: 'root' ,
    password: 'beans0987654321$$', 
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
app.get("/api/FilterArray:filterArray", (req,res) => {  
//app.get("/api/ButtonType:buttonType", (req,res) => {  
  var temp = "SELECT *  FROM spells where"; 
  /*  
  var buttonType = req.params.buttonType; 
  console.log(buttonType);
 var buttonLevel = req.params.buttonLevel;  
 console.log(buttonLevel); 
 var buttonSchool = req.params.buttonSchool;
  var andOn = false;  */  
  var andOn = false;
  const arr = req.params.filterArray.toString().split(','); 
  const buttonType = arr[0]; 
  console.log(buttonType); 
  const buttonLevel =  arr[1];   
 // console.log(buttonLevel);
  const buttonSchool = arr[2];   
  const buttonConcentration = arr[3];
 // console.log(buttonSchool);
  var typebool = false; 
  var levelbool = false; 
  var schoolbool = false; 
  var concentrationbool = false;
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

  console.log(temp+"   after school");
  temp = temp+";";
   console.log(temp);
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


   db.query(sqlSelect, buttonList, (err,result) => { 
    res.send(result);
  });
//  const sqlSelect = "SELECT *  FROM spells where spells.spelltype = ?;";  
/*  if(typebool == true && levelbool == true && schoolbool ==true ) { 
    db.query(sqlSelect, [buttonType,buttonLevel,buttonSchool], (err,result) => { 
      res.send(result);
    });

   } else if(typebool == true && levelbool == true && schoolbool ==false ) { 
  db.query(sqlSelect, [buttonType,buttonLevel], (err,result) => { 
    res.send(result);
  });  
   } else if(typebool == true && levelbool == false && schoolbool ==false ) {  
     console.log("beans beans")
    db.query(sqlSelect, [buttonType], (err,result) => { 
      res.send(result);
    }); 
   }else if(typebool == false && levelbool == false && schoolbool ==false) {  
     
    db.query(sqlSelect, [buttonType,buttonLevel], (err,result) => { 
      res.send(result);
    }); 
   } else if(typebool == false && levelbool ==true && schoolbool == false) { 
    db.query(sqlSelect, [buttonLevel], (err,result) => { 
      res.send(result);
    });
   } else if(typebool == false && levelbool == true && schoolbool == true) { 
    db.query(sqlSelect, [buttonLevel,buttonSchool], (err,result) => { 
      res.send(result);
    });  

   }else if (typebool == false && levelbool == false && schoolbool == true) { 
    db.query(sqlSelect, [buttonSchool], (err,result) => { 
      res.send(result);
    });  

   } */
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
    

   // const sqlInsert = "insert into spells (sp_no,spellName,spelllevel,school,ritual,castingtime,components,duration,spellrange,concentration,book_no,booksource _spelltext_spelltype_us_no) values (11,'test',5,'test','no')"
   // const sqlInsert = "insert into allspellstable (spellname,spelllevel,school,ritual,castingtime,components,duration,concentration,booksource,spelltext) values (?,?,'bean','bean','bean','bean','bean','bean','bean','bean')" 
   const sqlInsert = "INSERT INTO spells (sp_no,spellName,spelllevel,school,ritual,castingtime,components,duration,spellrange,concentration,book_no,booksource,spelltext,spelltype,us_no) VALUES (0,?,?,?,?,?,?,?,?,?,1,?,?,?,1);"
    db.query(sqlInsert,[spellName,spelllevel,school,ritual,castingtime,components,duration,spellrange,concentration,booksource,spelltext,spelltype], (err,result)=> { 
       console.log(err);
    });

}); 


/*
app.get("/", (req,res)  => {    
     
const sqlInsert = "INSERT INTO allspellstable (spellname,spelllevel,school,ritual,castingtime,components,duration,concentration,booksource,spelltext) VALUES ('faerie fire','1','evocation','false', '1 action','V','concentration 1 minute','true','phb', 'beans222');"; 
 db.query(sqlInsert, (err,result)=> {   
    // console.log(err);
    res.send("hello pedro12345678011232223445678910101");
 });

}); */

app.listen(3001, () => { 
console.log("running on  port 3001");
});