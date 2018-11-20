const app = require("express")();
var cors = require('cors');
app.use(cors());
app.listen(3001,(err)=>{
    if(!err)console.log("server running");
});
app.get("/",(req,res)=>{
    console.log("recieved")
    setTimeout(()=>{
        res.send("hivjtkvtvhtilv vtvtkjvhktv vtkvhtvthtkvht jtkhvkthvkt");
    },2000)
})