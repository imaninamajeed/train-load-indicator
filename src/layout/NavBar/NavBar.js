import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	return (
		<nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<Link className="navbar-brand" to="/">
					CDA: TRAIN LOAD INDICATOR
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse justify-content-end"
					id="navbarNav"
				>
					<ul className="navbar-nav nav-tabs">
						<li className="nav-item">
							<Link className="nav-link active text-bold" to="/">
								Train Load View
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/dashboard">
								Dashboard
							</Link>
						</li>
						<li className="nav-item">
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<Link
								to="/login"
								className="nav-link"
								onClick={() => localStorage.removeItem("token")}
							>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
