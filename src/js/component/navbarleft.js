import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

// rgb(148 180 147)

export const NavbarLeft = () => {
	return (
		<>
			<div className="container is-fluid pt-5">
				<aside className="menu">
					<p className="menu-label">General</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/dashboard" activeClassName="is-active-here">
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to="/profile" activeClassName="is-active-here">
								Profile
							</NavLink>
						</li>
						<li>
							<NavLink to="/portfolio" activeClassName="is-active-here">
								Portfolio
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Stock Research</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/stocklookup" activeClassName="is-active-here">
								Stock Lookup
							</NavLink>
						</li>
						<li>
							<NavLink to="/stockrating" activeClassName="is-active-here">
								Stock Rating
							</NavLink>
						</li>
						<li>
							<NavLink to="/newslookup" activeClassName="is-active-here">
								Company News
							</NavLink>
						</li>
						<li>
							<NavLink to="/marketsectors" activeClassName="is-active-here">
								Market Sectors
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostactives" activeClassName="is-active-here">
								Most Actives
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostgainer" activeClassName="is-active-here">
								Most Gainer
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostloser" activeClassName="is-active-here">
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
