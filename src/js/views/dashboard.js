import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { MarketNews } from "../component/marketnews";

export const Dashboard = () => {
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-7">
						<section className="section">
							{/* <div className="container"> */}
							<div className="box">
								<MarketNews />
							</div>
							{/* </div> */}
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
