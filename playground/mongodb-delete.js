const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
   if(err) {
       return console.log("unable to connect to mongodb server");
   }
   console.log("Connected to MongoDB Server");
   const db =  client.db('TodoApp');

   // deleteMany

//    db.collection('Todos').deleteMany({text : 'something'}).then((result) => {
//      console.log(result);
//    });

   // deleteOne

//    db.collection('Todos').deleteOne({text : 'eat lunch'}).then((result) => {
//     console.log(result);
//   });
  
  // findOneAndDelete

//   db.collection('Todos').findOneAndDelete({completed : false}).then((result) => {
//     console.log(result);
//   });
});

