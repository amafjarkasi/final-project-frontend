import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const fmp_url = process.env.FMP_API_URL + "/";
const fcs_url = process.env.FCS_API_URL + "/";

export const Buy = props => {
	const { store, actions } = useContext(Context);
	const [analyzedata, setAnalyzeData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const [stockprice, setStockPrice] = useState("0");
	const [comparePrice, setComparePrice] = useState("0");

	const apikey = process.env.FMP_API_GLOBAL;
	const symbol = props.match.params.tickerSymbol;

	const [buyStock, setBuyStock] = useState({
		symbol: "",
		price: "",
		date: "",
		quantity: "",
		total_purchase: ""
	});

	// const handleChange = event => setBuyStock({ ...buyStock, [event.target.name]: event.target.value });

	function Analysis() {
		return (
			<Link to={`/analysis/${symbol}`}>
				<button
					className="button is-small is-success mt-1"
					type="button"
					data-toggle="tooltip"
					data-placement="top"
					title="Buy">
					<span className="icon">
						<i className="fas fa-chart-line" />
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
				setComparePrice(resp[0].price);
				setBuyStock({ ...buyStock, date: new Date().toLocaleDateString(), symbol: symbol });
				return true;
			})
			.catch(err => {
				console.error(err);
				return false;
			});
	}, []);

	function handlePriceChange(e) {
		setStockPrice((comparePrice * e.target.value).toFixed(2));
		let updated_purchase_price = (comparePrice * e.target.value).toFixed(2);
		setBuyStock({
			...buyStock,
			price: `${comparePrice}`,
			total_purchase: updated_purchase_price,
			quantity: e.target.value
		});
	}

	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<section className="section">
						<h3 className="title is-3 pb-3 is-spaced is-spaced is-inline-block">
							Buy for {symbol} <Analysis />
						</h3>
						<div className="container">
							<table className="table is-fullwidth">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Company</th>
										<th scope="col">Current Price</th>
										<th scope="col">Buy</th>
										<th scope="col">Total Purchase</th>
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
														<td>
															<div className="field has-addons is-small">
																<p className="control is-small">
																	<span className="select is-small">
																		<select>
																			<option>$</option>
																		</select>
																	</span>
																</p>
																<p className="control is-small">
																	<input
																		className="input is-small"
																		type="text"
																		placeholder="Amount of shares"
																		value={buyStock.quantity}
																		onChange={handlePriceChange}
																	/>
																</p>
																<p className="control is-small">
																	<a
																		type="button"
																		className="button is-small is-primary"
																		onClick={() => actions.buy(buyStock)}>
																		Purchase
																	</a>
																</p>
															</div>
														</td>
														<td>${stockprice === "0" ? "0" : stockprice}</td>
													</tr>
												);
										  })
										: "Loading..."}
									<br />
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
Buy.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object
};
