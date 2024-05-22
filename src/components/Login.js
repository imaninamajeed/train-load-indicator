import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "./logo.png";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post("http://localhost:5000/login", {
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
					<img src={logo} alt="Logo" height={900} width={1600} />
				</div>
				<form onSubmit={handleLogin}>
					<h2>Login</h2>
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
					<button type="submit">Login</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
