import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_GLOBAL;
const finnhubClient = new finnhub.DefaultApi();

export const CompanySentiment = props => {
	var _ = require("lodash");
	const [getSentiment, setSentiment] = useState({});
	const [getBuzz, setBuzz] = useState({});
	const [getCompany, setCompany] = useState();

	useEffect(() => {
		//const stocksymbol = _.replace(props.name, "-", "");
		finnhubClient.newsSentiment(`${props.name}`, (error, data, response) => {
			setSentiment(response.body.sentiment);
			setBuzz(response.body.buzz);
			setCompany(response.body.companyNewsScore);
		});
	}, []);

	function BearSentiment() {
		return getSentiment != null ? _.round(getSentiment.bearishPercent * 100) + "%" : "N/A";
	}
	function BullSentiment() {
		return getSentiment != null ? _.round(getSentiment.bullishPercent * 100) + "%" : "N/A";
	}
	function BuzzSentiment() {
		return getBuzz != null ? _.round(getBuzz.buzz * 100) + "%" : "N/A";
	}
	function CompSentiment() {
		return getCompany != null ? _.round(getCompany * 100) + "%" : "N/A";
	}

	return (
		<>
			<div>
				<p>
					<i className="fas fa-circle has-text-primary" />
					{` Current Buzz/Weekly Average:`}{" "}
					<strong className="has-text-primary">
						<BuzzSentiment />
					</strong>
					<br />
					<i className="fas fa-circle has-text-danger" />
					{` Bearish Sentiment:`}{" "}
					<strong className="has-text-danger">
						<BearSentiment />
					</strong>
					<br />
					<i className="fas fa-circle has-text-info" />
					{` Company Sentiment:`}{" "}
					<strong className="has-text-info">
						<CompSentiment />
					</strong>
					<br />
					<i className="fas fa-circle has-text-success" />
					{` Bullish Sentiment:`}{" "}
					<strong className="has-text-success">
						<BullSentiment />
					</strong>
					<br />
				</p>
			</div>
		</>
	);
};

CompanySentiment.propTypes = {
	name: PropTypes.object
};
