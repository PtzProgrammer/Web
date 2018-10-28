var mongoClient = require("mongodb").MongoClient;
var url = "mongodb:localhost/sandbox";
mongoClient.connect(url, function(err,db){
  var humans = db.collections("humans");
  humans.insert({
    name:"Alex", age:18
  },function(err,result){
    console.log(result);
  });
});
