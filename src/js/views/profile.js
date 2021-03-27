import React, { useState, useContext } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
// import Charlie from "../../img/charlie.jpg";
import { AvatarGenerator } from "random-avatar-generator";
import { Context } from "../store/appContext";

const generator = new AvatarGenerator();

generator.generateRandomAvatar();

export const Profile = () => {
	const { store, actions } = useContext(Context);
	const [question1, setQuestion1] = useState(["Select Dropdown", "$0 - $10,000", "$10,001 - $50,000", "$50,000 +"]);
	const [question2, setQuestion2] = useState(["Select Dropdown", "Passive", "Aggressive", "Mixed"]);
	const [question3, setQuestion3] = useState(["Quick Flip", "Short Term", "Long Term"]);

	const handleQuestion1Change = e => {
		console.log(question1[e.target.value]);
	};

	const handleQuestion2Change = e => {
		console.log(question2[e.target.value]);
	};

	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-5">
						<div className="flex-shrink-0 pt-5">
							<div className="box has-text-centered has-background-white">
								<div>
									<div className="flex-shrink-0">
										<div className="profile-image pb-1">
											<a href="#" className="image is-64x64 m-auto">
												<img
													alt="profil"
													src={generator.generateRandomAvatar()}
													className="is-rounded"
												/>
											</a>
										</div>
									</div>
									<div className="mb-4">
										<p className="has-text-grey-dark">Charlie</p>
										<p className="has-text-grey-dark-light is-size-7">CTO</p>
									</div>
									<div className="columns pt-3 pb-4 is-rounded">
										<div className="column">
											<h6 className="title is-6">How much do you want to invest?</h6>
											<div className="select is-normal">
												<select onChange={e => handleQuestion1Change(e)}>
													{question1.map((value, index) => (
														<option key={index} value={index}>
															{value}
														</option>
													))}
												</select>
											</div>
										</div>
										<div className="column">
											<h6 className="title is-6">Investment Style</h6>
											<div className="select is-normal">
												<select onChange={e => handleQuestion2Change(e)}>
													{question2.map((value, index) => (
														<option key={index} value={index}>
															{value}
														</option>
													))}
												</select>
											</div>
										</div>
									</div>
									<div className="columns pt-3 pb-4 is-rounded">
										<div className="column">
											<h6 className="title is-6">How long do you want to invest?</h6>
											<div className="select is-normal">
												<select>
													<option selected>Select dropdown</option>
													<option>Quick Flip</option>
													<option>Short Term</option>
													<option>Long Term</option>
												</select>
											</div>
										</div>
									</div>
									<button
										type="button"
										className="button is-success"
										// onClick={() =>
										// 	actions.profile(
										// 		question_1,
										// 		question_2,
										// 		question_3
										// 		// question_4,
										// 		// question_5
										// 	)
										// }
									>
										Save Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
