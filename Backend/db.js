const mongoose=require('mongoose');
const monuri='mongodb+srv://anshu8877947678:atlas123@cluster0.pr6de2v.mongodb.net/Foody_Web?retryWrites=true&w=majority'
const connectmongo=async()=>{
    try{
        mongoose.set("strictQuery",false);
        await mongoose.connect(monuri);
        console.log("connected to mongodb");
    }
    catch(error){
        console.log(`Error in connecting to MongoDB ${error}`);
        process.exit();
    }    
}
module.exports=connectmongo;