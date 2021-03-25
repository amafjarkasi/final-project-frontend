import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export const Features = () => (
	<>
		<section className="section">
			<div className="container has-text-centered py-4">
				<h2 className="title mb-6">Some of our financial features</h2>
				<div className="columns pt-4 mb-6">
					<div className="column is-4">
						<div className="block">
							<span className="number has-background-success" style={{ marginRight: 0 }}>
								1
							</span>
						</div>
						<h3 className="title">Security</h3>
						<p>Your data is virtually unhackable compared to traditional net</p>
					</div>
					<div className="column is-4">
						<div className="block">
							<span className="number has-background-success" style={{ marginRight: 0 }}>
								2
							</span>
						</div>
						<h3 className="title">Privacy</h3>
						<p>Nobody is tracking you when your activity when you use investico</p>
					</div>
					<div className="column is-4">
						<div className="block">
							<span className="number has-background-success" style={{ marginRight: 0 }}>
								3
							</span>
						</div>
						<h3 className="title">Speed</h3>
						<p>Previously unimaginable analysis thanks to direct brokerage information</p>
					</div>
				</div>
			</div>
			<div className="container has-text-centered">
				<div className="columns is-multiline">
					<div className="column is-6 is-3-desktop">
						<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
						<h4 className="title is-4">Security</h4>
						<p>Your data is virtually unhackable compared to traditional net</p>
					</div>
					<div className="column is-6 is-3-desktop">
						<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
						<h4 className="title is-4">Privacy</h4>
						<p>Nobody is tracking you when your activity when you use investico</p>
					</div>
					<div className="column is-6 is-3-desktop">
						<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
						<h4 className="title is-4">Speed</h4>
						<p>Previously unimaginable analysis thanks to direct brokerage information</p>
					</div>
					<div className="column is-6 is-3-desktop">
						<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
						<h4 className="title is-4">Decentralization</h4>
						<p>Decentralized design allows data to flow freely and efficiently</p>
					</div>
				</div>
			</div>
		</section>
	</>
);
