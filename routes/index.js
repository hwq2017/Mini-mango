var express = require('express');
/*引用数据库模块，需要那个引用哪个*/
var users = require('../db/users');
var questions = require('../db/questions');
var answers = require('../db/answers');
var tags = require('../db/tags');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  questions.find({},function(err,data_que){
   console.log(data_que);
    if(err){
      console.log(err);
    }else{
      users.find({}).sort({'likes':-1}).limit(10).exec(function(err,data){
    if(err){
      console.log(err);

    }else{
      res.render('index',{data_que:data_que,data_use:data})
    }
  })
    }

  });
  });

router.get("/index-top",function(){

  users.findOne({
    nick:"shaoxu" // ======== ? 登录状态下的用户名
  },function(err,data){
    console.log(data);
    res.render('homepage-header', { data : data});

  })

  if(typeof(req.session.name) == 'undefined'){
    req.session.name = null;
  }
});



module.exports = router;
