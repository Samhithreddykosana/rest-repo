import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use('/users',userRoutes);

app.get('/',(req,res)=> res.send("hey msg from homepage"));


// app.get('/api', (req,res)=> res.send(userr) );

app.listen(PORT, ()=> console.log(`server running on port: http://localhost:${PORT}`));

