import express from 'express';

const app = express();

app.get('/about', (req,res) =>{
    res.send('About Us');
})

app.get('/', (req,res) =>{
    res.send('Hello World');
})



app.listen(5005, ()=>{
    console.log('Server is running on port 5005');

})