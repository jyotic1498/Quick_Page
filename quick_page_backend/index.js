const express = require("express");
const userRouter = require('./router/userRouter');
const webpageRouter = require('./router/webpageRouter');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
  origin : ['http://localhost:3000']
}))

// middleware
app.use('/user', userRouter);
app.use('/webpage', webpageRouter);

// route
app.get("/", (req, res) => {
  res.send("response from express");
})

app.get("/home", (req, res) => {
  res.send("response from home");
})

// add
// getall

app.listen(port, () => {
  console.log("express server started")
})
