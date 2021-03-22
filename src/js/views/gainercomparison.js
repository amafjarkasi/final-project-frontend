import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import PropTypes from "prop-types";

export const GainerComparison = props => {
	const fmp_url = process.env.FMP_API_URL;
	const apikey = process.env.FMP_API_GLOBAL;

	const [getbatch, setBatch] = useState([]);

	const [getCompanies, setCompanies] = useState("");

	const globalSymbols = props.location.state.comparisons;

	//const symbol = props.location.state.comparisons[0];
	// console.log(globalSymbols);
	// console.log(globalSymbols.length);
	// console.log(getStockData());

	function getStockData(inputSymbols) {
		let symbolCombine = "";
		for (let initial = 0; initial < inputSymbols.length; initial++) {
			initial !== inputSymbols.length - 1
				? (symbolCombine += inputSymbols[initial] + ",")
				: (symbolCombine += inputSymbols[initial]);
		}
		const symbolFinal = symbolCombine;
		console.log("$", symbolFinal);
		setCompanies(symbolFinal);
		return symbolFinal;
	}

	// https://financialmodelingprep.com/api/v3/quote/AAPL,FB,GOOG?apikey=990e5576342d94ae68643280da08fa5b

	useEffect(() => {
		console.log("$$", globalSymbols);
		const updatedSymbols = getStockData(globalSymbols);

		fetch(fmp_url + `api/v3/quote/${updatedSymbols}?apikey=${apikey}`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				console.log("$json: ", resp.json());
				return resp.json();
			})
			.then(resp => {
				console.log("$respbody: ", resp.body);
				console.log("$resp: ", resp.body);
				setBatch(resp);
				return true;
			})
			.catch(err => {
				console.error(err);
				return false;
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
						<div className="container">
							<table className="table is-fullwidth">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Symbol</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Change</th>
										<th scope="col">Day Low</th>
										<th scope="col">Day High</th>
										<th scope="col">Year Low</th>
										<th scope="col">Year High</th>
										<th scope="col">Avg 50</th>
									</tr>
								</thead>
								<tbody>
									{getbatch
										? getbatch.map((value, index) => {
												return (
													<tr key={index}>
														<td>{value.symbol}</td>
														<td>{value.name}</td>
														<td>{value.price}</td>
														<td>{value.changesPercentage}%</td>
														<td>{value.dayLow}</td>
														<td>{value.dayHigh}</td>
														<td>{value.yearLow}</td>
														<td>{value.yearHigh}</td>
														<td>{value.priceAvg50.toFixed(2)}</td>
													</tr>
												);
										  })
										: "Loading..."}
								</tbody>
							</table>
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
