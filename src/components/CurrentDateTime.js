import React, { useState, useEffect } from "react";
import moment from "moment";

const CurrentDateTime = () => {
	const [currentDateTime, setCurrentDateTime] = useState(
		moment().format("ddd, Do MMM, YYYY - hh:mm A")
	);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentDateTime(moment().format("ddd, Do MMM, YYYY - hh:mm A"));
		}, 1000);

		// Clean up the interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

	return <div>{currentDateTime}</div>;
};

export default CurrentDateTime;
