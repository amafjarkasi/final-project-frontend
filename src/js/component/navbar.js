import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

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
						<Link to="/" className="navbar-item">
							Home
						</Link>
						<Link to="/features" className="navbar-item">
							Features
						</Link>
						<Link to="/pricing" className="navbar-item">
							Pricing
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Menu</a>
							<div className="navbar-dropdown">
								<Link to="/dashboard" className="navbar-item navbar-item-dropdown">
									Dashboard
								</Link>
								<Link to="/profile" className="navbar-item navbar-item-dropdown">
									Profile
								</Link>
								<Link to="/portfolio" className="navbar-item navbar-item-dropdown">
									Portfolio
								</Link>
								<Link to="/contact" className="navbar-item navbar-item-dropdown">
									Contact Us
								</Link>
							</div>
						</div>
					</div>
					<div>
						<div className="navbar-item">
							<div className="buttons">
								<Link to="/login" className="button has-text-dark">
									Log In
								</Link>
								<Link to="/signup" className="button is-danger">
									Sign Up
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
