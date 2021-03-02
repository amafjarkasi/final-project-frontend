import React from "react";
import { Link } from "react-router-dom";
import InvestLogo from "../../img/InvestLogo.png";

export const NavbarLeft = () => {
	return (
		<>
			<div className="container is-fluid pt-5">
				<aside className="menu">
					<p className="menu-label">General</p>
					<ul className="menu-list">
						<li>
							<a>Dashboard</a>
						</li>
						<li>
							<a>Customers</a>
						</li>
					</ul>
					<p className="menu-label">Administration</p>
					<ul className="menu-list">
						<li>
							<a>Team Settings</a>
						</li>
						<li>
							<a className="is-active">Manage Your Team</a>
							<ul>
								<li>
									<a>Members</a>
								</li>
								<li>
									<a>Plugins</a>
								</li>
								<li>
									<a>Add a member</a>
								</li>
							</ul>
						</li>
						<li>
							<a>Invitations</a>
						</li>
						<li>
							<a>Authentication</a>
						</li>
					</ul>
					<p className="menu-label">Transactions</p>
					<ul className="menu-list">
						<li>
							<a>Payments</a>
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