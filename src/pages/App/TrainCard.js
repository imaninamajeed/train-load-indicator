// TrainCard.js
import React from "react";
import people from "../../assets/images/people.png";
import CurrentDateTime from "../../components/CurrentDateTime"; // Adjust the path as necessary

const TrainCard = ({ train, index }) => {
	return (
		<div key={index} className="col-lg-6 col-md-12">
			<div className="row g-0">
				<div className="col-md-6 col-xs-12">
					<div className="train-card card mb-4">
						<div className="card-body train-info train-img">
							<img
								src={people}
								alt={`${train.train_name}`}
								title={`${train.train_id}`}
								className="card-img-top train-image"
							/>
						</div>
					</div>
				</div>
				<div className="col-md-6 col-xs-12">
					<div className="train-card card mb-4">
						<div className="card-body train-info">
							<p>
								<strong>Train ID:</strong> {train.train_id}{" "}
							</p>

							<p>
								<strong>Timestamp:</strong> <CurrentDateTime />
							</p>
							<p>
								<strong>Flow Direction:</strong> {train.flow_direction}
							</p>
							<p>
								<strong>Occupancy Level:</strong>
								<span className="text-success h6">{" Low"}</span>
							</p>
							<h1 className="text-success">100%</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrainCard;
