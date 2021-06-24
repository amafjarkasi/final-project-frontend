import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Howitworks = () => (
	<section className="section">
		<div className="container py-2">
			<div className="columns is-vcentered">
				<div className="column is-6">
					<h2 className="title">How it works</h2>
					<h3 className="title is-5">{`Answer Three Simple Questions!`}</h3>
					<p className="subtitle is-6 pr-5">
						{`We've designed a simple, efficient process for companies migrating to Investico.`}
						<br />
						{`Here's how it
						works.`}
					</p>
					<div className="buttons">
						<Link to="/signup" className="button is-success">
							Start Setup!
						</Link>
						<Link to="/signup" className="button is-text">
							Watch more
						</Link>
					</div>
				</div>
				<div className="column is-6">
					<div className="media">
						<div className="media-left">
							<div className="number has-background-success has-text-white">1</div>
						</div>
						<div className="media-content">
							<div className="content">
								<h3>Move Data</h3>
								<p>
									Using our Investico application, you can move your data to be stored our
									decentralized network with simple drag & drop.
								</p>
							</div>
						</div>
					</div>
					<div className="media">
						<div className="media-left">
							<div className="number has-background-success has-text-white">2</div>
						</div>
						<div className="media-content">
							<div className="content">
								<h3>Integrate Software</h3>
								<p>
									We want to make sure that you can keep using the software that you use to manage
									your business.
								</p>
							</div>
						</div>
					</div>
					<div className="media">
						<div className="media-left">
							<div className="number has-background-success has-text-white">3</div>
						</div>
						<div className="media-content">
							<div className="content">
								<h3>Ongoing Support</h3>
								<p>
									As with all innovative technologies, sometimes unpredictable things will happen, and
									you can always count on our support to solve issues for you.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);
