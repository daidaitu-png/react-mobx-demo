import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Layout from "./Layout";
import Board from "./Board";
import Article from "./Article";
import NotFound from "./NotFound";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						{/* <Route path="board" element={<Board />} /> */}
						{/* 默认二级 添加index */}
						<Route index element={<Board />} />
						<Route path="article" element={<Article />} />
					</Route>
					<Route path="/login" element={<Login />} />
					{/* 当所有的路径都没有匹配时，返回NotFound */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
