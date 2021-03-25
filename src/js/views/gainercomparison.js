import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import PropTypes from "prop-types";
const axios = require("axios");

export const GainerComparison = props => {
	const fmp_url = process.env.FMP_API_URL;
	const apikey = process.env.FMP_API_GLOBAL;
	const [getBatch, setBatch] = useState([]);
	const [getCompanies, setCompanies] = useState("");
	const globalSymbols = props.location.state.comparisons;

	function getStockData(inputSymbols) {
		let symbolCombine = "";
		for (let initial = 0; initial < inputSymbols.length; initial++) {
			initial !== inputSymbols.length - 1
				? (symbolCombine += inputSymbols[initial] + ",")
				: (symbolCombine += inputSymbols[initial]);
		}
		const symbolFinal = symbolCombine;
		setCompanies(symbolFinal);
		return symbolFinal;
	}

	useEffect(() => {
		const updatedSymbols = getStockData(globalSymbols);
		axios
			.get(`${fmp_url}/api/v3/quote/${updatedSymbols}?apikey=${apikey}`)
			.then(function(response) {
				setBatch(response.data);
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
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<section className="section">
						<h3 className="title is-3 pb-3 is-spaced">Stock Comparisons</h3>
						<div className="container">
							<div className="box">
								<table className="table is-fullwidth">
									<thead className="thead-dark">
										<tr>
											<th scope="col">Symbol</th>
											<th scope="col">Company</th>
											<th scope="col">Price</th>
											<th scope="col">Change</th>
											<th scope="col">Day Low</th>
											<th scope="col">Day High</th>
											<th scope="col">Year Low</th>
											<th scope="col">Year High</th>
											<th scope="col">Avg 50</th>
											<th scope="col">Buy</th>
											<th scope="col">Analysis</th>
										</tr>
									</thead>
									<tbody className="table-striped">
										{getBatch
											? getBatch.map((value, index) => {
													return (
														<tr key={index}>
															<td>{value.symbol}</td>
															<td>
																{value.name.length > 35
																	? value.name.slice(0, 35) + "..."
																	: value.name}
															</td>
															<td>${value.price.toFixed(2)}</td>
															<td>{value.changesPercentage}%</td>
															<td>${value.dayLow.toFixed(2)}</td>
															<td>${value.dayHigh.toFixed(2)}</td>
															<td>${value.yearLow.toFixed(2)}</td>
															<td>${value.yearHigh.toFixed(2)}</td>
															<td>${value.priceAvg50.toFixed(2)}</td>
															<td>
																<Link to={`/buy/${value.symbol}`}>
																	<button
																		type="button"
																		className="button is-primary is-small fas fa-money-bill-wave"
																	/>
																</Link>
															</td>
															<td>
																<Link to={`/analysis/${value.symbol}`}>
																	<button
																		type="button"
																		className="button is-success is-small fas fa-chart-line"
																	/>
																</Link>
															</td>
														</tr>
													);
											  })
											: "Loading..."}
									</tbody>
								</table>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

GainerComparison.propTypes = {
	location: PropTypes.object
};
