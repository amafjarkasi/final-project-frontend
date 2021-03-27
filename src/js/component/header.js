import React from "react";

export const Header = () => {
	return (
		<>
			<section className="hero">
				<div className="hero-body">
					<div className="container has-text-centered pt-4">
						{/* <h1 className="title is-spaced">Bringing the Internet of the Future to the People</h1> */}
						<h2 className="subtitle">
							{`
               
                    `}
						</h2>
					</div>
					<hr className="my-6" />
					<div className="columns has-text-centered">
						<div className="column is-3 mb-6">
							<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
							<h4 className="title is-4">Trust</h4>
							<p>Your data is safe when using Investico</p>
						</div>
						<div className="column is-3 mb-6">
							<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
							<h4 className="title is-4">Privacy</h4>
							<p>Your information is safe when using Investico</p>
						</div>
						<div className="column is-3 mb-6">
							<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
							<h4 className="title is-4">Top Notch</h4>
							<p>We beat the competition providing you with the best investment choices</p>
						</div>
						<div className="column is-3 mb-6">
							<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
							<h4 className="title is-4">Decentralization</h4>
							<p>Decentralized design allows data to flow freely and efficiently</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
