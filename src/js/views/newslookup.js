import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const axios = require("axios");

export const NewsLookup = () => {
	const [stockfind, setStockFind] = useState();
	const [results, setResults] = useState(false);
	const [hideBuy, sethideBuy] = useState(true);
	const [stocksymbol, setStockSymbol] = useState("");
	const apikey = process.env.FMP_API_GLOBAL;
	const fmp_url = process.env.FMP_API_URL;

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
		var _ = require("lodash");

		return (
			<>
				<div className="box is-borderless">
					<div className="rows">
						{stockfind.map((news, index) => {
							return (
								<>
									<div className="row mb-0 pb-0 is-striped">
										<article className="media is-small mb-0 pb-0" key={index}>
											<figure className="media-left">
												<p className="image is-128x128">
													<img src={news.image} />
												</p>
											</figure>
											<div className="media-content">
												<div className="content">
													<p>
														<a href={news.url} rel="noreferrer" target="_blank">
															<strong>{news.title}</strong>
														</a>
														<br />

														{news.text.length > 220
															? news.text.slice(0, 220) + "..."
															: news.text}
													</p>
												</div>
											</div>
										</article>
									</div>
								</>
							);
						})}
					</div>
				</div>
			</>

			//     )} else {
			// 	sethideBuy(true);
			// 	return (
			// 		<div className="box">
			// 			<div className="list">
			// 				<h5 className="title is-5 pb-3 is-spaced has-text-danger">No Results</h5>
			// 			</div>
			// 		</div>
			// 	);
			// }
		);
	}

	function clearStockLookup() {
		document.getElementById("inputStock").value = "";
		sethideBuy(true);
		setResults(false);
	}

	function handleStockLookup(e) {
		if (stocksymbol != "") {
			axios
				.get(`${fmp_url}/api/v3/stock_news?tickers=${stocksymbol}&limit=10&apikey=${apikey}`)
				.then(function(response) {
					if (response.data.length) {
						setStockFind(response.data);
						setResults(true);
						sethideBuy(false);
					} else {
						setResults(false);
						sethideBuy(true);
					}
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
							<h3 className="title is-3 pb-3 is-spaced">Company News Lookup</h3>
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
