import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
// import Register from "./components/Register";
import PrivateRoute from "./routing/PrivateRoute";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins"; // Defaults to weight 400

ReactDOM.render(
	<Router>
		<Routes>
			<Route path="/login" element={<Login />} />
			{/* <Route path="/register" element={<Register />} /> */}
			<Route element={<PrivateRoute />}>
				<Route path="/" element={<App />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Route>
		</Routes>
	</Router>,
	document.getElementById("root")
);
