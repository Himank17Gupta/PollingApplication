const mongoose=require('mongoose');
require('dotenv').config();

//mongoose.connect('mongodb://localhost:27017/PollsMERN');            //dev
mongoose.connect(process.env.DB_KEY);            //prod
module.exports=mongoose;