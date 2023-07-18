import * as  mongoosee from "mongoose" ;
import * as dotenv from "dotenv";

dotenv.config()


const URI : any = process.env.MONGO_URI;

const connection = () => {
  mongoosee.set("strictQuery", false)
  mongoosee.connect(URI, {})
  
    .then(() => console.log("Database connected!"))
    .catch((err: any) => console.log("something went wrong",err))

}

export default connection