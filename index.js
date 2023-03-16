const express = require("express");
const cors = require("cors");
const app = express();
const axios=require("axios")

app.use(cors());
app.use(express.json());


app.post("/api/data", async (req, res, next) => {
//   console.log(req.body);
  const Message = req.body;
  console.log(Message);
   const re= await axios.post("https://fcm.googleapis.com/fcm/send",JSON.stringify(Message), {headers: {
        'Content-Type': 'application/json',
        'Authorization':"key=AAAAzorhe74:APA91bEiX7xy6M1W-PkwmJJ9x0nnp5yFnClJ_rX9oJp_NkI5t4LZ38nw4y-aowcBosJpoJqWYvKq6-UBihsrty5rVj6M4h_LLENYEE3GwRa29jgLZttm08f-U3vcRHjVcU6FNUhw7R9e"
      }})
  console.log(re.data);
res.sendStatus(200)
//   res.send({...re})
});
app.listen(5000, () => {
  console.log("server is on");
});
