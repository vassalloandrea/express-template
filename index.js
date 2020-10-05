import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send("Welcome to express")
})

app.listen(3000, () => {
  console.log('App is listening to port 3000')
})
