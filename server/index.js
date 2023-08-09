const express = require("express");
const mongose = require("mongoose");
const cors = require('cors');
const path = require("path");
const categoryRoutes = require('./routes/category');
const petRoutes = require('./routes/pet');
const morgan = require('morgan');
const adoptionRoutes = require('./routes/adoption');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use('/public', express.static(path.join(__dirname, 'public')));

//routes

app.use('/api/category', categoryRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/adoption', adoptionRoutes);

mongose.connect('mongodb+srv://vanshrawat2795:brEQYEG5AtRmD1t1@cluster0.vkcr7vx.mongodb.net/PETCOMPANION', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('CONNECTED TO MONGO!');
    })
    .catch((err) => {
        console.log('OH NO! MONGO CONNECTION ERROR!');
        console.log(err);
    })


app.listen(4000, () => {
    console.log("App is running on PORT 4000")
})