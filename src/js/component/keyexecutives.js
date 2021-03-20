import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const axios = require("axios");

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2
});

export const KeyExecutives = props => {
	var _ = require("lodash");
	const apikey = process.env.FMP_API_GLOBAL;
	const fmp_url = process.env.FMP_API_URL;
	const [getExecutives, setExecutives] = useState([]);
	const stockSymbol = props.name;

	//https://financialmodelingprep.com/api/v3/key-executives/AAPL?apikey=990e5576342d94ae68643280da08fa5b

	useEffect(() => {
		axios
			.get(`${fmp_url}/api/v3/key-executives/${stockSymbol}?apikey=${apikey}`)
			.then(function(response) {
				setExecutives(response.data);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}, []);
	return (
		<>
			<section className="section">
				<div className="container">
					<div className="b-table">
						<div className="table-wrapper has-mobile-cards">
							<table className="table is-fullwidth is-striped is-fullwidth">
								<thead>
									<tr>
										<th>Title</th>
										<th>Name</th>
										<th>Pay</th>
										<th>Currency</th>
										<th>Gender</th>
										<th>Year Born</th>
									</tr>
								</thead>
								<tbody className="table-striped">
									{getExecutives.map((executives, index) => {
										return (
											<tr key={index}>
												<td data-label="Title">{executives.title}</td>
												<td data-label="Name">{executives.name}</td>
												<td data-label="Pay">
													{executives.pay == null ? "N/A" : formatter.format(executives.pay)}
												</td>
												<td data-label="Currency">
													{executives.currencyPay == null ? "N/A" : executives.currencyPay}
												</td>
												<td data-label="Gender">
													{executives.gender == "" ? "N/A" : _.upperFirst(executives.gender)}
												</td>
												<td data-label="Year Born">
													<small
														className="has-text-grey is-abbr-like"
														title={
															executives.yearBorn == null ? "N/A" : executives.yearBorn
														}>
														{executives.yearBorn == null ? "N/A" : executives.yearBorn}
													</small>
												</td>
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

KeyExecutives.propTypes = {
	name: PropTypes.string
};
