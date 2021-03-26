import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_GLOBAL;
const finnhubClient = new finnhub.DefaultApi();

export const AggIndicator = props => {
	var _ = require("lodash");
	const [getTrend, setTrendData] = useState({});
	const [getTechAnalysis, setTechAnalysis] = useState({});

	function analyzeADX(adx) {
		var adxcalculate = parseInt(adx);

		if (adxcalculate <= "25") {
			return "Weak ADX Trend";
		} else if (adxcalculate > "25" && adxcalculate <= "50") {
			return "Strong ADX Trend";
		} else if (adxcalculate > "50" && adxcalculate <= "75") {
			return "Very Strong ADX Trend";
		} else {
			return "Extremely Strong ADX Trend";
		}
	}

	useEffect(() => {
		finnhubClient.aggregateIndicator(`${props.name}`, "M", (error, data, response) => {
			setTrendData(response.body.trend);
			setTechAnalysis(response.body.technicalAnalysis);
		});
	}, []);
	return (
		<>
			<div>
				<p>
					<i className="fas fa-check has-text-success" />
					&nbsp;
					{getTrend.adx != null ? `${analyzeADX(getTrend.adx)}` : "N/A"}
					<br />
					<i className="fas fa-thumbs-up has-text-info" />
					&nbsp;
					{getTechAnalysis.signal != "" ? _.upperFirst(getTechAnalysis.signal) + " Purchase Signal" : "N/A"}
					<br />
					<i className="fas fa-chart-bar has-text-danger" />
					&nbsp;
					{getTrend.trending ? "Trending Up" : "Not Trending Up"}
				</p>
			</div>
		</>
	);
};

AggIndicator.propTypes = {
	name: PropTypes.object
};
