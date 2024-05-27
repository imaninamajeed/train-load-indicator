import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo.png";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5000"; // Example of accessing environment variable in your React application

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleUsernameChange = (event) => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post(`${apiUrl}/login`, {
				username,
				password,
			});
			localStorage.setItem("token", response.data.token);
			navigate("/");
		} catch (error) {
			console.error("Error logging in", error);
		}
	};

	return (
		<div className="login-container">
			<div className="login-box">
				<div className="login-logo">
					<img src={logo} alt="Logo" />
				</div>
				<form onSubmit={handleLogin}>
					<h2>Login</h2>
					<div className="form-group">
						<label htmlFor="username">Username:</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={handleUsernameChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password:</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={handlePasswordChange}
							required
						/>
					</div>
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
