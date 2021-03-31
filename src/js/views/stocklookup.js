import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2
});

const axios = require("axios");

export const StockLookup = () => {
	const [stockfind, setStockFind] = useState();
	const [getStocks, setStocks] = useState();
	const [mapped, setMapped] = useState();
	const [results, setResults] = useState(false);
	const [hideBuy, sethideBuy] = useState(true);
	const [stocksymbol, setStockSymbol] = useState("");
	const finn_token = process.env.FINNHUB_API_GLOBAL;

	useEffect(() => {
		const getData = async () => {
			let mapped = [];
			if (getStocks != undefined || getStocks != null) {
				mapped = Object.entries(getStocks);
				setMapped(mapped);
			}
		};
		getData();
	}, [getStocks]);
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

		// const mapped = Object.entries(getStocks).map(([k, v]) => `${k}_${v}`);

		if (!_.isEmpty(obj)) {
			for (const prop in obj) {
				let prop_convert = _.startCase(`${prop}`);
				rows.push(`${prop_convert}: ${obj[prop]}`);
			}
			return (
				<>
					<div className="box">
						<div className="list pb-5">
							<h4 className="title is-4 pt-5 pb-3 is-spaced has-text-danger has-text-centered">
								Basic Financials (Annual)
							</h4>
							<table className="table is-fullwidth">
								<thead className="thead-dark is-fullwidth has-text-centered">
									<tr>
										<th scope="col">52 Week Avg</th>
										<th scope="col">Asset Turnover</th>
										<th scope="col">Cash/Share</th>
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
								<tbody className="table-striped">
									<tr className="has-text-centered">
										{/* {mapped.map((value, index) => console.log("$", value.bookValuePerShareAnnual))} */}
										{/* {mapped.map((stockoutput, index) => (
											<div key={index}> */}
										{/* {console.log("$", mapped[1])} */}
										<td>{"$" + ((mapped[4][1] - mapped[6][1]) / 2).toFixed(2)}</td>
										<td>{mapped[10][1].toFixed(2)}</td>
										<td>{mapped[19][1].toFixed(2) + "%"}</td>
										<td>{mapped[24][1].toFixed(2)}</td>
										<td>{mapped[45][1].toFixed(2)}</td>
										<td>{mapped[53][1].toFixed(2) + "%"}</td>
										<td>{mapped[57][1].toFixed(2) + "%"}</td>
										<td>
											{"$ ("}
											{mapped[61][1] < 0
												? mapped[61][1].toFixed(2)
												: "+" + mapped[61][1].toFixed(2)}
											)
										</td>
										<td>{mapped[69][1].toFixed(2) + "%"}</td>
										<td>{mapped[72][1].toFixed(2) + "%"}</td>
										<td>{mapped[100][1].toFixed(2) + "x"}</td>
										{/* </div>
										))} */}
									</tr>
								</tbody>
							</table>
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
			// axios
			fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${stocksymbol}&metric=all&token=${finn_token}`)
				.then(response => response.json())
				.then(data => {
					console.log("DATA", data);
					setStockFind(data);
					setStocks(data.metric);
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
							<div className="container pr-7">
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
