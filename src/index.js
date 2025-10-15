const dotenv = require("dotenv")
const cors = require("cors");
const mongoose = require("mongoose");


const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({path: envFile});



const express = require("express");


const usersRouter = require("./Users/users.router");
const userFinancesRouter = require("./userFinances/userFinances.router");
const authRouter = require("./authentication/auth.router");





const {DB_USER, DB_PASS, PORT} = process.env;


const app = express();  


app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5173/api/user-finances/intake"],
  credentials: true,
}));

app.use(express.json());



const middleware = function (req, res, next) {
    req.info = {app: "my app", version: "1.0.0"}
    next();
}
app.use(middleware);

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: err.codeName || err.message });
});

app.use("/api/users", usersRouter);
app.use("/api/user-finances", userFinancesRouter);
app.use("/api/auth", authRouter);

async function bootstrap(){
    try{
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.qr9dasj.mongodb.net/`  , 
            {dbName: "fullstackTasks"});
        console.log("connected to MongoDB");
        app.listen(PORT, () => {
        console.log(`app is listening on port ${PORT}`); 
        });
        console.log(process.env.NODE_ENV);
    }

    catch(error) {
        console.log(error);
        process.exit(1);
    }
}
bootstrap();


