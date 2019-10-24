var express=require('express');
var route=express.Router();

route.get('/xyz',(req,res)=>{
    console.log(req.body);
res.send('welcome bitches again');
});

route.post('/signup',(req,res)=>{
    var reqObject=req.body;
    console.log('req body is : ',reqObject);
    var operations=require('../database/helpers/Operation');
    operations.addUser(reqObject,res);
});
 
// /login
route.post('/login',(req,res)=>{
    var reqObject=req.body;
   // console.log('req body is : ',reqObject);
    var operations=require('../database/helpers/Operation');
    operations.searchUser(reqObject,res);
});

// /createpoll
route.post('/createPoll',(req,res)=>{
    var reqObject=req.body;
    //console.log('req body is : ',reqObject);
    var operations=require('../database/helpers/Operation');
    operations.addPoll(reqObject,res);
});

// /getlistofpolls
route.post('/getListofPolls',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.getlistofpolls(reqObject,res);
});

route.post('/deletePoll',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.deletepoll(reqObject,res);
});

route.post('/findPoll',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.searchpoll(reqObject,res);
});

//  /vote
route.post('/vote',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.vote(reqObject,res);
});

//myVotedPollsandSelectedOptions
route.post('/myVotes',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.mypollsandselectedoption(reqObject,res);
});

//  /editprofile

// /deleteprofile

//  /mypolls
route.post('/myPolls',(req,res)=>{
    var reqObject=req.body;
var operations=require('../database/helpers/Operation');
operations.mypolls(reqObject,res);
});
module.exports=route;