var express = require('express');
var Grades = require('../models/grades');
var Users = require('../models/users');
var router = express.Router();

router.route("/")
.post(function(req, res)
{
 console.log(req.body);
 if(req.body)
  {
    Users.findById({_id:req.body.empId},function(err,users)
    {
      if(err)
      {
       res.send({response:err});
      }
      else
      {
        Grades.findOne({empId:req.body.empId},function(err, data){
          if(err)
          {
            res.send({response:err});
          }
          else
          {
            if(data!=null)
            {
              res.send({response:"Data already inserted in database"});
            }
            else
            {

              var grades = new Grades();
              grades.emp = users;
              grades.empId = req.body.empId;
              grades.pq1 = req.body.pq1;
              grades.pa1 = req.body.pa1;
              grades.pq2 = req.body.pq2;
              grades.pa2 = req.body.pa2;
              grades.pq3 = req.body.pq3;
              grades.pa3 = req.body.pa3;
              grades.pq4 = req.body.pq4;
              grades.pa4 = req.body.pa4;
              grades.eq1 = req.body.eq1;
              grades.ea1 = req.body.ea1;
              grades.eq2 = req.body.eq2;
              grades.ea2 = req.body.ea2;
              grades.eq3 = req.body.eq3;
              grades.ea3 = req.body.ea3;
              grades.eq4 = req.body.eq4;
              grades.ea4 = req.body.ea4;
              grades.eq5 = req.body.eq5;
              grades.ea5 = req.body.ea5;
              grades.oq1 = req.body.oq1;
              grades.oa1 = req.body.oa1;
              grades.fq1 = req.body.fq1;
              grades.fa1 = req.body.fa1;
              grades.fq2 = req.body.fq2;
              grades.fa2 = req.body.fa2;
              grades.save(function(err,sucs)
              {
                if(err)
                {
                 res.send({response:err});
                }
                else
                {
                 res.send({response:"Grades are saved in database"});
                }
              });

            }
          }


        });

      }
    });
 }
});


module.exports = router;
