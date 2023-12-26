const express=require("express");
const app=express();
const feedRoutes=require("./routes/feed");
const mongoConnect = require("./utils/database");
const mongoose =require("mongoose");


app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','OPTIONS,GET,POST,PUT,DELET');
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization');
    next();
})



app.use('/feed',feedRoutes);

const connectDB = async () =>{
    try{
        await mongoose.connect('mongodb+srv://user:JweGtKw1x2QLKE8b@cluster0.5vjxuyd.mongodb.net/?retryWrites=true&w=majority',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        app.listen(8080);
        console.log('MogoDB connected...');
    }catch(err){
        console.error(err.message)
        // Exit process with failure
        process.exit(1);
    }
}
connectDB();
// mongoConnect((client) => {
//     // console.log(client);
//     app.listen(8080);
// })