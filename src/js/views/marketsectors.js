import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const fmp_url = process.env.FMP_API_URL + "/";

export const MarketSectors = () => {
	const _ = require("lodash");
	const [data, setData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const apikey = process.env.FMP_API_GLOBAL;

	useEffect(() => {
		fetch(fmp_url + `api/v3/sectors-performance?apikey=${apikey}`, {
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
				setData(resp);
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
							<h3 className="title is-3 pb-3 is-spaced">Market Sector Performance</h3>
							{/* <Link
								to={{
									pathname: "/sectorcomparison",
									state: {
										comparisons: comparisons
									}
								}}>
								<button type="button" className="button is-medium is-warning">
									Compare
								</button>
							</Link> */}
							<br />
							<div className="container pt-6 pr-7">
								<div className="columns is-desktop">
									<table className="table is-fullwidth">
										<thead className="thead-dark is-fullwidth">
											<tr>
												{/* <th scope="col" /> */}
												<th scope="col">Sector</th>
												<th scope="col">Changes</th>
											</tr>
										</thead>
										<tbody className="table-striped">
											{data
												? data.map((value, index) => {
														return (
															<tr key={index}>
																{/* <td>
																	<input
																		type="checkbox"
																		aria-label=""
																		onClick={() =>
																			setComparisons(
																				comparisons.concat(value.sector)
																			)
																		}
																	/>
																</td> */}
																<td>{value.sector}</td>
																<td
																	style={{
																		color:
																			parseFloat(value.changesPercentage) < 0
																				? "red"
																				: "green"
																	}}>
																	{parseFloat(value.changesPercentage).toFixed(2) < 0
																		? parseFloat(value.changesPercentage).toFixed(2)
																		: "+" +
																		  parseFloat(value.changesPercentage).toFixed(
																				2
																		  )}
																	%
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
