import React from "react";

export const Login = () => {
	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<h2 className="title has-text-centered mb-6">Login</h2>
					<div className="columns is-centered">
						<div className="column is-5 is-4-desktop">
							<form>
								<div className="field">
									<div className="control">
										<input className="input" type="email" placeholder="Email" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input className="input" type="password" placeholder="Password" />
									</div>
								</div>
								<div className="field">
									<button className="button is-danger is-fullwidth">Sign in!</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
