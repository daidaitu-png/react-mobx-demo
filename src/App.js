import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Link to={"/"}>首页</Link>
				<Link to={"/about"}>关于</Link>
				<Routes>
					<Route path="/:id" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
