const express = require('express'); // importar express
const app = express(); // iniciar express 
const cors = require('cors');

//settings 
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(cors()); // permite recibir datos
app.use(express.json())

//routes
app.use('/api/users', require('./routes/users.js'));
app.use('/api/notes', require('./routes/notes.js'))
app.get('/', (req,res) => res.send('Welcome!'));

////////////////////////////////////////////////////////////////
module.exports = app; // exportar app