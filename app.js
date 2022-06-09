const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3030;


app.use(express.static('public'))


app.listen(port, () => console.log('Server running in 3030 port'))


app.get('/', (req, res) => {
	res.sendFile(path.resolve('./views/index.html'));
});
app.get('/babbage', (req, res) => {
	res.sendFile(path.resolve('./views/babbage.html'));
});
app.get('/berners-lee', (req, res) => {
	res.sendFile(path.resolve('./views/berners-lee.html'));
});
app.get('/clarke', (req, res) => {
	res.sendFile(path.resolve('./views/clarke.html'));
});
app.get('/hamiltron', (req, res) => {
	res.sendFile(path.resolve('./views/hamiltron.html'));
});
app.get('/hopper', (req, res) => {
	res.sendFile(path.resolve('./views/hopper.html'));
});
app.get('/lovelance', (req, res) => {
	res.sendFile(path.resolve('./views/lovelance.html'));
});
app.get('/turing', (req, res) => {
	res.sendFile(path.resolve('./views/turing.html'));
});


