import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

export const NavbarLeft = () => {
	return (
		<>
			<div className="container is-fluid pt-5">
				<aside className="menu">
					<p className="menu-label">General</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/dashboard" activeClassName="is-active">
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to="/profile" activeClassName="is-active">
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink to="/portfolio" activeClassName="is-active">
								Portfolio
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Stock Research</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/stocklookup" activeClassName="is-active">
								Stock Lookup
							</NavLink>
						</li>
						<li>
							<NavLink to="/stockrating" activeClassName="is-active">
								Stock Rating
							</NavLink>
						</li>
						<li>
							<NavLink to="/newslookup" activeClassName="is-active">
								Company News
							</NavLink>
						</li>
						<li>
							<NavLink to="/marketsectors" activeClassName="is-active">
								Market Sectors
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostactives" activeClassName="is-active">
								Most Actives
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostgainer" activeClassName="is-active">
								Most Gainer
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostloser" activeClassName="is-active">
								Most Loser
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Transactions</p>
					<ul className="menu-list">
						<li>
							<a>History</a>
						</li>
						<li>
							<a>Transfers</a>
						</li>
						<li>
							<a>Balance</a>
						</li>
					</ul>
				</aside>
			</div>
		</>
	);
};
