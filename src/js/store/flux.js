import { Portfolio } from "../views/portfolio";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			amaf_url: "",
			hector_url: "",
			camilla_url: "",
			base_url: "https://3000-green-seahorse-8vq8lccz.ws-us03.gitpod.io",
			fmp_url: process.env.FMP_API_URL + "/",
			fmp_api: process.env.FMP_API_GLOBAL,

			user: {
				loggedIn: false,
				username: "",
				token: null,
				info: null
			},
			register: {
				full_name: "",
				email: "",
				password: ""
			},
			portfolio: {
				question_1: "",
				question_2: "",
				question_3: "",
				question_4: "",
				question_5: ""
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			gainerStocks: () => {
				return fetch(fmp_url + `api/v3/stock/gainers?apikey=${fmp_api}`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						// store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			signupPage: (full_name, email, password) => {
				return fetch(getStore().base_url + "/signup", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						// let store = getStore();
						//  store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						// setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			login: (email, password) => {
				return fetch(getStore().base_url + "/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						let store = getStore();
						// store.user = {
						// 	loggedIn: true,
						// 	email: email,
						// 	token: data.jwt,
						// 	info: data.user
						// };
						// setStore(store);
						// sessionStorage.setItem("currentUser", JSON.stringify(data));
						// sessionStorage.setItem("loggedIn", true);
						setStore({
							token: data
						});
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			isLoggedIn: () => {
				const store = getStore();
				if (sessionStorage.getItem("currentUser")) {
					store.user = {
						loggedIn: sessionStorage.getItem("loggedIn")
					};
					setStore(store);
				}
			},
			logout: () => {
				setStore({
					user: {
						loggedIn: false,
						username: "",
						token: null,
						info: null
					}
				});
			},
			portfolio: (question_1, question_2, question_3, question_4, question_5) => {
				return fetch(getStore().base_url + "/portfolio", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						question_1: question_1,
						question_2: question_2,
						question_3: question_3,
						question_4: question_4,
						question_5: question_5
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						// let store = getStore();
						//  store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						// setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			buy: buyStock => {
				return fetch(getStore().base_url + "/buy", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						price: buyStock.price,
						date: buyStock.date,
						quantity: buyStock.quantity,
						symbol: buyStock.symbol,
						total_purchase: buyStock.total_purchase
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						// let store = getStore();
						//  store.user = {
						// 	token: data.jwt,
						// 	info: data.user
						// };
						// setStore(store);
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
