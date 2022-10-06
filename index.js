const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get("/", (request, response) => {
	response.render("pages/home");
})

app.get("/about", (request, response) => {
	response.render("pages/about");
})

app.get("/contact", (request, response) => {
	response.render("pages/contact");
})

app.get("/home", (request, response) => {
	response.sendFile(__dirname + '/index.html');
})

app.listen("3200", () => {
	console.log("server is running at port 3200");
})