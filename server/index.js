const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');


const SendMessageRoute = require('./Routes/SendMessageRoute')


const { default: mongoose } = require('mongoose');
const PORT = 8000 || 8000;
const app = express();

const corsFonfig = {
    origin: true,
    credentials: true,
}
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({limit:'50mb', extended:true}))
app.use(express.json())


app.use(cors(corsFonfig));
app.options('*', cors(corsFonfig));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')))

// Database Connection
mongoose.connect('mongodb+srv://daffodil:SiCXHSK7tdIinkqK@cluster0.qtgabak.mongodb.net/test',
    {
        useNewUrlParser: true,
        autoIndex: true
    }).then(() => console.log("Database connected successfully"))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

// Routes
app.get("/", (req, res) => res.send("Daffodil University server is running..."))
app.use('/api/v1/send-message', SendMessageRoute);

//All
app.all("*", (req, res) => {
    res.status(404).json({ message: "Route not found" });
})

process.on('uncaughtException', err => {
    console.log(err);
    app.close(() => {
        process.exit(1);
    })
})

