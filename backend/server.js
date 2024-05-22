const express = require("express"); // imports Express framework to build web apps in Node.js (to create web server)
const bodyParser = require("body-parser"); // imports the body-parser middleware, which helps parse incoming request bodies in a middleware before your handlers, available under the req.body property.
const cors = require("cors"); // imports the CORS middleware, which allows your server to accept requests from other domains. It's useful for enabling Cross-Origin Resource Sharing
const jwt = require("jsonwebtoken"); // imports the JSON Web Token library, to create and verify tokens. These tokens are used for authentication.
const bcrypt = require("bcryptjs"); // imports the bcrypt.js library, which is used for hashing passwords. Hashing is a way to securely store passwords.

const app = express(); //  creates an instance of an Express application, to configure your server and handle routes.
const PORT = process.env.PORT || 5000; // sets the port number on which your server will listen for requests

app.use(bodyParser.json()); // adds the body-parser middleware to app, to parse JSON request bodies and make the data available on req.body
app.use(cors()); //  adds the CORS middleware to your app, enabling your server to handle requests from different origins (domains)

const users = [
	{
		username: "recogine",
		password: "$2a$08$2atN3ijgHmYHoe0XkZJt1.dfJ0.SJyGT1biFkloElrgue6IO2ZO/i",
	},
]; // This is a simple in-memory user storage. For a real application, use a database.

// Register route
// app.post("/register", (req, res) => {
// 	// Defines a POST route at the /register endpoint.
// 	const { username, password } = req.body; // Extracts the username and password from the request body
// 	const hashedPassword = bcrypt.hashSync(password, 8); // Hashes the password with a salt factor of 8
// 	users.push({ username, password: hashedPassword }); // Adds the new user with the hashed password to the users array.
// 	console.log(users);
// 	res.status(200).send({ message: "User registered successfully" }); // Sends a success response back to the client
// });

// Login route
app.post("/login", (req, res) => {
	// Defines a POST route at the /login endpoint.
	const { username, password } = req.body; // Extracts the username and password from the request body.

	const user = users.find((u) => u.username === username); // Finds the user in the users array by username
	if (user && bcrypt.compareSync(password, user.password)) {
		// Checks if the user exists and if the password matches the hashed password stored.
		const token = jwt.sign({ id: user.username }, "your_jwt_secret", {
			expiresIn: 86400,
		}); // If the password is correct, creates a JWT token that expires in 24 hours.
		res.status(200).send({ auth: true, token }); //  Sends a success response with the token.
		console.log(`Logging in user: ${username}`); // Logging username only
	} else {
		res.status(401).send({ auth: false, token: null }); // If the login fails, sends a response indicating the authentication failed
		console.log(`Logging in user: ${username} - FAILED`); // Logging username only
	}
});

// This starts the server and makes it listen on the specified port. Once the server is running, it logs a message to the console indicating the port number.
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
