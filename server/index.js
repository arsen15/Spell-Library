const express = require("express");  
const bodyParser = require('body-parser')  
const cors = require('cors')
const app = express();  
const mysql =  require('mysql'); 

const  db =mysql.createPool({ 
    host:'localhost', 
    user: 'root' ,
    password: 'password', 
    database: 'spellorganizer' 
});
app.use(cors()); 
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.post("/api/insert",(req,res)=> { 
    

    const spellName = req.body.spellName 
    const spellLevel = req.body.spellLevel 

    const sqlInsert = "insert into allspellstable (spellname,spelllevel,school,ritual,castingtime,components,duration,concentration,booksource,spelltext) values (?,?,'bean','bean','bean','bean','bean','bean','bean','bean')"
    db.query(sqlInsert,[spellName,spellLevel], (err,result)=> { 
       console.log(err);
    });

});

app.get("/", (req,res)  => {    
     
const sqlInsert = "INSERT INTO allspellstable (spellname,spelllevel,school,ritual,castingtime,components,duration,concentration,booksource,spelltext) VALUES ('faerie fire','1','evocation','false', '1 action','V','concentration 1 minute','true','phb', 'beans222');"; 
 db.query(sqlInsert, (err,result)=> {   
    // console.log(err);
    res.send("hello pedro12345678011232223445678910101");
 });

}); 

app.listen(3001, () => { 
console.log("running on  port 3001");
});