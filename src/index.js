const app = require('./App');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
let Port = 3600 || process.env.Port;

dotenv.config();
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Successful Connected to DB')
})

app.listen(Port, () => console.log(`Server is up at ${Port}`));
