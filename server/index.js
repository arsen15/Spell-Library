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
app.post("/api/insert",(req,res)=> { 
    

    const spellName = req.body.spellName 
    const spellLevel = req.body.spellLevel  
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
    db.query(sqlInsert,[spellName,spellLevel,school,ritual,castingtime,components,duration,spellrange,concentration,booksource,spelltext,spelltype], (err,result)=> { 
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