import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const axios = require("axios");

export const KeyExecutives = props => {
	const apikey = process.env.FMP_API_GLOBAL;
	const fmp_url = process.env.FMP_API_URL;
	const [getExecutives, setExecutives] = useState([]);
	const stockSymbol = props.name;
	console.log(stockSymbol);
	//https://financialmodelingprep.com/api/v3/key-executives/AAPL?apikey=990e5576342d94ae68643280da08fa5b

	useEffect(() => {
		axios
			.get(`${fmp_url}/api/v3/key-executives/${stockSymbol}?apikey=${apikey}`)
			.then(function(response) {
				setExecutives(response.data);
				console.log(response.data);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}, []);
	return <></>;
};

KeyExecutives.propTypes = {
	name: PropTypes.string
};
