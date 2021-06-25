# 📈 Investico Financial - Stock Research & Analysis

### Summary:
<p align="center">Investico has the capability of doing in-depth and detailed research on stocks, viewing top stocks/sectors, looking up market news on specific stocks and getting definitive analysis on your stock searches. The application was coded in React, JavaScript, Bulma UI, HTML/CSS and backend is in Python/Flask.</p>

### Screencasts:
<p align="center">
<a href="https://recordit.co/1QjPh5EENE" target="_blank"><img src="http://g.recordit.co/1QjPh5EENE.gif" alt="Homepage" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/GEIFeG4xe7" target="_blank"><img src="http://g.recordit.co/GEIFeG4xe7.gif" alt="Dashboard/Profile" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/vFb8jbXQR4" target="_blank"><img src="http://g.recordit.co/vFb8jbXQR4.gif" alt="Technical Analysis" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/2pgZvyq9pT" target="_blank"><img src="http://g.recordit.co/2pgZvyq9pT.gif" alt="Stock Lookup" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/GFEdd766Gh" target="_blank"><img src="http://g.recordit.co/GFEdd766Gh.gif" alt="Stock Rating" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/3Zrdc7YFg3" target="_blank"><img src="http://g.recordit.co/3Zrdc7YFg3.gif" alt="News Lookup" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/7hdcIR8fre" target="_blank"><img src="http://g.recordit.co/7hdcIR8fre.gif" alt="Market Sectors" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/piX0Kz6Qpq" target="_blank"><img src="http://g.recordit.co/piX0Kz6Qpq.gif" alt="Most Active" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/RTIYaDbmBu" target="_blank"><img src="http://g.recordit.co/RTIYaDbmBu.gif" alt="Most Gainer" border="0"></a>
</p>

<p align="center">
<a href="https://recordit.co/cljugKR7uB" target="_blank"><img src="http://g.recordit.co/cljugKR7uB.gif" alt="Most Loser" border="0"></a>
</p>






### Requirements:
- Make sure you are using node version 10

1. Install the packages:
```
$ npm install
```
2. Create a .env file:
```
$ cp .env.example .env
```
3. Start coding! and the webpack dev server with live reload, for windows, mac, linux or Gitpod:

```bash
$ npm run start
```

### Styles
You can update the `styles/index.scss` or create new `.scss` files inside `styles/` and import them into your current scss or js files depending on your needs.

### Components
Add more files into your `./src/js/components` or styles folder as you need them and import them into your current files as needed.

**Note (New changes)**: Components have been converted into functions to support the use of hooks:
* Instead of a class component, we're using a `const` function.
* Class `constructor` and `state` have been replaced by `useState()` hooks.
* `componentDidMount()` was replaced by `useEffect({}, [])` - It runs at mount thanks to the second parameter (`[]`).
* `Actions` and `Store` still work the same way.

```jsx
// Previous "Class Oriented"
export class Demo extends React.Component {
	constructor(props) {
		super(props);

		this.state = getState('code here');
	}
}

// New "Functional Oriented"
export const Demo = () => (
	const [state, setState] = getState('code here'); //using the state (if needed)
  const { store, actions } = useContext(Context); // using the context (if needed)

);
```

💡Note: There is an example using the Context API inside `views/demo.js`;

### Views (Components)
Add more files into your `./src/js/views` and import them in `./src/js/layout.jsx`.

### Context
This boilerplate comes with a centralized general Context API. The file `./src/js/store/flux.js` has a base structure for the store, we encourage you to change it and adapt it to your needs.

React Context [docs](https://reactjs.org/docs/context.html)
BreathCode Lesson [view](https://content.breatheco.de/lesson/react-hooks-explained)

The `Provider` is already set. You can consume from any component using the useContext hook to get the `store` and `actions` from the Context. Check `/views/demo.js` to see a demo.

```jsx
import { Context } from "../store/appContext";
const MyComponentSuper = () => {
  //here you use useContext to get store and actions
  const { store, actions } = useContext(Context);
  return <div>{/* you can use your actions or store inside the html */}</div>
}
```

## Publish your website!

1. **Vercel:** The FREE recomended hosting provider is [vercel.com](https://vercel.com/), you can deploy in 1 minutes by typing the following 2 commands:

Login (you need to have an account):
```sh
$ npm i vercel -g && vercel login
```
Deploy:
```sh
$ vercel --prod
```
✎ Note: If you don't have an account just go to vercel.com, create a account and come back here.

![Vercel example procedure to deploy](https://github.com/4GeeksAcademy/react-hello-webapp/blob/4b530ba091a981d3916cc6e960e370decaf2e234/docs/deploy.png?raw=true)

2. **Github Pages:** This boilerplate is 100% compatible with the free github pages hosting.
To publish your website you need to push your code to your github repository and run the following command after:
```sh
$ npm run deploy
```
Note: You will need to [configure github pages for the branch gh-pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages)
