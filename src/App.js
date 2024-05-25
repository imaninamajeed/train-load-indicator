import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar/NavBar";
import Footer from "./layout/Footer/Footer";
import trains from "./data/trainData.json"; // Importing the trains data
import TrainCard from "./pages/App/TrainCard";

const App = () => {
	return (
		<>
			<NavBar />
			<div className="container main">
				<div className="card" id="overview">
					<h2 className="">Overview of Train Loads</h2>
					<div className="container train-details">
						<div className="row">
							{trains.map((train, index) => (
								<TrainCard key={index} train={train} />
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default App;
