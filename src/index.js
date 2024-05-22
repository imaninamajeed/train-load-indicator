import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
// import Register from "./components/Register";
import PrivateRoute from "./components/PrivateRoute";
import "./index.css";
import "@fontsource/source-sans-pro"; // Defaults to weight 400


ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/login" element={<Login />} />
			{/* <Route path="/register" element={<Register />} /> */}
			<Route element={<PrivateRoute />}>
				<Route path="/" element={<App />} />
			</Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
