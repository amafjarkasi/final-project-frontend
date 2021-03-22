import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export const ContactTeam = () => (
	<section className="section">
		<div className="container py-4">
			<h2 className="title has-text-centered mb-6">Contact our team</h2>
			<div className="columns">
				<div className="column is-6">
					<h4 className="title is-spaced is-4">Reach out about any questions you may have</h4>
					<p className="subtitle">
						We&apos;re here to answer your questions and discuss how our application can help your financial
						investments.
					</p>
					<div>
						<div className="media">
							<div className="media-left">
								<figure className="image is-24x24">
									<img src="https://bootstrapshuffle.com/placeholder/icons/map-marker.svg" alt="" />
								</figure>
							</div>
							<div className="media-content">
								<div className="content">
									<p>Investico HQ - 59 Collins Av.</p>
								</div>
							</div>
						</div>
						<div className="media">
							<div className="media-left">
								<figure className="image is-24x24">
									<img src="https://bootstrapshuffle.com/placeholder/icons/phone.svg" alt="" />
								</figure>
							</div>
							<div className="media-content">
								<div className="content">
									<p>800-234-5678</p>
								</div>
							</div>
						</div>
						<div className="media">
							<div className="media-left">
								<figure className="image is-24x24">
									<img src="https://bootstrapshuffle.com/placeholder/icons/envelope.svg" alt="" />
								</figure>
							</div>
							<div className="media-content">
								<div className="content">
									<p>support@investico.com</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="column is-5 is-offset-1">
					<form>
						<div className="field">
							<div className="control">
								<input className="input" type="email" placeholder="Email" />
							</div>
						</div>
						<div className="field">
							<div className="select is-fullwidth">
								<select>
									<option disabled="" selected="">
										Select question
									</option>
									<option>Pre-sales</option>
									<option>Technical support</option>
									<option>Other</option>
								</select>
							</div>
						</div>
						<div className="field">
							<div className="control">
								<textarea className="textarea" rows="5" placeholder="Write something..." />
							</div>
						</div>
						<div className="field">
							<div className="control">
								<button className="button is-primary is-fullwidth" type="submit">
									Submit
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
);
