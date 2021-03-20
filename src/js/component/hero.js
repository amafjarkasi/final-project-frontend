import React, { Component } from "react";

export const Hero = () => (
	<section className="hero is-link">
		<div className="hero-body">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-6">
						<h1 className="title is-spaced">Financial Freedom</h1>
						<p className="subtitle">
							{`
                            We've built a decentralized financial research app where information is totally free in every sense of the
                            word and provides tools to help with your investment research.
                            `}
						</p>
						<div className="columns">
							<div className="column is-half-desktop">
								<form>
									<div className="field">
										<div className="control">
											<input className="input" type="text" placeholder="Login" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input className="input" type="password" placeholder="Password" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input className="input" type="password" placeholder="Repeat password" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<button className="button is-danger">Sign up</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="column is-6">
						<img src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
);
