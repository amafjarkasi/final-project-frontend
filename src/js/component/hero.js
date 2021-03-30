import React, { useContext, useState, useEffect, Component } from "react";
import stockpic from "../../img/stockpic.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Hero = () => {
	const { store, actions } = useContext(Context);
	const [full_name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<section className="hero is-link" style={{ backgroundColor: "rgb(148 180 147)" }}>
				<div className="hero-body">
					<div className="container">
						<div className="columns is-vcentered">
							<div className="column is-6">
								<h1
									className="title is-spaced"
									style={{
										color: "rbg(241 235 235)",
										fontSize: "54px"
									}}>
									Welcome To Investico
								</h1>
								<p className="subtitle" style={{ color: "rbg(241 235 235)" }}>
									{`
                            We've built a decentralized financial research app where information is totally free in every sense of the
                            word and provides tools to help with your investment research.
                            `}
								</p>

								{/* MAKE SURE TO DO THIS BEFORE PRESENTATION!!  
                        make sure to use logic in this section so user can sign up! At the moment these are just empty input fields. I would 
                        just copy and paste code from your sign up section and use it here.  */}

								<div className="columns">
									<div className="column is-half-desktop">
										<form>
											{/* <div className="field">
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="Full Name"
														value={full_name}
														onChange={e => setFullName(e.target.value)}
													/>
												</div>
											</div> */}
											{/* <div className="field">
												<div className="control">
													<input
														className="input"
														type="text"
														placeholder="Email"
														value={email}
														onChange={e => setEmail(e.target.value)}
													/>
												</div>
											</div> */}
											{/* <div className="field">
												<div className="control">
													<input
														className="input"
														type="password"
														placeholder="Password"
														value={password}
														onChange={e => setPassword(e.target.value)}
													/>
												</div>
											</div> */}
											<div className="field is-grouped">
												<div className="control">
													<Link to="/login">
														<button className="button is-danger pl-5 pr-5">Log in</button>
													</Link>
												</div>
												<div className="control">
													<Link to="/signup">
														<button className="button is-danger pl-5 pr-5">Sign up</button>
													</Link>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="column is-6 ">
								<img className="stock-image" src={stockpic} alt="" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
