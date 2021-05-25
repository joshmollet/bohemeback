var express = require('express');
var app = require('./app');
var bodyParser = require('body-parser');
var produitRouter = require('./server/Routers/produit_router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/produit", produitRouter);

app.listen(8000);