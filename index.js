const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
const students = [
	{
		firstname: "Peace",
		school: "LAUTECH",
		lastname: "Afolabi",
		id: 1
	},
	{
		firstname: "Dorcas",
		school: "UDUS",
		lastname: "Adeyemo",
		id: 2
	},
	{
		firstname: "Favour",
		school: "LAUTECH",
		lastname: "Afolabi",
		id: 3
	}
]

app.get("/", (req, res) => {
	const student = {
		firstname: "Felix",
		dept: "Software Engineering",
		school: "SQI"
	}
	const mySchool = {
		name: "Soft Quest Incoporated",
		address: "Opposite Yoaco filling Station"
	}
	const score = 60;

	res.render("pages/home", {
		student, mySchool, score, students
	});
})

app.get("/about", (req, res) => {
	res.render("pages/about");
})

app.get("/students/:id", (req,res) => {
	const {id} = students.find(c => c.id == req.params.id);
	const details = students.findIndex((i => i.id === id))
	// const details = students.findIndex({id})
	const message = students[details]
	res.render("pages/students", {message});
})

// app.get("/students/:id", (req, res) => {
// 	const {id} = req.params;
// 	const {id} = students.find(s => s.id === req.params.id);
// 	console.log(id)
// 	const details = students.findIndex((i => i.id === id))
// 	const details = students.findIndex({id})
// 	const message = students[details]
// 	res.render("students", {message});
// })

app.get("/contact", (req, res) => {
	res.render("pages/contact");
})

app.get("/home", (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.listen("3200", () => {
	console.log("server is running at port 3200");
})