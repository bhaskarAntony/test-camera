const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.get('/home', (req, res)=>{
    res.json({
       title:'hello world' 
    })
})

app.post('/formate/account/number', (req, res)=>{
    const {accountNumber} = req.body;
    var result = '';
    for(let i=0; i<=accountNumber.length-1; i++){
        if(i<=1 || i>=accountNumber.length-2){
            result += accountNumber[i];
        }else{
            result+= '*'
        }
    }    
    res.json({
        formatedAccountNumber:result
    })
})

app.listen(4000, function(){
    console.log('server is running');
})