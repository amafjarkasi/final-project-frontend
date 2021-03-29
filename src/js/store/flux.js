import { Portfolio } from "../views/portfolio";
import { toaster } from "evergreen-ui";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			amaf_url: "",
			hector_url: "",
			camilla_url: "",
			base_url: "https://3000-amber-pig-r6cup6aq.ws-us03.gitpod.io",
			fmp_url: process.env.FMP_API_URL + "/",
			fmp_api: process.env.FMP_API_GLOBAL,
			display_success: 0,

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

			profile: {
				question1: "",
				question2: "",
				question3: ""
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			popToasterSuccess: () => {
				toaster.success("Your purchase has been successful!", {
					description: "All purchases will be added to your transaction history.",
					duration: 10
				});
			},
			popToasterFail: () => {
				toaster.danger("Your purchase has failed!", {
					description: "Please try your purchase again in a few minutes.",
					duration: 10
				});
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
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

			profile: (question1, question2, question3) => {
				return fetch(getStore().base_url + "/profile", {
					method: "GET, POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						question1: "how much do you want to invest",
						question2: "investment style",
						question3: "how long do you want to invest"
					})
				})
					.then(resp => {
						if (!resp.ok) {
							throw new Error(resp.statusText);
						}
						return resp.json();
					})
					.then(data => {
						return true;
					})
					.catch(err => {
						console.error(err);
						return false;
					});
			},
			buy: buyStock => {
				fetch(getStore().base_url + "/buy", {
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
						//getActions().popToasterSuccess();
						return resp.json();
					})
					.then(data => {
						return true;
					})
					.catch(err => {
						console.error(err);
						//getActions().popToasterFail();
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
