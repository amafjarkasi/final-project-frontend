import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export const MarketNews = () => {
	const [getNews, setGetNews] = useState([]);
	useEffect(() => {
		finnhubClient.generalNews("business", {}, (error, data, response) => {
			setGetNews(response.body);
		});
	}, []);
	const result = getNews.filter(article => article.category == "business");
	console.log("$$", result);
	return (
		<>
			<div className="rows">
				<div className="row">
					{result.map((news, index) => {
						if (index < 5) {
							return (
								<article className="media" key={index}>
									<figure className="media-left">
										<p className="image is-128x128">
											<img src={news.image} />
										</p>
									</figure>
									<div className="media-content">
										<div className="content">
											<p>
												<a href={news.url} rel="noreferrer" target="_blank">
													<strong>{news.headline}</strong>
												</a>
												<br />
												{news.summary}
											</p>
										</div>
									</div>
								</article>
							);
						}
					})}
				</div>
			</div>
		</>
	);
};

//return <div className="rows">{getNews != null ? <IterrateNews /> : "Loading..."}</div>;
// };
