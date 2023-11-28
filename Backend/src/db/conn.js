const mongoose = require('mongoose');
const url = `mongodb+srv://Naitik31:Naitik31@farmer.otzhp0x.mongodb.net/`;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
    


   