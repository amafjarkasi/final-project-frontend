import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2
});

const fmp_url = process.env.FMP_API_URL + "/";

export const MostActives = () => {
	var _ = require("lodash");
	const [data, setData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const apikey = process.env.FMP_API_GLOBAL;

	useEffect(() => {
		fetch(fmp_url + `api/v3/stock/actives?apikey=${apikey}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				setData(resp.mostActiveStock);
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
					<div className="container is-fluid pr-7">
						<section className="section">
							<h3 className="title is-3 pb-3 is-spaced">Most Active Stocks</h3>
							<Link
								to={{
									pathname: "/gainercomparison",
									state: {
										comparisons: comparisons
									}
								}}>
								<button type="button" className="button is-medium is-warning">
									Compare
								</button>
							</Link>
							<br />
							<div className="container pt-6 pr-7">
								<div className="columns is-desktop">
									<table className="table is-fullwidth">
										<thead className="thead-dark is-fullwidth">
											<tr>
												<th scope="col" />
												<th scope="col">Ticker</th>
												<th scope="col">Changes</th>
												<th scope="col">Price</th>
												<th scope="col">+/- %</th>
												<th scope="col">Company</th>
												<th scope="col">Buy</th>
												<th scope="col">Analysis</th>
											</tr>
										</thead>
										<tbody className="table-striped">
											{data
												? data.map((value, index) => {
														return (
															<tr key={index}>
																<td>
																	<input
																		type="checkbox"
																		aria-label=""
																		onClick={() =>
																			setComparisons(
																				comparisons.concat(value.ticker)
																			)
																		}
																	/>
																</td>
																<td>{value.ticker}</td>
																<td>{value.changes.toFixed(2) + "%"}</td>
																<td>
																	{value.price == null
																		? "N/A"
																		: formatter.format(value.price)}
																</td>
																<td
																	style={{
																		color:
																			parseFloat(
																				_.trim(
																					_.trim(
																						value.changesPercentage,
																						"%)"
																					),
																					"("
																				)
																			) < 0
																				? "red"
																				: "green"
																	}}>
																	{value.changesPercentage}
																</td>
																<td>
																	{value.companyName.length > 30
																		? value.companyName.slice(0, 30) + "..."
																		: value.companyName}
																</td>
																<td>
																	<Link to={`/buy/${value.ticker}`}>
																		<button
																			type="button"
																			className="button is-primary is-small fas fa-money-bill-wave"
																		/>
																	</Link>
																</td>
																<td>
																	<Link to={`/analysis/${value.ticker}`}>
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
			</div>
		</>
	);
};
