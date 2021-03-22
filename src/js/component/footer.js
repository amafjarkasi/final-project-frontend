import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer has-background-light has-text-black">
		<div className="container has-background-light has-text-black">
			<div className="columns is-desktop">
				<div className="column is-5">
					<h2 className="title is-5 has-text-black">
						<a href="#" className="has-text-black">
							Investico
						</a>
					</h2>
					<p className="block has-text-black">A financial application</p>
					<div className="buttons">
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/twitter.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/facebook-f.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/instagram.svg" alt="" />
						</a>
					</div>
				</div>
				<div className="column">
					<h3 className="title is-6 has-text-black">Our Product</h3>
					<ul className="has-text-black">
						<li>
							<a href="/features">Features</a>
						</li>
						<li>
							<a href="#">Enterprise</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
						<li>
							<a href="#">ICO</a>
						</li>
					</ul>
				</div>
				<div className="column has-text-black">
					<h6 className="title is-6">App Links</h6>
					<ul>
						<li>
							<a href="/login">Log in</a>
						</li>
						<li>
							<a href="/signup">Sign up</a>
						</li>
						<li>
							<a href="/pricing">Pricing</a>
						</li>
						<li>
							<a href="/contact">Contact Us</a>
						</li>
					</ul>
				</div>
				<div className="column">
					<h6 className="title is-6">Contact</h6>
					<ul>
						<li>
							<a href="#">support@investico.com</a>
						</li>
						<li>
							<a href="#">800-234-5678</a>
						</li>
						<li>
							<a href="#">Investico HQ - 59 Collins Av.</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="columns">
				<div className="column">
					<a href="#">Terms and conditions</a>
				</div>
				<div className="column has-text-right-tablet">
					<p className="subtitle is-6">&copy; 2021 Investico. All right reserved.</p>
				</div>
			</div>
		</div>
	</footer>
);
