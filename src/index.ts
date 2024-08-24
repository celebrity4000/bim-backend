import express from 'express'
import blogsRoute from './routes/blog.route';
import courseRoute from './routes/course.route';
require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;

app.use ('/', blogsRoute);
app.use ('/', courseRoute)

app.listen (port, ()=>{
    console.log(`App is listning on port: ${port}`);    
})