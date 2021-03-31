import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const axios = require("axios");

export const StockLookup = () => {
	const [stockfind, setStockFind] = useState();
	const [getStocks, setStocks] = useState();
	const [results, setResults] = useState(false);
	const [hideBuy, sethideBuy] = useState(true);
	const [stocksymbol, setStockSymbol] = useState("");
	const finn_token = process.env.FINNHUB_API_GLOBAL;

	function BuyStock() {
		if (!hideBuy) {
			sethideBuy(false);
			return (
				<>
					<p className="control is-medium">
						<Link to={`/buy/${stocksymbol}`}>
							<button
								className="button is-medium is-primary"
								type="button"
								data-toggle="tooltip"
								data-placement="top"
								title="Buy">
								<span className="icon">
									<i className="fas fa-money-bill-wave" />
								</span>
							</button>
						</Link>
					</p>
					<p className="control is-medium">
						<Link to={`/analysis/${stocksymbol}`}>
							<button
								className="button is-medium is-success"
								type="button"
								data-toggle="tooltip"
								data-placement="top"
								title="Analysis">
								<span className="icon">
									<i className="fas fa-chart-line" />
								</span>
							</button>
						</Link>
					</p>
				</>
			);
		} else {
			sethideBuy(true);
			return "";
		}
	}

	function Lookup() {
		var _ = require("lodash");
		var obj = stockfind.metric;
		var rows = [];

		const mapped = Object.entries(getStocks.metric).map(([k, v]) => `${k}_${v}`);
		console.log(mapped);

		if (!_.isEmpty(obj)) {
			for (const prop in obj) {
				let prop_convert = _.startCase(`${prop}`);
				rows.push(`${prop_convert}: ${obj[prop]}`);
			}
			return (
				<>
					<div className="box">
						<div className="list">
							<h4 className="title is-4 pb-3 is-spaced has-text-danger has-text-centered">
								Annual Basic Financials
							</h4>
							<table className="table is-fullwidth">
								<thead className="thead-dark is-fullwidth">
									<tr>
										<th scope="col">52 Week</th>
										<th scope="col">Asset Turnover</th>
										<th scope="col">Cash Per Share</th>
										<th scope="col">Current Ratio</th>
										<th scope="col">EPS</th>
										<th scope="col">Gross Margin</th>
										<th scope="col">LT Debt Eq</th>
										<th scope="col">Net Debt</th>
										<th scope="col">Net Profit Margin</th>
										<th scope="col">Operating Margin</th>
										<th scope="col">Quick Ratio</th>
									</tr>
								</thead>
							</table>
							<ul>
								{mapped.map((value, index) => console.log("$", value))}
								{rows.map((stockoutput, index) => (
									<div className="list-item" key={index}>
										<li>{stockoutput}</li>
									</div>
								))}
							</ul>
						</div>
					</div>
				</>
			);
		} else {
			sethideBuy(true);
			return (
				<div className="box">
					<div className="list">
						<h5 className="title is-5 pb-3 is-spaced has-text-danger">No Results</h5>
					</div>
				</div>
			);
		}
	}

	function clearStockLookup() {
		document.getElementById("inputStock").value = "";
		sethideBuy(true);
		setResults(false);
	}

	function handleStockLookup(e) {
		if (stocksymbol != "") {
			axios
				.get(`https://finnhub.io/api/v1/stock/metric?symbol=${stocksymbol}&metric=all&token=${finn_token}`)
				.then(function(response) {
					setStockFind(response.data);
					setStocks(response.data);
					setResults(true);
					sethideBuy(false);
				})
				.catch(function(error) {
					console.log(error);
				})
				.then(function() {
					// always executed
				});
		} else {
			sethideBuy(true);
			setResults(false);
		}
	}
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-7">
						<section className="section">
							<h3 className="title is-3 pb-3 is-spaced">Quick Stock Lookup</h3>
							<div className="container pt-3 pr-7">
								{/* <div className="columns is-desktop"> */}
								<div className="container is-fullwidth">
									<div className="box is-fullwidth">
										<div className="field has-addons is-medium">
											<p className="control is-medium">
												<input
													id="inputStock"
													className="input is-medium"
													type="text"
													placeholder="Stock symbol"
													onChange={e => setStockSymbol(e.target.value)}
												/>
											</p>
											<p className="control is-medium">
												<button
													className="button is-medium is-danger"
													type="button"
													data-toggle="tooltip"
													data-placement="top"
													title="Search"
													onClick={handleStockLookup}>
													<span className="icon">
														<i className="fas fa-search" />
													</span>
												</button>
											</p>
											<p className="control is-medium">
												<button
													className="button is-medium is-warning"
													type="button"
													data-toggle="tooltip"
													data-placement="top"
													title="Clear"
													onClick={clearStockLookup}>
													<span className="icon">
														<i className="fas fa-trash-alt" />
													</span>
												</button>
											</p>
											{results ? <BuyStock /> : ""}
										</div>
									</div>
								</div>
								{!results ? "" : <Lookup />}
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
