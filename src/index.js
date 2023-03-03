const express = require("express");
const app = express();
const mongoose = require("mongoose");
//middleware
app.use(express.json());

const route = require("./routes/route");
app.use("/", route);

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://gautam:gautam123@cluster0.xorxp.mongodb.net/dip_project", {
    useNewUrlParser: true,
})
    .then(() => {
        console.log("MongoDB is connected");
    })
    .catch((error) => {
        console.log("no connected");
    });


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.port || 3000))
});