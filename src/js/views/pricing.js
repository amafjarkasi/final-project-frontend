import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export const PricingTable = () => (
	<section className="section">
		<div className="container has-text-centered py-4">
			<h2 className="title">Our plans</h2>
			<p className="subtitle mb-6">Choose one of our tailored solutions for you</p>
			<div className="columns">
				<div className="column">
					<div className="card">
						<div className="card-header">
							<h4 className="card-header-title is-centered">Small Investico</h4>
						</div>
						<div className="card-content">
							<h3 className="title is-2">
								<span>$49</span>
								<small className="has-text-grey">/ mo</small>
							</h3>
							<ul className="block">
								<li>25 Stock Analysis</li>
								<li>5 Stock Purchases</li>
								<li>1 User Max</li>
								<li>Unlimited Market News</li>
							</ul>
							<Link className="has-text-white-bis" to="/signup">
								<button className="button is-primary is-fullwidth" type="button">
									Sign up
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<div className="card-header">
							<h4 className="card-header-title is-centered">Medium Investico</h4>
						</div>
						<div className="card-content">
							<h3 className="title is-2">
								<span>$99</span>
								<small className="has-text-grey">/ mo</small>
							</h3>
							<ul className="block">
								<li>50 Stock Analysis</li>
								<li>10 Stock Purchases</li>
								<li>2 User Max</li>
								<li>Unlimited Market News</li>
							</ul>
							<Link className="has-text-white-bis" to="/signup">
								<button className="button is-danger is-fullwidth" type="button">
									Get started
								</button>
							</Link>
						</div>
					</div>
				</div>
				<div className="column">
					<div className="card">
						<div className="card-header">
							<h4 className="card-header-title is-centered">Enterprise Investico</h4>
						</div>
						<div className="card-content">
							<h3 className="title is-2">
								<span>$149</span>
								<small className="has-text-grey">/ mo</small>
							</h3>
							<ul className="block">
								<li>75 Stock Analysis</li>
								<li>15 Stock Purchases</li>
								<li>3 User Max</li>
								<li>Unlimited Market News</li>
							</ul>
							<Link className="has-text-white-bis" to="/signup">
								<button className="button is-primary is-fullwidth" type="button">
									Get started
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
