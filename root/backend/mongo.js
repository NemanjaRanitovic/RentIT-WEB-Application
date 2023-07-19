const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://nemanjaranit:e9NGQzxtp00tfLef@cluster0.60gcb2c.mongodb.net/?retryWrites=true&w=majority';
const logIn = async(req,res,next) => {
  const loginParams = 
  {
    Username : req.body.Username,
    Password : req.body.Password
  };
  let user;
  const client = new MongoClient(url);
  try{
    await client.connect();
    const db = client.db()
    user = await db.collection('Users').findOne({Username: loginParams.Username});
  }catch(error){
    return res.json({message:"Invalid username/password."});
  }
  client.close();
  res.json(user)
  console.log(user);

};
exports.logIn = logIn;