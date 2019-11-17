const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
Result = require('./models/result');

// mongo connection
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://mongo:27017/merndb', { useNewUrlParser: true, useUnifiedTopology: true  });

// checks connection
const db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
	res.send('Rest API');
});

// retrieve lists of Security Scan Result
app.get('/api/results', (req, res) => {
	Result.getResults((err, results) => {
		if(err){
			res.json(err);
		}
		res.json(results);
	});
});

//create a Security Scan Result
app.post('/api/result', (req, res) => {
	var result = req.body;
	Result.addResult(result, (err, result) => {
		if(err){
			res.json(err);
		}
		res.json(result);
	});
});


app.listen(3001, () => {
  console.log(`app running on port 3001`)
});