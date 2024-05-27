import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Example of accessing environment variable in your React application


const Register = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await axios.post(`${apiUrl}/register`, {
				username,
				password,
			});
            navigate("/login");
		} catch (error) {
			console.error("Error registering", error);
		}
	};

	return (
		<div>
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
				<div>
					<label>Username</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default Register;
