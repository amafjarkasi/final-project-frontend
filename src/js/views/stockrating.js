import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { CircularProgressbar } from "react-circular-progressbar";
import { Badge, Pane, Paragraph } from "evergreen-ui";
import "react-circular-progressbar/dist/styles.css";

const fmp = require("financialmodelingprep")(process.env.FMP_API_GLOBAL);

export const StockRating = () => {
	const [stockfind, setStockFind] = useState([]);
	const [ratingSymbol, setRatingSymbol] = useState([]);
	const [results, setResults] = useState(false);
	const [hideBuy, sethideBuy] = useState(true);
	const [stocksymbol, setStockSymbol] = useState("");

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

	function LookupNews() {
		const value = stockfind.score;
		if (value !== null) {
			console.log(value);
			return (
				<>
					<div className="box is-borderless">
						<div className="rows">
							<div className="row pb-1 pt-0">
								<h4 className="title is-4 pb-3 is-spaced has-text-primary has-text-centered">
									{ratingSymbol} - Consensus Rating
								</h4>
								<Paragraph size={400} marginTop="default" className="pb-2">
									To reach an opinion and communicate the value and volatility of a covered security,
									analysts research public financial statements, listen in on conference calls and
									talk to managers and the customers of a company, typically in an attempt to come up
									with findings for a research report. Analysts research public financial statements,
									listen in on conference calls and talk to managers and the customers of a company.
									Ultimately, through all this investigation into the companys performance, the
									analyst decides whether the stock is a buy, sell, or hold.
								</Paragraph>
								<p>
									<Pane
										display="flex"
										className="has-text-centered are-large is-justify-content-center">
										<Pane flexBasis={300} className="are-large">
											<Badge color="red" marginRight={8}>
												Recommendation: {stockfind.recommendation}
											</Badge>
											<Badge color="blue">Rating: {stockfind.rating}</Badge>
										</Pane>
									</Pane>
								</p>
							</div>
							<div className="row mb-0 pt-4">
								<div className="container" style={{ width: 100, height: 100 }}>
									<CircularProgressbar
										className="is-flex is-vcentered is-align-self-center is-justify-content-center is-align-content-center"
										value={value}
										maxValue={5}
										text={`${value}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			);
		} else {
			sethideBuy(true);
			setResults(false);
		}
	}

	function clearStockLookup() {
		document.getElementById("inputStock").value = "";
		sethideBuy(true);
		setResults(false);
	}

	function handleStockLookup(e) {
		if (stocksymbol != "") {
			fmp.stock(`${stocksymbol}`)
				.rating()
				.then(response => {
					var data_update = response;
					setStockFind(data_update.rating);
					setRatingSymbol(data_update.symbol);
					setResults(true);
					sethideBuy(false);
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
							<h3 className="title is-3 pb-3 is-spaced">Analyst Rating Consensus</h3>
							<div className="container pr-7">
								<table className="table is-fullwidth">
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
									{!results ? "" : <LookupNews />}
								</table>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
