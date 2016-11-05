var express = require('express');
var Users = require('../models/users');
var router = express.Router();

router.route("/")
.post(function(req, res)
{
 console.log(req.body);
 if(req.body)
  {
    var users = new Users(req.body);
    users.save(function(err,sucs)
    {
      if(err)
      {
       res.send({response:err});
      }
      else
      {
       res.send({response:"User is saved in database"});
      }
    });
 }
})

.get(function(req, res)
{
    Users.find(function(err,users)
    {
      if(err)
      {
       res.send({response:err});
      }
      else
      {
       res.send({response:users});
      }
    });
})


module.exports = router;
