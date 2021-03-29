import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { EmailShareButton, FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { EmailIcon, FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";

const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = process.env.FINNHUB_API_GLOBAL;
const finnhubClient = new finnhub.DefaultApi();

export const MarketNews = () => {
	const [getNews, setGetNews] = useState([]);
	useEffect(() => {
		finnhubClient.generalNews("business", {}, (error, data, response) => {
			setGetNews(response.body);
		});
	}, []);
	const result = getNews.filter(article => article.category == "business");
	return (
		<>
			{/* <div className="box"> */}
			<div className="rows">
				<h2 className="title">Market News</h2>
				{result.map((news, index) => {
					if (index < 5) {
						return (
							<>
								<div className="row mb-0 pb-2" >
									<article className="media is-small mb-0 pb-0" key={index}>
										<figure className="media-left">
											<p className="image is-128x128">
												<img lassName="image is-128x128" src={news.image} />
											</p>
										</figure>
										<div className="media-content">
											<div className="content">
												<p>
													<a href={news.url} rel="noreferrer" target="_blank">
														<strong>{news.headline}</strong>
													</a>
													<br />
													{news.summary.length > 145
														? news.summary.slice(0, 145) + "..."
														: news.summary}
													<br />
													<div className="pt-3">
														<EmailShareButton className="pr-2" url={news.url}>
															<EmailIcon size={24} round={false} />
														</EmailShareButton>
														<TwitterShareButton className="pr-2" url={news.url}>
															<TwitterIcon size={24} round={false} />
														</TwitterShareButton>
														<FacebookShareButton className="pr-2" url={news.url}>
															<FacebookIcon size={24} round={false} />
														</FacebookShareButton>
														<WhatsappShareButton className="pr-2" url={news.url}>
															<WhatsappIcon size={24} round={false} />
														</WhatsappShareButton>
													</div>
												</p>
											</div>
										</div>
									</article>
								</div>
							</>
						);
					}
				})}
			</div>
			{/* </div> */}
		</>
	);
};

//return <div className="rows">{getNews != null ? <IterrateNews /> : "Loading..."}</div>;
// };
