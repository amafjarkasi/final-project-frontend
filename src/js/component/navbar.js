import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import InvestLogo from "../../img/InvestLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar is-info pt-3 pb-3">
			<div className="container">
				<div className="navbar-brand is-active">
					<a className="navbar-item" href="/">
						<i className="fas fa-ad"></i>
					</a>
					<a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item" href="/">
							Home
						</a>
						<a className="navbar-item" href="/pricing">
							Pricing
						</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Menu</a>
							<div className="navbar-dropdown">
								<a className="navbar-item navbar-item-dropdown" href="/dashboard">
									Dashboard
								</a>
								<a className="navbar-item navbar-item-dropdown" href="/profile">
									Profile
								</a>
								<a className="navbar-item navbar-item-dropdown" href="/portfolio">
									Portfolio
								</a>
								<a className="navbar-item navbar-item-dropdown" href="/contact">
									Contact Us
								</a>
							</div>
						</div>
					</div>
					<div>
						<div className="navbar-item">
							<div className="buttons">
								<a className="button has-text-dark" href="#">
									<Link to="/login">Log in</Link>
								</a>
								<a className="button is-danger" href="/signup">
									Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
