const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/PollsMERN');            //dev
module.exports=mongoose;