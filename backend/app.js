const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const cors = require('cors');

//routes

const userRoute = require('./routes/userRoutes');

const teacherRoute = require('./routes/teacherRoutes');

//database config

const courseRoute = require('./routes/courseRoutes')
    //database config
mongoose.connect(config.database, {
    useNewUrlParser: true
});

//mongoose.connect('mongodb://localhost:27017/teach');
mongoose.connection.on('connected', () => {
    console.log('connected to database' + config.database);
});

//middleware
app.use(cors());

app.use(express.json());
//routes

app.use('/api/users/', userRoute);

app.use('/api/teacher/', teacherRoute);

app.use('/api/courses/', courseRoute);



//error handling

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
});
app.listen(3000, () => {
    console.log(`Server started on 3000`);
});