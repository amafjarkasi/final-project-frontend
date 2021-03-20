import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { AggIndicator } from "../component/aggindicator";
import { CompanySentiment } from "../component/companysentiment";
import { KeyExecutives } from "../component/keyexecutives";
import PropTypes from "prop-types";

const fmp_url = "https://financialmodelingprep.com/";
const fcs_url = "https://fcsapi.com/";
const finn_token = "c0vsqsv48v6t383lq1kg";

export const Analysis = props => {
	const [analyzedata, setAnalyzeData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const apikey = process.env.FMP_API_GLOBAL; // da6240539dc1685ff601c5c2edb3ff29
	const symbol = props.match.params.tickerSymbol;

	function BuyStock() {
		return (
			<Link to={`/buy/${symbol}`}>
				<button
					className="button is-small is-primary mt-1"
					type="button"
					data-toggle="tooltip"
					data-placement="top"
					title="Buy">
					<span className="icon">
						<i className="fas fa-money-bill-wave" />
					</span>
				</button>
			</Link>
		);
	}

	useEffect(() => {
		fetch(fmp_url + `api/v3/profile/${symbol}?apikey=${apikey}`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				setAnalyzeData(resp);
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
						<h3 className="title is-3 pb-3 is-spaced is-inline-block">
							Analysis for {symbol} <BuyStock />
						</h3>
						<div className="container">
							<table className="table is-fullwidth">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Company</th>
										<th scope="col">Price</th>
										<th scope="col">Final Div</th>
										<th scope="col">Exchange</th>
										<th scope="col">Range</th>
										<th scope="col">Beta</th>
										<th scope="col">Changes</th>
										<th scope="col">Currency</th>
										<th scope="col">Address</th>
									</tr>
								</thead>
								<tbody>
									{analyzedata
										? analyzedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>
															{value.companyName.length > 35
																? value.companyName.slice(0, 35) + "..."
																: value.companyName}
														</td>
														<td>
															{value.price === null
																? "N/A"
																: "$" + value.price.toFixed(2)}
														</td>
														<td>{value.lastDiv === 0 ? "N/A" : value.lastDiv}</td>
														<td>
															{value.exchangeShortName === ""
																? "N/A"
																: value.exchangeShortName}
														</td>
														<td>{value.range === null ? "N/A" : value.range}</td>
														<td>{value.beta === null ? "N/A" : value.beta}</td>
														<td>{value.changes === null ? "N/A" : value.changes + "%"}</td>
														<td>{value.currency === null ? "N/A" : value.currency}</td>
														<td>{value.address === "" ? "N/A" : value.address}</td>
													</tr>
												);
										  })
										: "Loading..."}
									<br />
								</tbody>
							</table>
							<div className="pt-4 pb-3 is-10-tablet">
								<h5 className="title is-5">
									<i className="fas fa-dot-circle" />
									&nbsp;
									<u>News Sentiment</u>
								</h5>
								<p className="pb-2">
									One approach to analysis: tracking event-driven news. With computer reading of news
									on the rise, Wall Street is changing how reporting is digested. Many hedge funds and
									quants have thus developed ways to trade the markets based on news and social media
									sentiment, confidence, and story counts.
								</p>
								<CompanySentiment name={props.match.params.tickerSymbol} />

								{/* style="border: 1px solid #e0e3eb;" */}
							</div>
							<div className="pt-6 pb-3 is-10-tablet">
								<h5 className="title is-5">
									<i className="fas fa-dot-circle" />
									&nbsp;
									<u>Aggregate Indicators</u>
								</h5>
								<p className="pb-2">
									Trading in the direction of a strong trend reduces risk and increases profit
									potential. The average directional index (ADX) is used to determine when the price
									is trending strongly. In many cases, it is the ultimate trend indicator. This is
									examining the value of ADX as a trend strength indicator.
								</p>
								<AggIndicator name={props.match.params.tickerSymbol} />

								{/* style="border: 1px solid #e0e3eb;" */}
							</div>
							<div className="pt-6 pb-3 is-10-tablet">
								<h5 className="title is-5">
									<i className="fas fa-dot-circle" />
									&nbsp;
									<u>Technical Indicators</u>
								</h5>
								<p>
									Chart patterns are a subjective form of technical analysis where technicians attempt
									to identify areas of support and resistance on a chart by looking at specific
									patterns. These patterns, underpinned by psychological factors, are designed to
									predict where prices are headed, following a breakout or breakdown from a specific
									price point and time.
								</p>
								<iframe
									className="is-full pt-2"
									width="100%"
									frameBorder="0"
									height="100%"
									src={`https://widget.finnhub.io/widgets/stocks/chart?symbol=${symbol}&watermarkColor=white&backgroundColor=white&textColor=black`}
									title={`${symbol} Data by Finnhub Stock API`}
								/>
								{/* style="border: 1px solid #e0e3eb;" */}
							</div>
							<div className="pt-6 pb-2 is-10-tablet">
								<h5 className="title is-5">
									<i className="fas fa-dot-circle" />
									&nbsp;
									<u>Key Executives</u>
								</h5>
								<p className="pb-0">
									Key Executives means those employees of the company who are deemed to hold positions
									which may substantially influence the attainment of performance goals. Employees
									designated as key employees for the annual bonus and/or long term bonus purposes.
									They may be eligible to earn incentive compensation under the other portion of this
									plan and earn incentive compensation in future years.
								</p>
								<KeyExecutives name={props.match.params.tickerSymbol} />

								{/* style="border: 1px solid #e0e3eb;" */}
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
Analysis.propTypes = {
	match: PropTypes.object
};
