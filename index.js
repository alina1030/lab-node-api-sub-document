const express = require('express');
const mongoose = require('mongoose');

const lessonController = require('./controllers/lessons')
const squadController = require('./controllers/squads')

mongoose.connect('mongodb+srv://system:root@newcluster.xb8oo.mongodb.net/Sample?retryWrites=true&w=majority',{
    useNewUrlParser:true
})
.then(()=>{
    console.log("connected to mongodb");
    const app = express();
    app.use(express.json());

app.get('/api/lessons', lessonController.findLessons );
app.post('/api/lessons',lessonController.createLesson);
app.get('/api/lessons/:id',lessonController.findLesson);
app.patch('/api/lessons/:id',lessonController.updateLesson);
app.delete('/api/lessons/:id',lessonController.deleteLesson);

app.get('/api/squads', squadController.findSquads );
app.post('/api/squads',squadController.createSquad);
app.get('/api/squads/:id',squadController.findSquad);
app.patch('/api/squads/:id',squadController.updateSquad);
app.delete('/api/squads/:id',squadController.deleteSquad);

app.listen(8000,()=>{
    console.log("server started at port 8000");
    });
}).catch(()=>{
    console.log("db connection failed");
});

