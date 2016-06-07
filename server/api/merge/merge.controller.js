'use strict';

import {Merge} from '../../sqldb';
var async = require('async');


export function getHistory(req, res) {
  var recipientcode = req.params.code;
  return Merge.findAll({
     where: {
      recipientcode: recipientcode
    }
  })
    .then(merges => {
      res.status(200).send(merges);
    })

}

export function create(req, res, next) {
  var merges = req.body.merges;
  
  async.each(merges, function(merge, callback) {
    for(var key in merge){
      if(merge[key]!== null && typeof merge[key] === "object"){
        //flat nested json for mapping purpose
         for(var subkey in merge[key]){
             merge[key+'_'+subkey] = merge[key][subkey];
         }
         delete merge[key];
      }
    }
    merge.email_date = new Date();
    var newMerge = Merge.build(merge);
    newMerge.save()
    .then(function(result) {
      callback();
    })
  },function(err){
    if(!err){
       res.status(200).send();
    }else{
       res.status(500).send(err);
    }
  });
}


