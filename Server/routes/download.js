var express = require('express');
var Grades = require('../models/grades');
var officegen = require('officegen');
var Docxtemplater = require('docxtemplater');
var fs = require('fs');
var path = require('path');
var docx = officegen ( 'docx' );

var router = express.Router();

router.route("/:userId")

.get(function(req, res)
{
  console.log(req.params.userId);
    Grades.findOne({empId:req.params.userId},function(err, grades){
      if(err)
      {
        res.send({response:err});
      }
      else
      {
        //res.send({response:data});
        var response = printnew(grades);
        res.send({response:response});
      }
    });
});

function printnew(data)
{

  //Program Question1 Ans
  var pa1Ans1 ='';
  var pa1Ans2 ='';
  var pa1Ans3 ='';
  var pa1Ans4 ='';
  var pa1Ans5 ='';

  //Program Question2 Ans
  var pa2Ans1 ='';
  var pa2Ans2 ='';
  var pa2Ans3 ='';
  var pa2Ans4 ='';
  var pa2Ans5 ='';

  //Program Question3 Ans
  var pa3Ans1 ='';
  var pa3Ans2 ='';
  var pa3Ans3 ='';
  var pa3Ans4 ='';
  var pa3Ans5 ='';

  //Program Question4 Ans
  var pa4Ans1 ='';
  var pa4Ans2 ='';
  var pa4Ans3 ='';
  var pa4Ans4 ='';
  var pa4Ans5 ='';










  //Engineering Question1 Ans
  var ea1Ans1 ='';
  var ea1Ans2 ='';
  var ea1Ans3 ='';
  var ea1Ans4 ='';
  var ea1Ans5 ='';

  //Engineering Question2 Ans
  var ea2Ans1 ='';
  var ea2Ans2 ='';
  var ea2Ans3 ='';
  var ea2Ans4 ='';
  var ea2Ans5 ='';

  //Engineering Question3 Ans
  var ea3Ans1 ='';
  var ea3Ans2 ='';
  var ea3Ans3 ='';
  var ea3Ans4 ='';
  var ea3Ans5 ='';

  //Engineering Question4 Ans
  var ea4Ans1 ='';
  var ea4Ans2 ='';
  var ea4Ans3 ='';
  var ea4Ans4 ='';
  var ea4Ans5 ='';

  //Engineering Question5 Ans
  var ea5Ans1 ='';
  var ea5Ans2 ='';
  var ea5Ans3 ='';
  var ea5Ans4 ='';
  var ea5Ans5 ='';

  //Overall Cadet Performance Question1 Ans
  var oa1Ans1 ='';
  var oa1Ans2 ='';
  var oa1Ans3 ='';
  var oa1Ans4 ='';
  var oa1Ans5 ='';



  //Load the docx file as a binary
  var content = fs.readFileSync(__dirname + "/../template/input.docx", "binary");
  var doc = new Docxtemplater(content);



  //Logic for Program Question No1

  if(data.pa1==='Basic')
  {
   pa1Ans1 = 'X';
  }
  if(data.pa1==='Average')
  {
   pa1Ans2 = 'X';
  }
  if(data.pa1==='Above Average')
  {
   pa1Ans3 = 'X';
  }
  if(data.pa1==='Good')
  {
    pa1Ans4 = 'X';
  }
  if(data.pa1==='Top Gun')
  {
    pa1Ans5 = 'X';
  }

  //Logic for Program Question No2
  if(data.pa2==='Basic')
  {
   pa2Ans1 = 'X';
  }
  if(data.pa2==='Average')
  {
   pa2Ans2 = 'X';
  }
  if(data.pa2==='Above Average')
  {
   pa2Ans3 = 'X';
  }
  if(data.pa2==='Good')
  {
    pa2Ans4 = 'X';
  }
  if(data.pa2==='Top Gun')
  {
    pa2Ans5 = 'X';
  }



  //Logic for Program Question No3

  if(data.pa3==='Basic')
  {
   pa3Ans1 = 'X';
  }
  if(data.pa3==='Average')
  {
   pa3Ans2 = 'X';
  }
  if(data.pa3==='Above Average')
  {
   pa3Ans3 = 'X';
  }
  if(data.pa3==='Good')
  {
    pa3Ans4 = 'X';
  }
  if(data.pa3==='Top Gun')
  {
    pa3Ans5 = 'X';
  }


  //Logic for Program Question No4

  if(data.pa4==='Basic')
  {
   pa4Ans1 = 'X';
  }
  if(data.pa4==='Average')
  {
   pa4Ans2 = 'X';
  }
  if(data.pa4==='Above Average')
  {
   pa4Ans3 = 'X';
  }
  if(data.pa4==='Good')
  {
    pa4Ans4 = 'X';
  }
  if(data.pa4==='Top Gun')
  {
    pa4Ans5 = 'X';
  }



  //Logic for Engineering Question No1

  if(data.ea1==='Basic')
  {
   ea1Ans1 = 'X';
  }
  if(data.ea1==='Average')
  {
   ea1Ans2 = 'X';
  }
  if(data.ea1==='Above Average')
  {
   ea1Ans3 = 'X';
  }
  if(data.ea1==='Good')
  {
    ea1Ans4 = 'X';
  }
  if(data.ea1==='Top Gun')
  {
    ea1Ans5 = 'X';
  }


  //Logic for Engineering Question No2

  if(data.ea2==='Basic')
  {
   ea2Ans1 = 'X';
  }
  if(data.ea2==='Average')
  {
   ea2Ans2 = 'X';
  }
  if(data.ea2==='Above Average')
  {
   ea2Ans3 = 'X';
  }
  if(data.ea2==='Good')
  {
    ea2Ans4 = 'X';
  }
  if(data.ea2==='Top Gun')
  {
    ea2Ans5 = 'X';
  }

  //Logic for Engineering Question No3

  if(data.ea3==='Basic')
  {
   ea3Ans1 = 'X';
  }
  if(data.ea3==='Average')
  {
   ea3Ans2 = 'X';
  }
  if(data.ea3==='Above Average')
  {
   ea3Ans3 = 'X';
  }
  if(data.ea3==='Good')
  {
    ea3Ans4 = 'X';
  }
  if(data.ea3==='Top Gun')
  {
    ea3Ans5 = 'X';
  }


  //Logic for Engineering Question No4

  if(data.ea4==='Basic')
  {
   ea4Ans1 = 'X';
  }
  if(data.ea4==='Average')
  {
   ea4Ans2 = 'X';
  }
  if(data.ea4==='Above Average')
  {
   ea4Ans3 = 'X';
  }
  if(data.ea4==='Good')
  {
    ea4Ans4 = 'X';
  }
  if(data.ea4==='Top Gun')
  {
    ea4Ans5 = 'X';
  }


  //Logic for Engineering Question No5

  if(data.ea5==='Basic')
  {
   ea5Ans1 = 'X';
  }
  if(data.ea5==='Average')
  {
   ea5Ans2 = 'X';
  }
  if(data.ea5==='Above Average')
  {
   ea5Ans3 = 'X';
  }
  if(data.ea5==='Good')
  {
    ea5Ans4 = 'X';
  }
  if(data.ea5==='Top Gun')
  {
    ea5Ans5 = 'X';
  }


  //Logic for Overall Cadet Performance Question No1

  if(data.oa1==='Basic')
  {
   oa1Ans1 = 'X';
  }
  if(data.oa1==='Average')
  {
   oa1Ans2 = 'X';
  }
  if(data.oa1==='Above Average')
  {
   oa1Ans3 = 'X';
  }
  if(data.oa1==='Good')
  {
    oa1Ans4 = 'X';
  }
  if(data.oa1==='Top Gun')
  {
    oa1Ans5 = 'X';
  }


//set the templateVariables
doc.setData({
    "emp_name":data.emp[0].empName,
    "pa1Ans1":pa1Ans1,
    "pa1Ans2":pa1Ans2,
    "pa1Ans3":pa1Ans3,
    "pa1Ans4":pa1Ans4,
    "pa1Ans5":pa1Ans5,

    "pa2Ans1":pa2Ans1,
    "pa2Ans2":pa2Ans2,
    "pa2Ans3":pa2Ans3,
    "pa2Ans4":pa2Ans4,
    "pa2Ans5":pa2Ans5,

    "pa3Ans1":pa3Ans1,
    "pa3Ans2":pa3Ans2,
    "pa3Ans3":pa3Ans3,
    "pa3Ans4":pa3Ans4,
    "pa3Ans5":pa3Ans5,

    "pa4Ans1":pa4Ans1,
    "pa4Ans2":pa4Ans2,
    "pa4Ans3":pa4Ans3,
    "pa4Ans4":pa4Ans4,
    "pa4Ans5":pa4Ans5,

    "ea1Ans1":ea1Ans1,
    "ea1Ans2":ea1Ans2,
    "ea1Ans3":ea1Ans3,
    "ea1Ans4":ea1Ans4,
    "ea1Ans5":ea1Ans5,

    "ea2Ans1":ea2Ans1,
    "ea2Ans2":ea2Ans2,
    "ea2Ans3":ea2Ans3,
    "ea2Ans4":ea2Ans4,
    "ea2Ans5":ea2Ans5,

    "ea3Ans1":ea3Ans1,
    "ea3Ans2":ea3Ans2,
    "ea3Ans3":ea3Ans3,
    "ea3Ans4":ea3Ans4,
    "ea3Ans5":ea3Ans5,

    "ea4Ans1":ea4Ans1,
    "ea4Ans2":ea4Ans2,
    "ea4Ans3":ea4Ans3,
    "ea4Ans4":ea4Ans4,
    "ea4Ans5":ea4Ans5,

    "ea5Ans1":ea5Ans1,
    "ea5Ans2":ea5Ans2,
    "ea5Ans3":ea5Ans3,
    "ea5Ans4":ea5Ans4,
    "ea5Ans5":ea5Ans5,

    "oa1Ans1":oa1Ans1,
    "oa1Ans2":oa1Ans2,
    "oa1Ans3":oa1Ans3,
    "oa1Ans4":oa1Ans4,
    "oa1Ans5":oa1Ans5,

    "fa1Ans":data.fa1,
    "fa2Ans":data.fa2



});

//apply them (replace all occurences of {first_name} by Hipp, ...)
doc.render();

var buf = doc.getZip().generate({type:"nodebuffer"});
fs.writeFileSync(__dirname+"/../reports/"+data.emp[0].empName+".docx",buf);
return "Document is created for "+data.emp[0].empName;

}

module.exports = router;
