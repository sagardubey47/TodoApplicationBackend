
const express =  require("express");
const cors =  require("cors");
const {v4: uuidv4} = require("uuid");
const PORT = process.env.PORT || 5000;

const app = express();
// middleware for data on post
app.use(express.json({extended: false}));
app.use(cors());


let todos = [
  {
    id: 1,
    title: "morning Task",
    content: "morning breakfast , riding"
  },
  {
    id: 2,
    title: "afternoon Task",
    content: "lunch , gaming"
  },
  {
    id: 3,
    title: "evening Task",
    content: "lunch , gaming"
  }
]

app.get("/", (req, res) => {
  res.status(200).json(todos);
})

app.post("/", (req, res) => {

  let newTask = {
    id: uuidv4(),
    title: req.body.title,
    content: req.body.content
  }

  todos.push(newTask);
  res.status(201).json(todos);
})

app.delete("/", (req, res) => {
  let id = req.body.id;
   console.log(id);
  todos = todos.filter((todo) => {
    return todo.id !== id;
  })

 res.status(201).json(todos);
})


app.listen(PORT, () => {
  console.log("app is running on 5000");
})