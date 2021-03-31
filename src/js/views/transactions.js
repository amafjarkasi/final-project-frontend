import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { Context } from "../store/appContext";
import { Pane, Alert } from "evergreen-ui";

const axios = require("axios");

const formatter = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 2
});

export const Transactions = () => {
	const { store, actions } = useContext(Context);
	const [stockfind, setStockFind] = useState();
	const [getPurchase, setPurchase] = useState("0");
	const [getQuantity, setQuantity] = useState();
	const [results, setResults] = useState(false);

	useEffect(() => {
		axios
			.get(`${store.base_url}/buy`)
			.then(function(response) {
				if (response.data.length) {
					setStockFind(response.data);
					setResults(true);
				} else {
					setResults(false);
				}
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				// always executed
			});
	}, []);

	function LookupNews() {
		let quantity_counter = 0;
		let total_counter = 0;
		return (
			<>
				<table className="table is-fullwidth">
					<thead className="thead-dark is-fullwidth has-text-centered">
						<tr>
							<th scope="col">Date</th>
							<th scope="col">Symbol</th>
							<th scope="col">Price</th>
							<th scope="col">Quantity</th>
							<th scope="col">Total Purchase</th>
						</tr>
					</thead>
					<tbody className="table-striped">
						{stockfind.map((transactions, index) => {
							quantity_counter += parseInt(transactions.quantity);
							total_counter += parseInt(transactions.total_purchase);
							return (
								<tr className="has-text-centered" key={index}>
									<td>{transactions.date}</td>
									<td>{transactions.symbol}</td>
									<td>{"$" + parseInt(transactions.price).toFixed(2)}</td>
									<td>{transactions.quantity}</td>
									<td>{"$" + parseInt(transactions.total_purchase).toFixed(2)}</td>
								</tr>
							);
						})}
						{(setQuantity(quantity_counter), setPurchase(total_counter))}
					</tbody>
				</table>
			</>
		);
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
							<h3 className="title is-3 pb-3 is-spaced">Transaction History</h3>
							<div className="container pr-7">
								<div className="box is-fullwidth">
									<div className="notification is-primary is-light is-fullwidth has-text-centered">
										Total Quantity Purchased:{" "}
										<strong>{getQuantity > 0 ? getQuantity : "Calculating..."}</strong>
										<br />
										Total Amount Purchased:{" "}
										<strong>
											{getPurchase > 0 ? formatter.format(getPurchase) : "Calculating..."}
										</strong>
									</div>
								</div>
								<div className="box is-fullwidth">{!results ? "Loading..." : <LookupNews />}</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
