const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;

const mongoConnect = (cb)=>{
    MongoClient.connect('mongodb+srv://user:JweGtKw1x2QLKE8b@cluster0.5vjxuyd.mongodb.net/?retryWrites=true&w=majority')
    .then(client=>{
        console.log("connected");
        cb(client)
    })
    .catch(err => console.log(err))
}

module.exports=mongoConnect;

