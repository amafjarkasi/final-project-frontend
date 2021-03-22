import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export const Footer = () => (
	<footer className="footer has-background-light has-text-black">
		<div className="container has-background-light has-text-black">
			<div className="columns is-desktop">
				<div className="column is-5">
					<h2 className="title is-5 has-text-black">
						<Link to="/" className="has-text-black">
							Investico
						</Link>
					</h2>
					<p className="block has-text-black">A financial application</p>
					<div className="buttons">
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/twitter.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/facebook-f.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/instagram.svg" alt="" />
						</a>
					</div>
				</div>
				<div className="column">
					<h3 className="title is-6 has-text-black">Our Product</h3>
					<ul className="has-text-black">
						<li>
							<Link to="/features" className="has-text-black">
								Features
							</Link>
						</li>
						<li>
							<a href="#">Enterprise</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
						<li>
							<a href="#">ICO</a>
						</li>
					</ul>
				</div>
				<div className="column has-text-black">
					<h6 className="title is-6">App Links</h6>
					<ul>
						<li>
							<Link to="/login" className="has-text-black">
								Log In
							</Link>
						</li>
						<li>
							<Link to="/signup" className="has-text-black">
								Sign Up
							</Link>
						</li>
						<li>
							<Link to="/pricing" className="has-text-black">
								Pricing
							</Link>
						</li>
						<li>
							<Link to="/contact" className="has-text-black">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
				<div className="column">
					<h6 className="title is-6">Contact</h6>
					<ul>
						<li>
							<a href="#">support@investico.com</a>
						</li>
						<li>
							<a href="#">800-234-5678</a>
						</li>
						<li>
							<a href="#">Investico HQ - 59 Collins Av.</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="columns">
				<div className="column">
					<a href="#">Terms and conditions</a>
				</div>
				<div className="column has-text-right-tablet">
					<p className="subtitle is-6">&copy; 2021 Investico. All right reserved.</p>
				</div>
			</div>
		</div>
	</footer>
);
