import express from 'express'
import blogsRoute from './routes/blog.routes';
import courseCatelogRoute from './routes/courseCatelog.routes';
import assignmentRoute from './routes/assignment.routes';
import authRoute from './routes/auth.routes';
import settingsRoute from './routes/settings.routes';
import batchManagementRoute from './routes/batchManagement.routes';
// import videoClassRoutes from './routes/videoClass.routes'
import cors from 'cors'
require('dotenv').config();

const app = express();

// Server Port
const port = process.env.PORT || 4000;

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


// Cors policy acceptence
app.use (cors({
    origin: '*',
    methods: ['GET','POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true
}));

// Routes
app.use ('/api/blog', blogsRoute);
app.use ('/api/course', courseCatelogRoute);
app.use ('/api/assignment', assignmentRoute);
app.use ('/api/auth', authRoute);
app.use ('/api/setting', settingsRoute);
app.use ('/api/batch', batchManagementRoute);

// app.use ('/', videoClassRoutes);

app.listen (port, ()=>{
    console.log(`App is listning on : http://localhost:${port}`);    
})
