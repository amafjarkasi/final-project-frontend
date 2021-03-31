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
			async buy(buyStock) {
				const store = getStore();
				const actions = getActions();

				await fetch(store.base_url + "/buy", {
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
						setStore({ display_success: 1 });
						actions.popToasterSuccess();
						return data;
					})
					.catch(err => {
						setStore({ display_success: 2 });
						actions.popToasterFail();
						console.error(err);
						return false;
					});
			},
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			popToasterSuccess: () => {
				const store = getStore();
				const actions = getActions();
				console.log("!! success");
				toaster.success("Your purchase has been successful!", {
					description: "All purchases will be added to your transaction history.",
					duration: 10
				});
				setStore({ display_success: 0 });
			},
			popToasterFail: () => {
				const store = getStore();
				const actions = getActions();
				console.log("!! failed");
				toaster.danger("Your purchase has failed!", {
					description: "Please try your purchase again in a few minutes.",
					duration: 10
				});
				setStore({ display_success: 0 });
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
			async login(email, password) {
				const store = getStore();
				await fetch(store.base_url + "/login", {
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
						setStore({ token: data.jwt });
						let user_profile = data.user;
						setStore({
							user: {
								email: user_profile.email,
								full_name: user_profile.full_name,
								id: user_profile.id,
								loggedIn: true,
								token: data.jwt
							}
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
